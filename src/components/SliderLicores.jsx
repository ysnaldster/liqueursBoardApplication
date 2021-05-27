import React from 'react'
import { Carousel } from 'react-bootstrap'

function SliderLicores() {
    return (
        <Carousel style = {{marginLeft: '20%', marginTop: '30px', marginRight: '20%', marginBottom: '30px'}}>
            <Carousel.Item>
                <img
                    className="d-block "
                    src="https://i.ibb.co/hMp95K3/slider-3.jpg"
                    alt="First slide"
                    width='1000px'
                    height='500px'

                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block "
                    src="https://i.ibb.co/yfcYHhk/slider-1.jpg"
                    alt="Second slide"
                    width='1000px'
                    height='500px'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block "
                    src="https://i.ibb.co/1T27Z9m/slider-2.jpg"
                    alt="Third slide"
                    width='1000px'
                    height='500px'
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderLicores