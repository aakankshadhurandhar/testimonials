import React from 'react'
import './Main.css'
import useFetch from '../Usefetch'
export default function Main() {
    const { data: quote } = useFetch(`https://testimonialapi.toolcarton.com/api`)
    console.log(quote)
    return (
        <div >
            <div className="rectangle">
                    <div className="main_rectangle">
                            <div className="main_heading">
                                    TESTIMONIALS
                            </div>
                            <div className="message_heading">
                                {quote[0].message}
                            </div>
                            <div className="lorem">
                                {quote[0].lorem}
                            </div>
                    </div>
            </div>
        </div>
    )
}
