import React from "react"

import "./index.css"

type ITestimonialCard = {
    name: string,
    designation: string,
    testimonial: string
}

const TestimonialCard: React.FC<ITestimonialCard> = ({
    name,
    designation,
    testimonial
}) => {
    return <div className="testimonial-root">
        <div className="testimonal-header">
            <h3>{name}</h3>
            <h5>{designation}</h5>
        </div>
        <p className="testimonial-text">{testimonial}</p>
    </div>
}

export default TestimonialCard;