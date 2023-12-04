import React, { useEffect, useState } from "react"
import TestimonialCard from "../TestimonialCard"

import "./index.css"
import Ticker from "../Ticker"

type ITestimonials = {}

const testimonials = [
    {
        name: "Jack F",
        designation: "Ex Blackrock PM",
        testimonial: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
    },
    {
        name: "Yash P",
        designation: "Research, 3poch Crypto Hedge Fund",
        testimonial: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
    },
    {
        name: "Shiv S",
        designation: "Co-Founder Magik Labs",
        testimonial: "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
    },

]

const Testimonials: React.FC<ITestimonials> = () => {
    const [isPlaying, setIsPlaying] = React.useState(true)

    const [width, setWidth] = useState(0);

    const calcWidth = () => {
        const elem = document.getElementById("testimonials-wrapper")
        if (elem) {
            const parentWidth = elem.offsetWidth;
            if (window.innerWidth > 1100) {
                setWidth((parentWidth / 100) * 90)
            }

            if(window.innerWidth <= 1100) {
                setWidth(parentWidth)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', calcWidth)
        calcWidth()
        return () => {
            window.removeEventListener('resize', calcWidth)
        }
    }, [])

    return <div className="testimonials" style={{ width: width }}>
        <Ticker 
            duration={20} 
            onMouseEnter={() => setIsPlaying(false)} 
            onMouseLeave={() => setIsPlaying(true)} 
            isPlaying={isPlaying}
            drag={true}
        >
            {testimonials.map((testimonial) => <TestimonialCard
                {...testimonial} />)}
        </Ticker>
    </div>
}

export default Testimonials