import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Alex Thompson",
            role: "Founder, TechFlow",
            text: "Chrishen's ability to blend high-end design with performant code is truly rare. He transformed our vision into a digital masterpiece."
        },
        {
            name: "Sarah Jenkins",
            role: "Creative Director, Arise",
            text: "The 3D visualizations Chrishen produced for our product launch were breathtaking. A true professional who understands storytelling."
        },
        {
            name: "Michael Ross",
            role: "CTO, BitLevel",
            text: "Reliable, creative, and technically proficient. Working with Chrishen was a seamless experience from start to finish."
        }
    ];

    return (
        <section id="testimonials" className="section container">
            <div className="section-header">
                <span className="section-tag">TESTIMONIALS</span>
                <h2 className="section-title">What people say<br />about my work.</h2>
            </div>

            <div className="testimonials-grid">
                {reviews.map((review, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-quote">
                            <Quote size={32} />
                        </div>
                        <p className="testimonial-text">"{review.text}"</p>
                        <div className="testimonial-author">
                            <span className="author-name">{review.name}</span>
                            <span className="author-role">{review.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
