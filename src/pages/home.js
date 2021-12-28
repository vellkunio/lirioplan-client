import React, { Component } from 'react';
import { Transition, TransitionGroup, CSSTransition } from "react-transition-group";
import '../App.css'

import FrontPic1 from '../images/FrontPicture1.png';
import FrontPic2 from '../images/FrontPicture2.png';
import FrontPic3 from '../images/FrontPicture3.png';
import FrontPic4 from '../images/FrontPicture4.png';
import FrontPic5 from '../images/FrontPicture5.png';
import bracketTop from '../images/bracketTop.png';
import bracketBtm from '../images/bracketBtm.png';
import bracketTopBlack from '../images/bracketTopBlack.png';
import bracketBtmBlack from '../images/bracketBtmBlack.png';
import smallHorizontalLine from '../images/smallHorizontalLine.png';
import check from '../images/check.png';
import clock from '../images/clock.png';
import warranty from '../images/warranty.png';


//mui stuff
import Button from '@mui/material/Button';


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
        setInterval(this.switchImage, 5000);
      }

    
    render() {
        
        const windowWidth=window.screen.availWidth;
        console.log(windowWidth);

        return (
            <div className="mainDiv">

                

                {/* <CSSTransition in={this.state.isChanging} classNames="fade" timeout={300}> */}
                
                    <div style={{ backgroundImage: `url(${this.state.images[this.state.currentImage].imgPath})`, height: "715px",
                    backgroundPosition: "center", backgroundSize: "cover"  }}>

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
                            “Make your house<br></br>
                            stand out”<br></br>
                            -LIRIOPLAN, 2001
                        </div>

                        <Button variant="contained"
                        style={{color: 'white', backgroundColor: 'rgba(78, 90, 87, 0.6)',
                            marginRight: '69px', marginLeft: 'auto', marginTop: '32px', position: 'right'
                        }}
                        sx={{display:'flex', justifyContent: 'flex-end'}}
                        >
                            Contact us
                        </Button>

                    </div>
                {/* </CSSTransition> */}
                <div style={{ textAlign:"center",  fontWeight:"700",
                    fontStyle:"italic", fontSize: '24px', letterSpacing: "4px",
                    marginTop: "66px"
                    }} >
                    <h1 className="font-merriweather" >
                        LIRIOPLAN
                    </h1>
                </div>

                <div style={{ textAlign:"center",  fontWeight:"400",
                    fontStyle:"normal", fontSize: '16px', letterSpacing: "4px",
                    marginTop: "16px", lineHeight: '180%', width: '312px',
                    marginLeft: "auto", marginRight: 'auto'
                    }} >
                    <p className="font-merriweather" >
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
                            marginRight: 'auto', padding: '0px'
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
                    <div style={{marginLeft: 'auto', marginRight: 'auto', 
                    textAlign: 'center', alignContent:'center', display: 'block'}}>
                        <div style={{
                            width: '267px', height: '278px',
                            marginTop: '40px', marginLeft: 'auto', marginRight: 'auto',
                            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            backdropFilter: 'blur(15px)', borderRadius: '10px'
                        }}>

                            <img src={check} alt="check"
                                style={{display: 'block', marginLeft: 'auto', 
                                marginRight: 'auto', padding: '0px', paddingTop: '40px'
                                }}
                            />
                            

                        </div>


                    </div>

                </div>


            </div>
        )
    }
}
//<div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
export default home
