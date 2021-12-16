import React, {useState} from 'react';
import {SliderData1} from './SliderData1.js';
import {SliderData2} from './SliderData2.js';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = (props) => {
    const {slides} = props
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    console.log(`slides`, slides)
    let newIndex 
    const max = slides.length -1
    console.log(`max`, max)
    if (current === max) {
        console.log("max")
        setCurrent(i => 0)

    } else {
        setCurrent(i => i + 1)
    }
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

console.log(current)

const moveDot = c => {
    console.log(c)
    setCurrent(c)
}

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData1.map((slide, index) => {
                return (
                <div className={index === current ? 'slideactive' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide.image} alt='project image' className="image"/>
                    )}
                </div>
                )
            })}
            <div className="slider-dots">
                {slides.map((item, index) => {
                    return <div onClick={() => {console.log(item, index); moveDot(index)}} className={index == current ? "dot-active" : "dot"}></div>
                })}
            </div>
        </section>
    )
}

export default ImageSlider
