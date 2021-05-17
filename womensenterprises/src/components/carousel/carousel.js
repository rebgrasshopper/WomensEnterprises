import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

export default function CarouselComponent({photos}){

    return (
        // <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        //     <div className="carousel-inner">
                
        //         {photos.map(({photo, alt}) => {
        //             return (
        //             <div className="carousel-item active" key={alt}>
        //                 <img src={photo} className="d-block w-100" alt={alt}></img>
        //             </div>
        //             )
        //         })}

        //     </div>
        // </div>





                    <div className='container-fluid' >
                         <Carousel>
                            {photos.map(({photo, alt, caption}) => {
                                return (
                                    <Carousel.Item style={{'height':"650px", 'objectFit':"cover"}} >
                                        <img style={{'height':"650px", 'objectFit':"cover"}} className="d-block w-100" src={photo} alt={alt}></img>
                                        <Carousel.Caption className="text-left">
                                            <h3>{caption}</h3>
                                        </Carousel.Caption >
                                    </Carousel.Item  >  
                                )
                            })}
                             
                        </Carousel>
                    </div> 
        )
}