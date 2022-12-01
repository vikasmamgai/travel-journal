import React from 'react';
import location from "../icons/location.png"

export default function Info(props) {
    return (
        <section className='container section--container'>
            <img className='img-container main-img' src={props.imageURL} alt={props.imgAlt} />
            <div className='text-area'>
                <div className='location--container'>
                    <img src={location} alt='' />
                    <p className='main-location'>
                        {props.location}
                        <span>
                            <a className='link-text' href={props.url}>
                                View on Google Maps
                            </a>
                        </span>
                    </p>
                </div>

                <h1 className='main-title'>{props.title}</h1>
                <span className='main-date'>{props.startDate} - {props.endDate}</span>
                <p className='main-description'>{props.description}</p>
            </div>
            <div className='border-bottom'></div>
        </section>
    )
}