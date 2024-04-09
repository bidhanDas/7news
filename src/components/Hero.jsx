"use client"
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-bootstrap'

const Hero = (props) => {
  return (
    <div className="container section-top">
        <div className='row'>
            <div className='col-md-8 col-lg-8 col-sm-12 p-1 col-12'>
                <Carousel>

                    {
                    props.slider.data.map((item)=>{
                        return (
                            <Carousel.Item>
                               <Link href={`/details?id=${item.id}`}>
                                  <img alt="img" className="w-100" src={item.img1} /> {/* ExampleCarouselImage */}
                                  <Carousel.Caption>
                                  <h3>{item.title}</h3>
                                  <p>{item.short_des}</p>
                                  </Carousel.Caption>
                               </Link>
                            </Carousel.Item>
                        )
                    })
                    }
                    
                </Carousel>
            </div>

            <div className='col-md-4 col-lg-4 col-sm-6 p-1 col-6'>
                <Link href={`/details?id=${props.featured.data[0].id}`} className="card h-100">
                        <img alt="" className="card-img w-100 h-100 rounded-2" src={props.featured.data[0].img2}/>
                        <div className="card-img-overlay d-flex align-items-end">
                            <div className="caption">
                                <h4>{props.featured.data[0].title}</h4>
                                <p>{props.featured.data[0].short_des}</p>
                            </div>
                        </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero