import React, { Component } from 'react';
import './carousel.css'

// images
import desktopExample1 from '../images/desktopExample1.jpg'
import desktopExample2 from '../images/desktopExample2.jpg'
import desktopExample3 from '../images/desktopExample3.jpg'
import desktopExample4 from '../images/desktopExample4.jpg'
import desktopExample5 from '../images/desktopExample5.jpg'
import desktopExample6 from '../images/desktopExample6.jpg'
import desktopExample7 from '../images/desktopExample7.jpg'


class ImagesCarouselMobile extends Component {


    render(){

        return(
        <div>

            <div className='wrapper'>
            <div className='carousel' style={{marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', 
                                            textAlign: 'center'}}>

            <div className='carousel__item'>
                <img src={desktopExample1} alt="example1"
                style={{width: '300px', 
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px' }}
                />
            </div>

            <div className='carousel__item'>
                <img src={desktopExample2} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>

            <div className='carousel__item'>
                <img src={desktopExample3} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>
            <div className='carousel__item'>
                <img src={desktopExample4} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>
            <div className='carousel__item'>
                <img src={desktopExample5} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>
            <div className='carousel__item'>
                <img src={desktopExample6} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>
            <div className='carousel__item'>
            <img src={desktopExample7} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>
            <div className='carousel__item'>
            <img src={desktopExample2} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>
            <div className='carousel__item'>
            <img src={desktopExample4} alt="example1"
                style={{width: '300px',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '-70px', marginBottom: '-70px'}}
                />
            </div>
            
            </div>
            </div>
        </div>
        );

    }

}

export default ImagesCarouselMobile