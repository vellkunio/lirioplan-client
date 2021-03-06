import React, { Component } from 'react';
import AOS from 'aos';
import '../App.css'

import FrontImageTransition from '../components/FrontImageTransition'
import FrontImageTransitionDesktop from '../components/FrontImageTransitionDesktop'
import ReviewsTransitionDesktop from '../components/ReviewsTransitionDesktop'
import ReviewsTransitionTablet from '../components/ReviewsTransitionTablet'
import ImagesCarousel from '../components/ImagesCarousel'

import FrontPic1 from '../images/FrontPicture1.png';
import FrontPic2 from '../images/FrontPicture2.png';
import FrontPic3 from '../images/FrontPicture3.png';
import FrontPic4 from '../images/FrontPicture4.png';
import FrontPic5 from '../images/FrontPicture5.png';
import smallHorizontalLine from '../images/smallHorizontalLine.png';
import check from '../images/check.png';
import clock from '../images/clock.png';
import warranty from '../images/warranty.png';
import goldTexture from '../images/GoldMini.jpg';
import topLine from '../images/Topline.png';
import CircleSides from '../images/CircleSides.png';
import BottomLine from '../images/BottomLine.png';
import Example1 from '../images/Example1.jpg';
import Example2 from '../images/Example2.jpg';
import Example3 from '../images/Example3.jpg';
import LineDevider from '../images/LineDevider.png';
import Partners1 from '../images/Partners1.png';
import Partners2 from '../images/Partners2.png';
import Partners3 from '../images/Partners3.png';
import Partners4 from '../images/Partners4.png';
import Instagram from '../images/Instagram.png';
import Facebook from '../images/Facebook.png';
import TikTok from '../images/TikTok.png';


// DesktopImages
import TopDesktopDevider from '../images/TopDesktopDevider.png'
import LineDeviderDesktop from '../images/LineDeviderDesktop.png'


//mui stuff
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


// tips
//className="font-face-belleza" -- regular Belleza
//className="font-link" style={{fontSize: "60px", fontWeight: 300,400,700,900, fontStyle: 'italic'}}



//TODO
//Scmooth scroll - https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
//OnScroll effects - https://www.react-reveal.com/tutorials/
//Animate.js
//Parallax - https://www.npmjs.com/package/react-scroll-parallax


class home extends Component {

    constructor(props){
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state ={
            screenResolution: "375",
            images: [
                {
                  fontColor: 'white',
                  imgPath:
                    // 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                    FrontPic1,
                },
                {
                    fontColor: 'black',
                    imgPath:
                    // 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                    FrontPic2,
                },
                {
                    fontColor: 'white',
                    imgPath:
                    // 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
                    FrontPic3,
                },
                {
                    fontColor: 'black',
                    imgPath:
                    // 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                    FrontPic4,
                },
                {
                    fontColor: 'white',
                    imgPath:
                    // 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                    FrontPic5,
                },
              ],
            currentImage: 0,
            isChanging: false
        }
    }



    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
          this.setState({
            currentImage: this.state.currentImage + 1,
            isChanging: true
          });
        } else {
          this.setState({
            currentImage: 0
          });
        }
        this.setState({
            isChanging: false
          });
        return this.currentImage;
      }

      //uncomment for slide show
      componentDidMount() {
        setInterval(this.switchImage, 7000);
        AOS.init();
        AOS.refresh();
      }


    render() {

        const windowWidth=window.screen.availWidth;
        const isMac = navigator.platform === 'MacIntel' ? true : false;

        let isMobile = true;
        let isDesktop = false;
        let isTablet = false;



        if(windowWidth < 580){
            isMobile = true;
            isDesktop = false;
            isTablet = false;
        } 
        else if (windowWidth < 1366 && windowWidth >= 580  ){
            isMobile = false;
            isDesktop = false;
            isTablet = true;
        } 
        else {
            isMobile = false;
            isDesktop = true;
            isTablet = false;
        }

        // console.log(windowWidth);
        // console.log('Is mac? ' + isMac)
        // console.log('Mobile is: ' + isMobile);
        // console.log('Desktop is: ' + isDesktop);
        // console.log('Tablet is: ' + isTablet);

        return (

        <div>

            {isMobile && (

            
            <div className="mainDiv">
            <div >
                <FrontImageTransition />
            </div>

            <div>
            {/* <div style={{ backgroundImage: `url(${this.state.images[this.state.currentImage].imgPath})`,
            height: "715px", backgroundPosition: "center", backgroundSize: "cover"  }}>

                {this.state.images[this.state.currentImage].fontColor === 'black' ?
                <img src={bracketTopBlack} alt="bracket"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', paddingTop: '142px'
                    }}
                    /> :
                    <img src={bracketTop} alt="bracket"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', paddingTop: '142px'
                    }}
                />}



                <div className="font-belleza"
                style={{fontSize: "36px", display: 'block', textAlign: 'center',
                    letterSpacing: '6px', color: this.state.images[this.state.currentImage].fontColor}}>
                    LIRIOPLAN
                </div>

                <div className="font-belleza"
                style={{fontSize: "24px", display: 'block', textAlign: 'center',
                    letterSpacing: '6px', color: this.state.images[this.state.currentImage].fontColor}}>
                    Stone and tile
                </div>

                {this.state.images[this.state.currentImage].fontColor === 'black' ?
                <img src={bracketBtmBlack} alt="bracket"
                style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingTop: '16px'}}
                /> :
                    <img src={bracketBtm} alt="bracket"
                style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingTop: '16px'}}
                />}




                <div className="font-merriweather"
                style={{fontSize: "16px", display: 'block', textAlign: 'right',
                    letterSpacing: '4px', color: this.state.images[this.state.currentImage].fontColor,
                    fontWeight: 300, fontStyle: 'italic', paddingTop: '96px', lineHeight: '150%',
                    paddingRight: '69px' }}>
                    ???Make your house<br></br>
                    stand out???<br></br>
                    -LIRIOPLAN, 2001
                </div>

                <Button variant="contained"
                style={{color: 'white', backgroundColor: 'rgba(78, 90, 87, 0.6)',
                    marginRight: '69px', marginLeft: 'auto', marginTop: '32px', position: 'right'
                }}
                sx={{display:'flex', justifyContent: 'flex-end'}}
                onClick={() => {
                    window.location.href = 'tel:+15196359053';
                }}
                >
                    Contact us
                </Button>

            </div>
            */}

            </div>


            <div
            style={{ textAlign:"center",  fontWeight:"400",
                fontStyle:"italic", fontSize: '24px', letterSpacing: "4px",
                opacity: '80%', paddingTop: '781px'
                }} >
                <h1
                data-aos="fade-up-right"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather" >
                    LIRIOPLAN
                </h1>
            </div>

            {/* <NumberCount number={30}/> */}

            <div style={{ textAlign:"center",  fontWeight:"400",
                fontStyle:"normal", fontSize: '16px', letterSpacing: "4px",
                marginTop: "16px", lineHeight: '180%', width: '312px',
                marginLeft: "auto", marginRight: 'auto'
                }} >
                <p
                data-aos="fade-up-left"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather" >
                Most professional tile
                installation in Ontario. We
                design and install inside
                and outside tile and
                decorative rocks. Do you
                need to intall or upgrade
                tile? Let professionals
                take care of it!
                </p>
            </div>

                {/* BGElipse */}
                <div>
                    <div style={{
                        width: '541px', height: '541px', position:' absolute',
                        left: '-350px', background: 'rgba(118, 87, 72, 0.4)',
                        zIndex: '0', WebkitFilter: 'blur(75px)', borderRadius: '30%',
                        top: '968px'
                    }}>
                    </div>

                    <div style={{
                        width: '50px', height: '432px', position:' absolute',
                        right: '0px', background: 'rgba(201, 212, 106, 0.5)',
                        zIndex: '0', WebkitFilter: 'blur(75px)', borderRadius: '50%',
                        top: '1746px'
                        
                    }}></div>

                    <div style={{
                        width: '360px', height: '490px', position:' absolute',
                        left: '7px', background: 'rgba(127, 132, 255, 0.1)',
                        zIndex: '0', WebkitFilter: 'blur(75px)', borderRadius: '50%',
                        top: '2440px'
                        
                    }}></div>

                    <div style={{
                        width: '646px', height: '646px', position:' absolute',
                        left: '-504px', background: 'rgba(118, 87, 72, 0.2)',
                        zIndex: '0', WebkitFilter: 'blur(70px)', borderRadius: '30%',
                        top: '2812px'
                    }}>
                    </div>

                    <div style={{
                        width: '100px', height: '300px', position:' absolute',
                        right: '0px', background: 'rgba(201, 212, 106, 0.2)',
                        zIndex: '0', WebkitFilter: 'blur(90px)', borderRadius: '50%, 0, 0, 50%',
                        top: '3500px'
                        
                    }}></div>

                    <div style={{
                        width: '300px', height: '490px', position:' absolute',
                        left: '7px', background: 'rgba(127, 132, 255, 0.1)',
                        zIndex: '0', WebkitFilter: 'blur(100px)', borderRadius: '50%',
                        top: '4000px'
                        
                    }}></div>

                    <div style={{
                        width: '541px', height: '541px', position:' absolute',
                        left: '-400px', background: 'rgba(201, 212, 106, 0.15)',
                        zIndex: '0', WebkitFilter: 'blur(100px)', borderRadius: '50%',
                        top: '5100px'
                    }}>
                    </div>

                    <div style={{
                        width: '141px', height: '300px', position:' absolute',
                        right: '0px', background: 'rgba(157, 82, 82, 0.15)',
                        zIndex: '0', WebkitFilter: 'blur(70px)', borderRadius: '50%, 0, 0, 50%',
                        top: '5500px'
                        
                    }}></div>

                    
                </div>
                

            {/* Cards */}
            <div>
                {/* More and line */}
                <div>
                    <div className="font-merriweather" style={{
                        textAlign:"center",  fontWeight:"400",
                        fontStyle:'italic', fontSize:'48px',
                        letterSpacing: '4px', marginTop:'32px'
                    }}>
                        MORE
                    </div>

                    {/* line here */}
                    <img src={smallHorizontalLine} alt="line"
                        style={{display: 'block', marginLeft: 'auto',
                        marginRight: 'auto', padding: '0px',
                        pointerEvents: 'none'
                        }}
                    />

                    <div className="font-merriweather" style={{
                        textAlign:"center",  fontWeight:"400",
                        fontStyle:'italic', fontSize:'18px',
                        letterSpacing: '4px', marginTop:'8px'
                    }}>
                        than just tile
                    </div>


                </div>

                {/* Cards */}
                <div>
                    {/* Card1 */}
                    <div
                    data-aos="fade-right"
                    // data-aos="fade-up"
                    // data-aos-anchor-placement="bottom-bottom"
                    style={{
                    width: '267px', height: '278px',
                    marginTop: '40px', marginLeft: 'auto', marginRight: 'auto',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', zIndex: '1',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={check} alt="check"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none', zIndex: '3'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px', zIndex: '3'
                        }}>
                            Perfection
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto',marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%', 
                        zIndex: '3',
                        }}>
                            With best quality
                            installation your house
                            will make you happy for
                            over a hundred years
                        </p>

                    </div>

                    {/* Card2 */}
                    <div
                    data-aos="fade-left"
                    style={{
                    width: '267px', height: '278px',
                    marginTop: '40px', marginLeft: 'auto', marginRight: 'auto',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={clock} alt="clock"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px'
                        }}>
                            In time
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto',marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%'
                        }}>
                            Time can be
                            challenging, but we
                            know how important it
                            is to finish in time
                        </p>
                    </div>

                    {/* card3 */}
                    <div
                    data-aos="fade-right"
                    style={{
                    width: '267px', height: '278px',
                    marginTop: '40px', marginLeft: 'auto', marginRight: 'auto',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={warranty} alt="warranty"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px'
                        }}>
                            Warranty
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto', marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%'
                        }}>
                            Our company is
                            confident at we do,
                            that???s why we give
                            warranty to all of our
                            clients
                        </p>
                    </div>

                    {/* End cards */}
                </div>

            {/* Cards */}
            </div>

            {/* Circles section*/}
            <div>
                {/* Header */}
                <div>
                    <h3 className="font-merriweather"
                    style={{
                        textAlign: 'center', fontWeight: '700',
                        fontSize: '28px', letterSpacing: '0.05em',
                        fontStyle: 'italic', marginTop: '56px',
                        marginLeft: '-55px',
                        backgroundImage: `url(${goldTexture})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                    >
                        You imagine it
                    </h3>

                    {/* Top Line */}
                    <img src={topLine} alt="line"
                        style={{display: 'block', marginLeft: 'auto',
                        marginRight: 'auto', padding: '0px', width: '297px',
                        position: 'absolute', textAlign: 'center',
                        left: '0', right: '0', marginTop: '8px', pointerEvents: 'none'
                        }}
                    />

                    <h3 className="font-merriweather"
                    style={{
                        textAlign: 'center', fontWeight: '700',
                        fontSize: '28px', letterSpacing: '0.05em',
                        fontStyle: 'italic', marginTop: '16px',
                        marginLeft: '85px',
                        backgroundImage: `url(${goldTexture})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                    >
                        we create it
                    </h3>

                    {/* end header */}
                </div>

                {/* Circle1 */}

                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: 'white', borderStyle: 'solid',
                        borderWidth: '2px', marginLeft: 'auto', marginRight: 'auto',
                        marginTop: '32px'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'white'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'white',
                                letterSpacing: '0.17em',
                            }}>12.712</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'white', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>clients</p>

                            <div style={{
                                display: 'block', width: '8px', height: '8px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "white", marginTop: '48px'
                            }}>
                            </div>

                        </div>

                    </div>

                    {/* Circle Sides */}
                    <img src={CircleSides} alt="line"
                        style={{display: 'block', marginLeft: 'auto',
                        marginRight: 'auto', padding: '0px', width: '297px',
                        position: 'absolute', textAlign: 'center',
                        left: '0', right: '0', marginTop: '38px', pointerEvents: 'none'
                        }}
                    />




                {/* Circle2 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: '#22123D', borderStyle: 'solid',
                        borderWidth: '2px', marginLeft: 'auto', marginRight: 'auto',
                        marginTop: '32px'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'black'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'black',
                                letterSpacing: '0.17em',
                            }}>12.000</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'black', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>projects</p>

                            <div style={{
                                display: 'block', width: '8px', height: '8px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "black", marginTop: '48px'
                            }}>
                            </div>

                        </div>

                    </div>


                {/* Circle3 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: 'white', borderStyle: 'solid',
                        borderWidth: '2px', marginLeft: 'auto', marginRight: 'auto',
                        marginTop: '32px'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'white'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'white',
                                letterSpacing: '0.17em',
                            }}>49</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'white', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>employees</p>

                            <div style={{
                                display: 'block', width: '8px', height: '8px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "white", marginTop: '48px'
                            }}>
                            </div>

                        </div>

                    </div>



            {/* Circles section end */}
            </div>

            {/* BottomLine */}
            <img src={BottomLine} alt="line"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', width: '297px',
                position: 'absolute', textAlign: 'center',
                left: '0', right: '0', marginTop: '-157px',
                pointerEvents: 'none'
                }}
            />

        {/* Benefits */}
        <div>
            <h3 className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"700",
            fontSize:'32px', color: 'white', opacity: '50%',
            letterSpacing: '0.2em', marginTop:'64px'
            }}>
                BENEFITS
            </h3>

            {/* Benefit1 */}
            <h5 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-belleza" style={{
                marginTop: '32px', textAlign: 'center', fontWeight: "400",
                fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                color: 'white'
            }}>
                Relax
            </h5>

            <p 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'black',
            width: '250px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.17em', marginTop:'16px', lineHeight: '160%'
            }}>
                Put all hard work on us
                and enjoy doing what
                you love to do
            </p>

            <div 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            style={{
                height: '53px', width: '1px', backgroundColor: 'black',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '8px'
            }}></div>

            {/* Benefit2 */}
            <h5
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-belleza" style={{
                marginTop: '32px', textAlign: 'center', fontWeight: "400",
                fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                color: 'white'
            }}>
                Stand out
            </h5>

            <p 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'black',
            width: '250px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.17em', marginTop:'16px', lineHeight: '160%'
            }}>
                Become owner of the
                best house in the
                neighborhood
            </p>

            <div 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            style={{
                height: '53px', width: '1px', backgroundColor: 'black',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '8px'
            }}></div>

            {/* Benefit3 */}
            <h5 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-belleza" style={{
                marginTop: '32px', textAlign: 'center', fontWeight: "400",
                fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                color: 'white'
            }}>
                Get help
            </h5>

            <p 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'black',
            width: '250px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.17em', marginTop:'16px', lineHeight: '160%'
            }}>
                Not sure what you
                want? Pick best for
                your house together
                with our designers
            </p>

            <Button variant="contained"
            style={{backgroundColor: 'rgba(35, 32, 71, 0.25)',
            marginRight: 'auto', marginLeft: 'auto', marginTop: '48px', position: 'center',

            }}
            sx={{display:'flex'}}
            >
            <p className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'white',
            width: '250px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.1em', lineHeight: '160%'
            }}
            onClick={() => {
                window.location.href = 'tel:+15196359053';
            }}
            >
                GET a free estimate
            </p>
            </Button>
        </div>

        {/* Examples */}
        <div>

            <h2 className="font-merriweather" style={{
                opacity: '15%', fontSize: '46px', fontWeight: '900',
                lineHeight: '60px', letterSpacing: '0.05em', textAlign: 'center',
                marginTop: '56px', color: 'white'
            }}>
                EXAMPLES
            </h2>

            <div>
            
                <img 
                data-aos="zoom-out-up"
                data-aos-anchor-placement="center-bottom"
                src={Example1} alt="Example Bathroom"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', width: '289px',
                    textAlign: 'center',
                    left: '0', right: '0', marginTop: '40px'
                    }}
                />
                <img 
                data-aos="zoom-out-up"
                data-aos-anchor-placement="center-bottom"
                src={Example2} alt="Example Bathroom"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', width: '289px',
                    textAlign: 'center',
                    left: '0', right: '0', marginTop: '40px'
                    }}
                />
                <img 
                data-aos="zoom-out-up"
                data-aos-anchor-placement="center-bottom"
                src={Example3} alt="Example Bathroom"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', width: '289px',
                    textAlign: 'center',
                    left: '0', right: '0', marginTop: '40px'
                    }}
                />
            
             </div>

            {/* Devider */}
            <img src={LineDevider} alt="Devider"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', marginTop: '64px',
                pointerEvents: 'none', width: '286px'
                }}
            />

        </div>

        {/* Also */}
        <div>

        <h4 
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        className="font-merriweather"
        style={{
        textAlign:"center",  fontWeight:"700",
        fontSize:'32px', color: 'white', opacity: '50%',
        letterSpacing: '0.2em', marginTop:'32px'
        }}>
            ALSO
        </h4>

        {/* Also1 */}
        <h2 
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        className="font-merriweather" style={{
        opacity: '95%', fontSize: '22px', fontWeight: '400',
        lineHeight: '28px', letterSpacing: '0.17em', textAlign: 'center',
        marginTop: '56px', color: 'white'
        }}>
            Top-quality tile
        </h2>

        <p 
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        className="font-merriweather"
        style={{
        textAlign:"center",  fontWeight:"400",
        fontSize:'16px', color: 'white',
        width: '260px', marginLeft: 'auto', marginRight: 'auto',
        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%',
        opacity: '80%'
        }}>
            We work only with the
            best manufacturers who
            proved their quality
            after decades, for you, to
            feel even more luxury
        </p>

        {/* devider */}
        <div style={{
            height: '0.5px', width: '139px', backgroundColor: 'black',
            marginLeft: 'auto', marginRight: 'auto', marginTop: '40px'
        }}></div>

        {/* Also2 */}
        <h2 
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        className="font-merriweather" style={{
        opacity: '95%', fontSize: '22px', fontWeight: '400',
        lineHeight: '28px', letterSpacing: '0.17em', textAlign: 'center',
        marginTop: '40px', color: 'white'
        }}>
            Unique Styles
        </h2>

        <p 
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        className="font-merriweather"
        style={{
        textAlign:"center",  fontWeight:"400",
        fontSize:'16px', color: 'white',
        width: '260px', marginLeft: 'auto', marginRight: 'auto',
        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%',
        opacity: '80%'
        }}>
            We love doing unique
            projects by combining
            our expirience and your
            wishes
        </p>

        {/* Devider */}
        <img src={LineDevider} alt="Devider"
            style={{display: 'block', marginLeft: 'auto',
            marginRight: 'auto', padding: '0px', marginTop: '40px',
            pointerEvents: 'none', width: '286px'
            }}
        />

        </div>

        {/* Reviews */}
        <div>

        <h2 className="font-merriweather"
        style={{
        textAlign:"center",  fontWeight:"900",
        fontSize:'32px', color: 'white', opacity: '50%',
        letterSpacing: '0.2em', marginTop:'32px'
        }}>
            REVIEWS
        </h2>

        <div style={{
            // width: `${this.windowWidth + 300}`,
            width: this.windowWidth,
            whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden'
        }}>

            {/* Review 1 */}
            <div style={{
                width: '234px', height: '327px', display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px', marginTop: '32px', marginBottom: '40px',
                marginLeft: '70px', marginRight: '24px'
            }}>
                <h5 className="font-belleza" style={{
                    color: 'white', fontWeight: '400', fontSize: '18px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.17em',
                    paddingTop: '40px'
                }}>
                    Helen Bychkova
                </h5>

                <h6 className="font-merriweather" style={{
                    color: 'rgba(127, 132, 255, 0.8)', fontWeight: '700', fontSize: '16px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '32px'
                }}>
                    [ Glad I found you ]
                </h6>

                <p className="font-merriweather" style={{
                    color: 'white', fontWeight: '300', fontSize: '12px',
                    lineHeight: '19px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '8px', width: '186px', whiteSpace: 'normal',
                    overflowX: 'hidden', overflowY: 'hidden', marginLeft: 'auto', marginRight: 'auto'
                }}>
                    I was building a house
                    and my biggest struggle
                    was to make everything
                    in my style. Lirioplan
                    didn???t just help me to
                    make it georgeous, but
                    also suggested some
                    extra tips which made it
                    look 1000% better!
                </p>

            </div>

            {/* Review 2 */}
            <div style={{
                width: '234px', height: '327px', display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px', marginTop: '32px', marginBottom: '40px', marginRight: '24px'
            }}>
                <h5 className="font-belleza" style={{
                    color: 'white', fontWeight: '400', fontSize: '18px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.17em',
                    paddingTop: '40px'
                }}>
                    Alexander Martinez
                </h5>

                <h6 className="font-merriweather" style={{
                    color: 'rgba(127, 132, 255, 0.8)', fontWeight: '700', fontSize: '16px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '32px'
                }}>
                    [ Best of the best ]
                </h6>

                <p className="font-merriweather" style={{
                    color: 'white', fontWeight: '300', fontSize: '12px',
                    lineHeight: '19px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '8px', width: '186px', whiteSpace: 'normal',
                    overflowX: 'hidden', overflowY: 'hidden', marginLeft: 'auto', marginRight: 'auto'
                }}>
                    Thank you so much! Very
                    client-oriented company.
                    All guys are very polite,
                    friendly and professional.
                    Came in time and did
                    everything better than I
                    expected. Sure it???s going
                    to last forever.
                </p>

            </div>

            {/* Review 3 */}
            <div style={{
                width: '234px', height: '327px', display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px', marginTop: '32px', marginBottom: '40px',
                marginRight: '70px'
            }}>
                <h5 className="font-belleza" style={{
                    color: 'white', fontWeight: '400', fontSize: '18px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.17em',
                    paddingTop: '40px'
                }}>
                    Vasyl Caniuca
                </h5>

                <h6 className="font-merriweather" style={{
                    color: 'rgba(127, 132, 255, 0.8)', fontWeight: '700', fontSize: '16px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '32px'
                }}>
                    [ Thank you! ]
                </h6>

                <p className="font-merriweather" style={{
                    color: 'white', fontWeight: '300', fontSize: '12px',
                    lineHeight: '19px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '8px', width: '186px', whiteSpace: 'normal',
                    overflowX: 'hidden', overflowY: 'hidden', marginLeft: 'auto', marginRight: 'auto'
                }}>
                    Just wanted to thank Sam
                    and his team for an
                    excellent service and
                    perfect tile installation.
                    I have been working with
                    Lirioplan for many years
                    now and it is the only
                    company I trust in Ontario


                </p>

            </div>

        </div>



        </div>

        {/* Partners */}
        <div>

        <h2 className="font-merriweather"
        style={{
        textAlign:"center",  fontWeight:"900",
        fontSize:'32px', color: 'white', opacity: '15%',
        letterSpacing: '0.2em', marginTop:'32px'
        }}>
            PARTNERS
        </h2>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <img 
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-bottom"
            src={Partners1} alt="Millstone Logo"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', width: '133px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />
            </Grid>
            <Grid item xs={6}>
            <img 
            data-aos="zoom-out-left"
            data-aos-anchor-placement="center-bottom"
            src={Partners2} alt="Ironstone Build Logo"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', width: '133px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />
            </Grid>
            <Grid item xs={6}>
            <img 
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-bottom"
            src={Partners3} alt="Rembrands Homes Logo"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', width: '133px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />
            </Grid>
            <Grid item xs={6}>
            <img 
            data-aos="zoom-out-left"
            data-aos-anchor-placement="center-bottom"
            src={Partners4} alt="Forever Homes Logo"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', width: '133px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />
            </Grid>
        </Grid>

        <Button variant="contained"
            style={{backgroundColor: 'rgba(35, 32, 71, 0.5)',
            marginRight: 'auto', marginLeft: 'auto', marginTop: '48px', position: 'center',

            }}
            sx={{display:'flex'}}
            >
            <p className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'white',
            width: '250px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.1em', lineHeight: '160%'
            }}
            onClick={() => {
                window.location.href = 'tel:+15196359053';
            }}
            >
                Book installation
            </p>
        </Button>

        {/* End Partners */}
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <img
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-bottom"
            src={Instagram} alt="Instagram"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', height: '60px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0', opacity: '0.9'
                }}
            />
            </Grid>
            <Grid item xs={6}>
            <img 
            data-aos="zoom-out-left"
            data-aos-anchor-placement="center-bottom"
            src={Facebook} alt="Ironstone Build Logo"
                style={{display: 'block', marginLeft: 'auto',
                marginRight: 'auto', padding: '0px', height: '60px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0', opacity: '0.9'
                }}
            />
            </Grid>
        </Grid>


        <p className="font-belleza"
        style={{
        textAlign:"center",  fontWeight:"400",
        fontSize:'10px', color: 'white',
        width: '266px', paddingLeft: 'auto', paddingRight: 'auto',
        letterSpacing: '0.17em', paddingTop:'40px', lineHeight: '12px',
        background: "#000000", marginLeft: 'auto', marginRight: 'auto', marginBottom: '-80px', paddingBottom: '20px'
        }}>
            ?? 2021 Lirioplan Ltd. Trademarks and brands
            are the property of their respective owners.
            <br></br>
            Made by 
            <a href="https://vilkun.software" target="_blank" rel="noreferrer" style={{
                color: 'white'
            }}> Vellkunio </a>
        </p>



        {/* Main div */}
        </div>

        )}

        {isDesktop && (
            <div className='desktopMainDiv'>
                <div className='MainDesktopDiv'>
                <FrontImageTransitionDesktop />
                </div>

                    { isMac ? 
                    <div></div> : <div>

                        <div style={{
                            width: '839px', height: '839px', position:' absolute',
                            left: '300px', background: 'rgba(55, 203, 185, 0.05)',
                            zIndex: '0', WebkitFilter: 'blur(100px)', borderRadius: '30%',
                            top: '1321px'
                        }}>
                        </div>
                        <div style={{
                            width: '800px', height: '1000px', position:' absolute',
                            right: '0px', background: 'rgba(55, 61, 203, 0.12)',
                            zIndex: '0', WebkitFilter: 'blur(120px)', borderRadius: '30%',
                            top: '700px'
                        }}>
                        </div>
                        <div style={{
                            width: '780px', height: '780px', position:' absolute',
                            left: '-367px', background: 'rgba(201, 212, 106, 0.10)',
                            zIndex: '0', WebkitFilter: 'blur(120px)', borderRadius: '30%',
                            top: '1393px'
                        }}>
                        </div>
                        <div style={{
                            width: '1202px', height: '1202px', position:' absolute',
                            left: '-582px', background: 'rgba(55, 61, 203, 0.08)',
                            zIndex: '0', WebkitFilter: 'blur(150px)', borderRadius: '30%',
                            top: '2321px'
                        }}>
                        </div>
                    </div>

                    }


                {/* BGElipse */}
                {/* <div>
                    <div style={{
                        width: '839px', height: '839px', position:' absolute',
                        left: '300px', background: 'rgba(55, 203, 185, 0.05)',
                        zIndex: '0', WebkitFilter: 'blur(100px)', borderRadius: '30%',
                        top: '1321px'
                    }}>
                    </div>
                    <div style={{
                        width: '800px', height: '1000px', position:' absolute',
                        right: '0px', background: 'rgba(55, 61, 203, 0.12)',
                        zIndex: '0', WebkitFilter: 'blur(120px)', borderRadius: '30%',
                        top: '700px'
                    }}>
                    </div>
                    <div style={{
                        width: '780px', height: '780px', position:' absolute',
                        left: '-367px', background: 'rgba(201, 212, 106, 0.10)',
                        zIndex: '0', WebkitFilter: 'blur(120px)', borderRadius: '30%',
                        top: '1393px'
                    }}>
                    </div>
                    <div style={{
                        width: '1202px', height: '1202px', position:' absolute',
                        left: '-582px', background: 'rgba(55, 61, 203, 0.08)',
                        zIndex: '0', WebkitFilter: 'blur(150px)', borderRadius: '30%',
                        top: '2321px'
                    }}>
                    </div>
                </div> */}

                <img src={TopDesktopDevider} alt="devider"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', width: '1044px',
                    position: 'absolute', textAlign: 'center',
                    left: '0', right: '0', marginTop: '117vh',
                    pointerEvents: 'none'
                    }}
                />

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={7}>
                    <div style={{
                        marginLeft:'100px'
                    }}>
                        <div
                            style={{ textAlign:"center",  fontWeight:"400",
                            fontStyle:"italic", fontSize: '24px', letterSpacing: "4px",
                            opacity: '80%', paddingTop: '114vh'
                            }} >
                            <h1
                            data-aos="fade-up-right"
                            data-aos-anchor-placement="center-bottom"
                            className="font-merriweather" >
                                LIRIOPLAN
                            </h1>
                            </div>

                            <div style={{ textAlign:"center",  fontWeight:"400",
                            fontStyle:"normal", fontSize: '16px', letterSpacing: "4px",
                            marginTop: "16px", lineHeight: '180%', width: '312px',
                            marginLeft: "auto", marginRight: 'auto'
                            }} >
                            <p
                            data-aos="fade-up-left"
                            data-aos-anchor-placement="center-bottom"
                            className="font-merriweather" >
                            Most professional tile
                            installation in Ontario. We
                            design and install inside
                            and outside tile and
                            decorative rocks. Do you
                            need to intall or upgrade
                            tile? Let professionals
                            take care of it!
                            </p>
                        </div>

                    {/* More and line */}
                    <div>
                        <div className="font-merriweather" style={{
                            textAlign:"center",  fontWeight:"400",
                            fontStyle:'italic', fontSize:'60px',
                            letterSpacing: '4px', marginTop:'180px'
                        }}>
                            MORE
                        </div>

                        {/* line here */}
                        <img src={LineDeviderDesktop} alt="line"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px',
                            pointerEvents: 'none', width: '210px'
                            }}
                        />

                        <div className="font-merriweather" style={{
                            textAlign:"center",  fontWeight:"400",
                            fontStyle:'italic', fontSize:'24px',
                            letterSpacing: '4px', marginTop:'8px'
                        }}>
                            than just tile
                        </div>
                    </div>
                </div>

                    </Grid>
                    <Grid item xs={5} alignItems='center' justify="center" >
                    
                    {/* Circles */}
                    <div styles={{
                        marginTop: '1000px'
                    }}>
                            
                    {/* Circle1 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: 'white', borderStyle: 'solid',
                        borderWidth: '2px', 
                        // marginTop: '780px'
                        marginTop: '114vh'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'white'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'white',
                                letterSpacing: '0.17em',
                            }}>12.712</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'white', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>clients</p>

                            <div style={{
                                display: 'block', width: '9px', height: '9px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "white", marginTop: '48px'
                            }}>
                            </div>

                        </div>

                    </div>

                    {/* Circle Sides */}
                    {/* {windowWidth === 1920 && ( */}
                    <img src={CircleSides} alt="circle sides"
                        style={{
                        // marginRight: '22.4vw', padding: '0px', width: '297px',
                        width: '297px', marginLeft: '-47px',
                        position: 'absolute', marginTop: '36px', pointerEvents: 'none'
                        }}
                    />
                    {/* )} */}



                {/* Circle2 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: '#22123D', borderStyle: 'solid',
                        borderWidth: '2px',
                        marginTop: '32px'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'black'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'black',
                                letterSpacing: '0.17em',
                            }}>12.000</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'black', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>projects</p>

                            <div style={{
                                display: 'block', width: '9px', height: '9px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "black", marginTop: '48px'
                            }}>
                            </div>

                        </div>

                    </div>


                {/* Circle3 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: 'white', borderStyle: 'solid',
                        borderWidth: '2px',
                        marginTop: '32px'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'white'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'white',
                                letterSpacing: '0.17em',
                            }}>49</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'white', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>employees</p>

                            <div style={{
                                display: 'block', width: '9px', height: '9px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "white", marginTop: '48px'
                            }}>
                            </div>
                        </div>
                    </div>
                    {/* Circles section end */}
                    </div>
                    </Grid>
                </Grid>

                {/* Cards */}
                <div style={{
                    marginTop: '50px', alignItems: 'center', textAlign: 'center'
                }}>
                    {/* Card1 */}
                    <div
                    // data-aos="fade-right"
                    data-aos="fade-up-right"
                    // data-aos-anchor-placement="bottom-bottom"
                    style={{
                    width: '267px', height: '278px', display: 'inline-block',
                    marginTop: '40px', marginLeft: '20px', marginRight: '20px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', zIndex: '1',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={check} alt="check"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none', zIndex: '3'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px', zIndex: '3'
                        }}>
                            Perfection
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto',marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%', 
                        zIndex: '3',
                        }}>
                            With best quality
                            installation your house
                            will make you happy for
                            over a hundred years
                        </p>

                    </div>

                    {/* Card2 */}
                    <div
                    data-aos="fade-up"
                    style={{
                    width: '267px', height: '278px', display: 'inline-block',
                    marginTop: '40px', marginLeft: '20px', marginRight: '20px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={clock} alt="clock"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px'
                        }}>
                            In time
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto',marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%'
                        }}>
                            Time can be
                            challenging, but we
                            know how important it
                            is to finish in time
                        </p>
                    </div>

                    {/* card3 */}
                    <div
                    data-aos="fade-up-left"
                    style={{
                    width: '267px', height: '278px', display: 'inline-block',
                    marginTop: '40px', marginLeft: '20px', marginRight: '20px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={warranty} alt="warranty"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px'
                        }}>
                            Warranty
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto', marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%'
                        }}>
                            Our company is
                            confident at we do,
                            that???s why we give
                            warranty to all of our
                            clients
                        </p>
                    </div>

                    {/* End cards */}
                </div>

        {/* Benefits */}
        <div>
            <h3 className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"700",
            fontSize:'32px', color: 'white', opacity: '50%',
            letterSpacing: '0.2em', marginTop:'64px'
            }}>
                BENEFITS
            </h3>

        <div style={{textAlign: 'center'}}>

            {/* Benefit1 */}
            <div style={{display: 'inline-block'}}>
                <h5 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-belleza" style={{
                    marginTop: '32px', textAlign: 'center', fontWeight: "400",
                    fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                    color: 'white'
                }}>
                    Relax
                </h5>

                <div 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                style={{
                    height: '1px', width: '100px', backgroundColor: 'black',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: '16px'
                }}></div>

                <p 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'black',
                width: '250px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'8px', lineHeight: '160%'
                }}>
                    Put all hard work on us
                    and enjoy doing what
                    you love to do
                </p>
            </div>

            {/* Benefit2 */}
            <div style={{display: 'inline-block'}}>
                <h5
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-belleza" style={{
                    marginTop: '32px', textAlign: 'center', fontWeight: "400",
                    fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                    color: 'white'
                }}>
                    Stand out
                </h5>

                <div 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                style={{
                    height: '1px', width: '100px', backgroundColor: 'black',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: '16px'
                }}></div>

                <p 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'black',
                width: '250px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'8px', lineHeight: '160%'
                }}>
                    Become owner of the
                    best house in the
                    neighborhood
                </p>

                
            </div>

            {/* Benefit3 */}
            <div style={{display: 'inline-block'}}>
            <h5 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-belleza" style={{
                marginTop: '32px', textAlign: 'center', fontWeight: "400",
                fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                color: 'white'
            }}>
                Get help
            </h5>

            <div 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            style={{
                height: '1px', width: '100px', backgroundColor: 'black',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '16px'
            }}></div>

            <p 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'black',
            width: '250px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.17em', marginTop:'8px', lineHeight: '160%'
            }}>
                Not sure what you
                want? Pick best with
                our designers
            </p>
        </div>

        </div>
        {/* End benefits */}
        </div>

        {/* Why us */}
        <div>

        <h3 className="font-merriweather"
        style={{
        textAlign:"center",  fontWeight:"700",
        fontSize:'32px', color: 'white', opacity: '50%',
        letterSpacing: '0.2em', marginTop:'64px'
        }}>
            WHY US?
        </h3>

        <p 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'rgba(256,256,256,8)',
            width: '800px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.17em', marginTop:'24px', lineHeight: '180%',
            marginBottom: '50px'
            }}>
                We have been installing tiles for over 2 decades now and know everything from making perfect 
                color mach of filling between tiles to perfect level alignment on the wall. We have friendly 
                team of best installers in ontario...



                
            </p>
        {/* Why us Ends */}
        </div>

        <div>

            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={7}>
            {/* Also */}
            <div>
                <h4 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"700",
                fontSize:'32px', color: 'white', opacity: '50%',
                letterSpacing: '0.2em', marginTop:'32px'
                }}>
                    ALSO
                </h4>

                {/* Devider */}
                <img src={LineDevider} alt="Devider"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', marginTop: '40px',
                    pointerEvents: 'none', width: '150px'
                    }}
                />

                {/* Also1 */}
                <h2 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather" style={{
                opacity: '95%', fontSize: '22px', fontWeight: '400',
                lineHeight: '28px', letterSpacing: '0.17em', textAlign: 'center',
                marginTop: '56px', color: 'white'
                }}>
                    Top-quality tile
                </h2>

                <p 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'white',
                width: '260px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%',
                opacity: '80%'
                }}>
                    We work only with the
                    best manufacturers who
                    proved their quality
                    after decades, for you, to
                    feel even more luxury
                </p>

                {/* devider */}
                <div style={{
                    height: '0.5px', width: '139px', backgroundColor: 'black',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: '40px'
                }}></div>

                {/* Also2 */}
                <h2 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather" style={{
                opacity: '95%', fontSize: '22px', fontWeight: '400',
                lineHeight: '28px', letterSpacing: '0.17em', textAlign: 'center',
                marginTop: '40px', color: 'white'
                }}>
                    Unique Styles
                </h2>

                <p 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'white',
                width: '260px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%',
                opacity: '80%'
                }}>
                    We love doing unique
                    projects by combining
                    our expirience and your
                    wishes
                </p>
            </div>

            {/* Reviews */}
            <div>
            <h2 className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"900",
            fontSize:'32px', color: 'white', opacity: '50%',
            letterSpacing: '0.2em', marginTop:'32px'
            }}>
            REVIEWS
            </h2>

            <ReviewsTransitionDesktop />


            {/* Reviews */}
            </div>


            </Grid>
            <Grid item xs={5}>
            
            <ImagesCarousel />
            </Grid>
        </Grid>


        </div>

        {/* Horizontal line */}
        <div style={{
            height: '1px', width:'470px', backgroundColor: 'white',
            marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', marginBottom: '16px'
        }}>
        </div>

        {/* Social media */}
        <div style={{textAlign: 'center'}}>

            {/* Benefit1 */}
            <div style={{display: 'inline-block', marginLeft: '30px', marginRight: '30px'}}>
                <img
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                src={Instagram} alt="Instagram"
                    style={{display: 'inline-block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', height: '50px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0', opacity: '0.9'
                    }}
                />
            </div>
            <div style={{display: 'inline-block', marginLeft: '30px', marginRight: '30px'}}>
                <img
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                src={Facebook} alt="Facebook"
                    style={{display: 'inline-block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', height: '50px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0', opacity: '0.9'
                    }}
                />
            </div>
            <div style={{display: 'inline-block', marginLeft: '30px', marginRight: '30px'}}>
                <img
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                src={TikTok} alt="TokTok"
                    style={{display: 'inline-block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', height: '50px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0', opacity: '0.9'
                    }}
                />
            </div>
            </div>


        {/* Partners */}
        <div>
            <h3 className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"700",
            fontSize:'45px', color: 'rgba(255, 255, 255, 0.15)',
            letterSpacing: '0.83em', marginTop:'40px', lineHeight: '76px'
            }}>
                PARTNERS
            </h3>

        <div style={{textAlign: 'center'}}>

            {/* Partner1 */}
            <div style={{display: 'inline-block'}}>
            <img 
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-bottom"
            src={Partners1} alt="Ironstone Build Logo"
                style={{display: 'block', marginLeft: '60px',
                marginRight: '60px', padding: '0px', width: '133px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />
            </div>

            {/* Benefit2 */}
            <div style={{display: 'inline-block'}}>
            <img 
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-bottom"
            src={Partners2} alt="Ironstone Build Logo"
                style={{display: 'block', marginLeft: '60px',
                marginRight: '60px', padding: '0px', width: '133px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />                
            </div>

            {/* Benefit3 */}
            <div style={{display: 'inline-block'}}>
                <img 
                data-aos="zoom-out-left"
                data-aos-anchor-placement="center-bottom"
                src={Partners3} alt="Ironstone Build Logo"
                    style={{display: 'block', marginLeft: '60px',
                    marginRight: '60px', padding: '0px', width: '133px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0'
                    }}
                />
            </div>


            {/* Benefit4 */}
            <div style={{display: 'inline-block'}}>
                <img 
                data-aos="zoom-out-left"
                data-aos-anchor-placement="center-bottom"
                src={Partners4} alt="Ironstone Build Logo"
                    style={{display: 'block', marginLeft: '60px',
                    marginRight: '60px', padding: '0px', width: '133px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0'
                    }}
                />
            </div>

        </div>
        {/* End partners */}
        </div>

        {/* Footer */}
        <p className="font-belleza"
        style={{
        textAlign:"center",  fontWeight:"400",
        fontSize:'10px', color: 'white', paddingLeft: 'auto', paddingRight: 'auto',
        letterSpacing: '0.17em', paddingTop:'40px', lineHeight: '12px',
        background: "#000000", marginLeft: 'auto', marginRight: 'auto', marginBottom: '-80px', paddingBottom: '20px'
        }}>
            ?? 2021 Lirioplan Ltd. Trademarks and brands
            are the property of their respective owners.
            <br></br>
            Made by 
            <a href="https://vilkun.software" target="_blank" rel="noreferrer" style={{
                color: 'white'
            }}> Vellkunio </a>
        </p>

                
                
            </div>
        )}

        
        {isTablet && (
            <div className='desktopMainDiv'>
                <div className='MainDesktopDiv'>
                <FrontImageTransitionDesktop />
                </div>

                {/* BGElipse */}
                <div>
                    <div style={{
                        width: '839px', height: '839px', position:' absolute',
                        left: '0px', background: 'rgba(55, 203, 185, 0.05)',
                        zIndex: '0', WebkitFilter: 'blur(100px)', borderRadius: '30%',
                        top: '1321px'
                    }}>
                    </div>
                    <div style={{
                        width: '800px', height: '1000px', position:' absolute',
                        left: '0px', background: 'rgba(55, 61, 203, 0.12)',
                        zIndex: '0', WebkitFilter: 'blur(120px)', borderRadius: '30%',
                        top: '100vh'
                    }}>
                    </div>
                    <div style={{
                        width: '780px', height: '780px', position:' absolute',
                        left: '-367px', background: 'rgba(201, 212, 106, 0.10)',
                        zIndex: '0', WebkitFilter: 'blur(120px)', borderRadius: '30%',
                        top: '1393px'
                    }}>
                    </div>
                    <div style={{
                        width: '1202px', height: '1202px', position:' absolute',
                        left: '-582px', background: 'rgba(55, 61, 203, 0.08)',
                        zIndex: '0', WebkitFilter: 'blur(150px)', borderRadius: '30%',
                        top: '2321px'
                    }}>
                    </div>
                </div>
            {/* 
                <img src={TopDesktopDevider} alt="devider"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', width: '1044px',
                    position: 'absolute', textAlign: 'center',
                    left: '0', right: '0', marginTop: '800px',
                    pointerEvents: 'none'
                    }}
                /> */}

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={7}>
                    <div style={{
                        marginLeft:'100px'
                    }}>
                        <div
                            style={{ textAlign:"center",  fontWeight:"400",
                            fontStyle:"italic", fontSize: '24px', letterSpacing: "4px",
                            opacity: '80%', paddingTop: '105vh'
                            }} >
                            <h1
                            data-aos="fade-up-right"
                            data-aos-anchor-placement="center-bottom"
                            className="font-merriweather" >
                                LIRIOPLAN
                            </h1>
                            </div>

                            <div style={{ textAlign:"center",  fontWeight:"400",
                            fontStyle:"normal", fontSize: '16px', letterSpacing: "4px",
                            marginTop: "16px", lineHeight: '180%', width: '312px',
                            marginLeft: "auto", marginRight: 'auto'
                            }} >
                            <p
                            data-aos="fade-up-left"
                            data-aos-anchor-placement="center-bottom"
                            className="font-merriweather" >
                            Most professional tile
                            installation in Ontario. We
                            design and install inside
                            and outside tile and
                            decorative rocks. Do you
                            need to intall or upgrade
                            tile? Let professionals
                            take care of it!
                            </p>
                        </div>

                    {/* More and line */}
                    <div>
                        <div className="font-merriweather" style={{
                            textAlign:"center",  fontWeight:"400",
                            fontStyle:'italic', fontSize:'60px',
                            letterSpacing: '4px', marginTop:'110px'
                        }}>
                            MORE
                        </div>

                        {/* line here */}
                        <img src={LineDeviderDesktop} alt="line"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px',
                            pointerEvents: 'none', width: '210px'
                            }}
                        />

                        <div className="font-merriweather" style={{
                            textAlign:"center",  fontWeight:"400",
                            fontStyle:'italic', fontSize:'24px',
                            letterSpacing: '4px', marginTop:'8px'
                        }}>
                            than just tile
                        </div>
                    </div>
                </div>

                    </Grid>
                    <Grid item xs={5}>
                    
                    {/* Circles */}
                    <div styles={{
                        marginTop: '1000px'
                    }}>
                            
                    {/* Circle1 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: 'white', borderStyle: 'solid',
                        borderWidth: '2px', 
                        marginTop: '100vh'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'white'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'white',
                                letterSpacing: '0.17em',
                            }}>12.712</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'white', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>clients</p>

                            <div style={{
                                display: 'block', width: '9px', height: '9px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "white", marginTop: '48px'
                            }}>
                            </div>

                        </div>

                    </div>

                    {/* Circle Sides */}
                    {/* <img src={CircleSides} alt="line"
                        style={{display: 'block', marginLeft: 'auto',
                        // marginRight: '369px', padding: '0px', width: '297px',
                        marginRight: 'auto', padding: '0px', width: '297px',
                        position: 'absolute', textAlign: 'center',
                        left: '0', right: '0', marginTop: '36px', pointerEvents: 'none'
                        }}
                    /> */}




                {/* Circle2 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: '#22123D', borderStyle: 'solid',
                        borderWidth: '2px',
                        marginTop: '32px'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'black'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'black',
                                letterSpacing: '0.17em',
                            }}>12.000</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'black', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>projects</p>

                            <div style={{
                                display: 'block', width: '9px', height: '9px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "black", marginTop: '48px'
                            }}>
                            </div>

                        </div>

                    </div>


                {/* Circle3 */}
                    <div style={{
                        display: 'block', width: '200px', height: '200px',
                        borderRadius: '50%', borderColor: 'white', borderStyle: 'solid',
                        borderWidth: '2px',
                        marginTop: '32px'
                    }}>

                        <div style={{textAlign: 'center'}}>

                            <p className="font-merriweather" style={{
                                marginTop: '35px', fontWeight: '400',
                                fontSize: '32px', opacity: '50%', color: 'white'
                            }}>+</p>
                            <p className="font-merriweather" style={{
                                marginTop: '0px', fontWeight: '400',
                                fontSize: '32px', color:'white',
                                letterSpacing: '0.17em',
                            }}>49</p>
                            <p className="font-merriweather" style={{
                                marginTop: '8px', fontWeight: '900',
                                fontSize: '18px', color:'white', opacity: '50%',
                                letterSpacing: '0.25em',
                            }}>employees</p>

                            <div style={{
                                display: 'block', width: '9px', height: '9px',
                                borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto',
                                backgroundColor: "white", marginTop: '48px'
                            }}>
                            </div>
                        </div>
                    </div>
                    {/* Circles section end */}
                    </div>
                    </Grid>
                </Grid>

                {/* Cards */}
                <div style={{
                    marginTop: '50px', alignItems: 'center', textAlign: 'center'
                }}>
                    {/* Card1 */}
                    <div
                    // data-aos="fade-right"
                    data-aos="fade-up"
                    // data-aos-anchor-placement="bottom-bottom"
                    style={{
                    width: '267px', height: '278px', display: 'inline-block',
                    marginTop: '40px', marginLeft: '20px', marginRight: '20px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', zIndex: '1',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={check} alt="check"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none', zIndex: '3'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px', zIndex: '3'
                        }}>
                            Perfection
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto',marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%', 
                        zIndex: '3',
                        }}>
                            With best quality
                            installation your house
                            will make you happy for
                            over a hundred years
                        </p>

                    </div>

                    {/* Card2 */}
                    <div
                    data-aos="fade-up"
                    style={{
                    width: '267px', height: '278px', display: 'inline-block',
                    marginTop: '40px', marginLeft: '20px', marginRight: '20px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={clock} alt="clock"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px'
                        }}>
                            In time
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto',marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%'
                        }}>
                            Time can be
                            challenging, but we
                            know how important it
                            is to finish in time
                        </p>
                    </div>

                    {/* card3 */}
                    <div
                    data-aos="fade-up"
                    style={{
                    width: '267px', height: '278px', display: 'inline-block',
                    marginTop: '40px', marginLeft: '20px', marginRight: '20px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', WebkitBackdropFilter: 'blur(50px)', backdropFilter: 'blur(50px)'
                    }}>

                        <img src={warranty} alt="warranty"
                            style={{display: 'block', marginLeft: 'auto',
                            marginRight: 'auto', padding: '0px', paddingTop: '40px',
                            width: '45px', pointerEvents: 'none'
                            }}
                        />
                        <h3 className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"900",
                        fontSize:'18px', color: 'white',
                        letterSpacing: '4px', marginTop:'16px'
                        }}>
                            Warranty
                        </h3>
                        <p className="font-merriweather"
                        style={{
                        textAlign:"center",  fontWeight:"400",
                        fontSize:'13px', color: 'white',
                        width: '220px', marginLeft: 'auto', marginRight: 'auto',
                        letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%'
                        }}>
                            Our company is
                            confident at we do,
                            that???s why we give
                            warranty to all of our
                            clients
                        </p>
                    </div>

                    {/* End cards */}
                </div>

        {/* Benefits */}
        <div>
            <h3 className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"700",
            fontSize:'32px', color: 'white', opacity: '50%',
            letterSpacing: '0.2em', marginTop:'64px'
            }}>
                BENEFITS
            </h3>

        <div style={{textAlign: 'center'}}>

            {/* Benefit1 */}
            <div style={{display: 'inline-block'}}>
                <h5 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-belleza" style={{
                    marginTop: '32px', textAlign: 'center', fontWeight: "400",
                    fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                    color: 'white'
                }}>
                    Relax
                </h5>

                <div 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                style={{
                    height: '1px', width: '100px', backgroundColor: 'black',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: '16px'
                }}></div>

                <p 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'black',
                width: '250px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'8px', lineHeight: '160%'
                }}>
                    Put all hard work on us
                    and enjoy doing what
                    you love to do
                </p>
            </div>

            {/* Benefit2 */}
            <div style={{display: 'inline-block'}}>
                <h5
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-belleza" style={{
                    marginTop: '32px', textAlign: 'center', fontWeight: "400",
                    fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                    color: 'white'
                }}>
                    Stand out
                </h5>

                <div 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                style={{
                    height: '1px', width: '100px', backgroundColor: 'black',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: '16px'
                }}></div>

                <p 
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'black',
                width: '250px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'8px', lineHeight: '160%'
                }}>
                    Become owner of the
                    best house in the
                    neighborhood
                </p>

                
            </div>

            {/* Benefit3 */}
            <div style={{display: 'inline-block'}}>
            <h5 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-belleza" style={{
                marginTop: '32px', textAlign: 'center', fontWeight: "400",
                fontSize: '28px', letterSpacing: '0.17em', opacity: '90%',
                color: 'white'
            }}>
                Get help
            </h5>

            <div 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            style={{
                height: '1px', width: '100px', backgroundColor: 'black',
                marginLeft: 'auto', marginRight: 'auto', marginTop: '16px'
            }}></div>

            <p 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"400",
            fontSize:'16px', color: 'black',
            width: '250px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.17em', marginTop:'8px', lineHeight: '160%'
            }}>
                Not sure what you
                want? Pick best with
                our designers
            </p>
        </div>

        </div>
        {/* End benefits */}
        </div>

        {/* Why us */}
        <div>

        <h3 className="font-merriweather"
        style={{
        textAlign:"center",  fontWeight:"700",
        fontSize:'32px', color: 'white', opacity: '50%',
        letterSpacing: '0.2em', marginTop:'64px'
        }}>
            WHY US?
        </h3>

        <p 
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"300",
            fontSize:'16px', color: 'white',
            width: '730px', marginLeft: 'auto', marginRight: 'auto',
            letterSpacing: '0.17em', marginTop:'8px', lineHeight: '180%', marginBottom: ' 30px'
            }}>
                We have been installing tiles for over 2 decades now and know everything from making perfect 
                color mach of filling between tiles to perfect level alignment on the wall. We have friendly 
                team of best installers in ontario...



                
            </p>
        {/* Why us Ends */}
        </div>

        <div>

            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={7}>
            {/* Also */}
            <div>
                <h4 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"700",
                fontSize:'32px', color: 'white', opacity: '50%',
                letterSpacing: '0.2em', marginTop:'32px'
                }}>
                    ALSO
                </h4>

                {/* Devider */}
                <img src={LineDevider} alt="Devider"
                    style={{display: 'block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', marginTop: '40px',
                    pointerEvents: 'none', width: '150px'
                    }}
                />

                {/* Also1 */}
                <h2 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather" style={{
                opacity: '95%', fontSize: '22px', fontWeight: '400',
                lineHeight: '28px', letterSpacing: '0.17em', textAlign: 'center',
                marginTop: '56px', color: 'white'
                }}>
                    Top-quality tile
                </h2>

                <p 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'white',
                width: '260px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%',
                opacity: '80%'
                }}>
                    We work only with the
                    best manufacturers who
                    proved their quality
                    after decades, for you, to
                    feel even more luxury
                </p>

                {/* devider */}
                <div style={{
                    height: '0.5px', width: '139px', backgroundColor: 'black',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: '40px'
                }}></div>

                {/* Also2 */}
                <h2 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather" style={{
                opacity: '95%', fontSize: '22px', fontWeight: '400',
                lineHeight: '28px', letterSpacing: '0.17em', textAlign: 'center',
                marginTop: '40px', color: 'white'
                }}>
                    Unique Styles
                </h2>

                <p 
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                className="font-merriweather"
                style={{
                textAlign:"center",  fontWeight:"400",
                fontSize:'16px', color: 'white',
                width: '260px', marginLeft: 'auto', marginRight: 'auto',
                letterSpacing: '0.17em', marginTop:'24px', lineHeight: '160%',
                opacity: '80%'
                }}>
                    We love doing unique
                    projects by combining
                    our expirience and your
                    wishes
                </p>
            </div>

            {/* Reviews */}
            <div>
            <h2 className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"900",
            fontSize:'32px', color: 'white', opacity: '50%',
            letterSpacing: '0.2em', marginTop:'32px'
            }}>
            REVIEWS
            </h2>

            <ReviewsTransitionTablet style={{zIndex: 0, marginLeft:'50px'}}/>


            {/* Reviews */}
            </div>


            </Grid>
            <Grid item xs={5}>
                <ImagesCarousel />
            </Grid>
        </Grid>


        </div>

        {/* Horizontal line */}
        <div style={{
            height: '1px', width:'470px', backgroundColor: 'white',
            marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', marginBottom: '16px'
        }}>
        </div>

        {/* Social media */}
        <div style={{textAlign: 'center'}}>

            {/* Benefit1 */}
            <div style={{display: 'inline-block', marginLeft: '30px', marginRight: '30px'}}>
                <img
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                src={Instagram} alt="Instagram"
                    style={{display: 'inline-block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', height: '50px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0', opacity: '0.9'
                    }}
                />
            </div>
            <div style={{display: 'inline-block', marginLeft: '30px', marginRight: '30px'}}>
                <img
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                src={Facebook} alt="Facebook"
                    style={{display: 'inline-block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', height: '50px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0', opacity: '0.9'
                    }}
                />
            </div>
            <div style={{display: 'inline-block', marginLeft: '30px', marginRight: '30px'}}>
                <img
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                src={TikTok} alt="TokTok"
                    style={{display: 'inline-block', marginLeft: 'auto',
                    marginRight: 'auto', padding: '0px', height: '50px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0', opacity: '0.9'
                    }}
                />
            </div>
            </div>


        {/* Partners */}
        <div>
            <h3 className="font-merriweather"
            style={{
            textAlign:"center",  fontWeight:"700",
            fontSize:'45px', color: 'rgba(255, 255, 255, 0.15)',
            letterSpacing: '0.83em', marginTop:'40px', lineHeight: '76px'
            }}>
                PARTNERS
            </h3>

        <div style={{textAlign: 'center'}}>

            {/* Partner1 */}
            <div style={{display: 'inline-block'}}>
            <img 
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-bottom"
            src={Partners1} alt="Ironstone Build Logo"
                style={{display: 'block', marginLeft: '30px',
                marginRight: '30px', padding: '0px', width: '100px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />
            </div>

            {/* Benefit2 */}
            <div style={{display: 'inline-block'}}>
            <img 
            data-aos="zoom-out-right"
            data-aos-anchor-placement="center-bottom"
            src={Partners2} alt="Ironstone Build Logo"
                style={{display: 'block', marginLeft: '30px',
                marginRight: '30px', padding: '0px', width: '100px',
                textAlign: 'center', marginTop: '32px',
                left: '0', right: '0'
                }}
            />                
            </div>

            {/* Benefit3 */}
            <div style={{display: 'inline-block'}}>
                <img 
                data-aos="zoom-out-left"
                data-aos-anchor-placement="center-bottom"
                src={Partners3} alt="Ironstone Build Logo"
                    style={{display: 'block', marginLeft: '30px',
                    marginRight: '30px', padding: '0px', width: '100px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0'
                    }}
                />
            </div>


            {/* Benefit4 */}
            <div style={{display: 'inline-block'}}>
                <img 
                data-aos="zoom-out-left"
                data-aos-anchor-placement="center-bottom"
                src={Partners4} alt="Ironstone Build Logo"
                    style={{display: 'block', marginLeft: '30px',
                    marginRight: '30px', padding: '0px', width: '100px',
                    textAlign: 'center', marginTop: '32px',
                    left: '0', right: '0'
                    }}
                />
            </div>

        </div>
        {/* End partners */}
        </div>

        {/* Footer */}
        <p className="font-belleza"
        style={{
        textAlign:"center",  fontWeight:"400",
        fontSize:'10px', color: 'white', paddingLeft: 'auto', paddingRight: 'auto',
        letterSpacing: '0.17em', paddingTop:'40px', lineHeight: '12px',
        background: "#000000", marginLeft: 'auto', marginRight: 'auto', marginBottom: '-80px', paddingBottom: '20px'
        }}>
            ?? 2021 Lirioplan Ltd. Trademarks and brands
            are the property of their respective owners.
            <br></br>
            Made by 
            <a href="https://vilkun.software" target="_blank" rel="noreferrer" style={{
                color: 'white'
            }}> Vellkunio </a>
        </p>

                
                
            </div>
        )}

            
        </div>
        )
    }
}
export default home
