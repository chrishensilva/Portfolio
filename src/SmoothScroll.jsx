import { useEffect, useRef, createContext, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollerContext = createContext(null);

/**
 * SmoothScroll
 *
 * Wraps children in a fixed-position container driven by a GSAP lerp ticker.
 * Exposes the wrapper element via ScrollerContext so child components (e.g.
 * Education) can pass it as the `scroller` to their ScrollTrigger instances.
 */
function SmoothScroll({ children }) {
    const wrapperRef = useRef(null);
    const state = useRef({ current: 0, target: 0 });

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        /* ── 1. Sync document scroll height to real content height ── */
        const syncHeight = () => {
            document.body.style.height = `${el.scrollHeight}px`;
        };
        syncHeight();
        const ro = new ResizeObserver(syncHeight);
        ro.observe(el);

        /* ── 2. Tell ScrollTrigger to use our virtual scroller ─────── */
        ScrollTrigger.scrollerProxy(el, {
            scrollTop(value) {
                if (arguments.length) {
                    state.current.target = value;
                }
                return state.current.current;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: 'transform',
        });

        ScrollTrigger.addEventListener('refresh', syncHeight);

        /* ── 3. Lerp ticker ─────────────────────────────────────────── */
        const lerp = (a, b, t) => a + (b - a) * t;

        const tick = () => {
            state.current.target = window.scrollY;
            state.current.current = lerp(
                state.current.current,
                state.current.target,
                0.085
            );
            const y = Math.round(state.current.current * 100) / 100;
            gsap.set(el, { y: -y });
            ScrollTrigger.update();
        };

        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();

        /* ── 4. Cleanup ─────────────────────────────────────────────── */
        return () => {
            gsap.ticker.remove(tick);
            ScrollTrigger.scrollerProxy(el, null);
            ScrollTrigger.removeEventListener('refresh', syncHeight);
            ro.disconnect();
            document.body.style.height = '';
            gsap.set(el, { clearProps: 'transform' });
        };
    }, []);

    return (
        <ScrollerContext.Provider value={wrapperRef}>
            <div
                ref={wrapperRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    overflow: 'hidden',
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </ScrollerContext.Provider>
    );
}

export const useScroller = () => useContext(ScrollerContext);

export default SmoothScroll;
