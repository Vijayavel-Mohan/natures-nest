import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    maxImage = 2;
    initialImage = 1;
    activeImage = 1;




    nextImage = () => {
        if (document.getElementById('img-' + this.activeImage)) {
            document.getElementById('img-' + this.activeImage).classList.remove('active');
            if (this.activeImage !== this.maxImage) {
                this.activeImage++;
                document.getElementById('img-' + (this.activeImage)).classList.add('active');
            } else {
                this.activeImage = this.initialImage;
                document.getElementById('img-' + this.activeImage).classList.add('active');
            }
        }
    }

    prevImage = () => {
        document.getElementById('img-' + this.activeImage).classList.remove('active');
        if (this.activeImage !== this.initialImage) {
            this.activeImage--;
            document.getElementById('img-' + (this.activeImage)).classList.add('active');
        } else {
            this.activeImage = this.maxImage;
            document.getElementById('img-' + this.activeImage).classList.add('active');
        }
    }


    componentDidMount() {
        setInterval(this.nextImage, 5000);
    }



    render() {
        return (

            <div id='image-carousel' className='carousel slide carousel-fade' data-ride='carousel'>
                <div className='carousel-inner'>
                    <div id='img-1' className='carousel-item active' >
                        <div id='img-slider-1' className='mask flex-center img-slider-common'>
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div className='col-md-7 col-12 order-md-1 order-2'>
                                        <h4 style={{color:'#88b44e'}}> Nature's Nest </h4><h4 style={{color:'#64676d'}}>100% Organic</h4>
                                        <p>
                                            Details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='img-2' className='carousel-item'>
                        <div id='img-slider-2' className='mask flex-center img-slider-common'>
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div className='col-md-7 col-12 order-md-1 order-2'>
                                        <h4 style={{color:'#88b44e'}}> Balance the life</h4>
                                        <p> Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={this.prevImage} className='carousel-control-prev carousel-control-prev-icon' data-slide='prev' />
                <span className='sr-only'>Previous</span>
                <button onClick={this.nextImage} className='carousel-control-next carousel-control-next-icon' data-slide='prev' />
                <span className='sr-only'>Next</span>
            </div>
        );
    }
}

export default Carousel;