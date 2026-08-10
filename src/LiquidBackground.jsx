import React, { useEffect, useRef } from 'react';

const VERTEX_SHADER_SRC = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SRC = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  float random (in vec2 _st) {
    return fract(sin(dot(_st.xy, vec2(12.789,78.233))) * 43758.5453123);
  }

  float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
  }

  #define NUM_OCTAVES 4

  float fbm (in vec2 st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(st);
        st = rot * st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
  }

  void main() {
    // Normalised pixel position
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 pixelCoord = uv;
    pixelCoord.x *= u_resolution.x / u_resolution.y;

    // Normalised mouse position
    vec2 mouseCoord = u_mouse;
    mouseCoord.x *= u_resolution.x / u_resolution.y;

    // Calculate distance to mouse
    float dist = distance(pixelCoord, mouseCoord);

    // Dynamic bubble lens distortion
    float bubbleRadius = 0.28;
    float bubbleStrength = 0.65;
    float bubbleInfluence = smoothstep(bubbleRadius, 0.0, dist);
    
    // Offset coordinates inside bubble to warp space outwards like a glass lens
    vec2 bubbleDistortion = vec2(0.0);
    if (dist > 0.0001) {
        bubbleDistortion = normalize(pixelCoord - mouseCoord) * bubbleInfluence * bubbleStrength;
    }

    // Apply scaling and bubble distortion
    vec2 st = pixelCoord * 3.0 + bubbleDistortion * 2.0;

    vec2 q = vec2(0.0);
    q.x = fbm(st + 0.005 * u_time);
    q.y = fbm(st + vec2(1.0));

    // Global ambient drift
    vec2 mouseOffset = (u_mouse - 0.5) * 0.4;

    vec2 r = vec2(0.0);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.08 * u_time + mouseOffset);
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.06 * u_time + mouseOffset);

    float f = fbm(st + r);

    // Color palettes adapted for dark theme + lime accent
    vec3 baseColor = vec3(0.055, 0.055, 0.063); // #0E0E10 matte dark grey
    vec3 limeAccent = vec3(0.784, 1.0, 0.0);    // #C8FF00 electric lime
    vec3 cyanAccent = vec3(0.0, 0.898, 1.0);    // #00E5FF cyan flow

    // Blend base and accent colors based on warped noise value f
    vec3 color = mix(baseColor, limeAccent, clamp(f * f * 2.5, 0.0, 1.0));
    color = mix(color, cyanAccent, clamp(length(q), 0.0, 1.0) * 0.15);

    // Highlight ripples
    color = mix(color, vec3(1.0), clamp(length(r.x) * 0.1, 0.0, 0.06));

    // Add glossy bubble lens boundary highlights
    float rimWidth = 0.02;
    float rim = smoothstep(bubbleRadius, bubbleRadius - rimWidth, dist) * smoothstep(bubbleRadius - rimWidth * 2.0, bubbleRadius - rimWidth, dist);
    color += rim * vec3(0.0, 0.898, 1.0) * 0.4; // cyan rim glow
    
    // Add specular bubble shine highlights
    float specDist = distance(pixelCoord, mouseCoord - vec2(0.05, 0.05));
    float specular = smoothstep(0.06, 0.0, specDist) * 0.25;
    color += specular * vec3(1.0);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function LiquidBackground() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // Helper to compile shaders
        const compileShader = (source, type) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vs = compileShader(VERTEX_SHADER_SRC, gl.VERTEX_SHADER);
        const fs = compileShader(FRAGMENT_SHADER_SRC, gl.FRAGMENT_SHADER);
        if (!vs || !fs) return;

        // Create shader program
        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);

        // Define a quad (2 triangles covering full screen)
        const vertices = new Float32Array([
            -1.0, -1.0,
             1.0, -1.0,
            -1.0,  1.0,
            -1.0,  1.0,
             1.0, -1.0,
             1.0,  1.0,
        ]);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // Locate uniform variables
        const uResolution = gl.getUniformLocation(program, 'u_resolution');
        const uTime = gl.getUniformLocation(program, 'u_time');
        const uMouse = gl.getUniformLocation(program, 'u_mouse');

        // Handle canvas size resizing
        const resize = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            }
        };
        resize();
        window.addEventListener('resize', resize);

        // Track mouse movements smoothly inside the hero section
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = 1.0 - (e.clientY - rect.top) / rect.height; // invert y for webgl
            mouseRef.current.targetX = x;
            mouseRef.current.targetY = y;
        };
        
        const parentSection = canvas.parentElement;
        parentSection?.addEventListener('mousemove', handleMouseMove);

        // Render loop
        let animationId;
        let startTime = performance.now();

        const render = () => {
            const currentTime = (performance.now() - startTime) / 1000.0;

            // Interpolate mouse movements smoothly (lerp)
            mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
            mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

            // Update uniforms
            gl.uniform2f(uResolution, canvas.width, canvas.height);
            gl.uniform1f(uTime, currentTime);
            gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationId = requestAnimationFrame(render);
        };
        render();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            parentSection?.removeEventListener('mousemove', handleMouseMove);
            gl.deleteBuffer(buffer);
            gl.deleteProgram(program);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.45, // keep it ambient so text remains readable
            }}
        />
    );
}
