import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from '@react-spring/web'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';

import AOS from 'aos';

import desktopMain1 from '../images/desktopMain1.jpg';
import desktopMain2 from '../images/desktopMain2.jpg';
import desktopMain3 from '../images/desktopMain3.jpg';
import desktopMain4 from '../images/desktopMain4.jpg';
import desktopMain5 from '../images/desktopMain5.jpg';

import bracketTop from '../images/bracketTop.png';
import bracketBtm from '../images/bracketBtm.png';
import bracketTopBlack from '../images/bracketTopBlack.png';
import bracketBtmBlack from '../images/bracketBtmBlack.png';

import Button from '@mui/material/Button';
import HomeIcon from '@material-ui/icons/Home';
import MyButton from '../util/MyButton';


const slides = [
  desktopMain2,
  desktopMain1,
  desktopMain3,
  desktopMain4,
  desktopMain5
]

export default function App() {
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  })
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const t = setInterval(() => set(state => (state + 1) % slides.length), 7000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
            // backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
            // height: '715px'
          }}
        />
      ))}

          <Link to="/finance">
          <MyButton tip="Admin" >
              <HomeIcon fontSize="large" style={{opacity: '20%'}}/>
          </MyButton>
          </Link>

        <div style={{position: 'absolute', alignItems: 'center', left: 0, right: 0}}>
          {index=== 1 || index === 3 || index === 2 || index === 5 || index === 0  ? 
            <img src={bracketTopBlack} alt="bracket"
                style={{display: 'block', marginLeft: 'auto', 
                marginRight: 'auto', paddingTop: '142px', width: '144px'
                }}
                /> : 
                <img src={bracketTop} alt="bracket"
                style={{display: 'block', marginLeft: 'auto', 
                marginRight: 'auto', paddingTop: '142px', width: '144px'
                }}
            />}

        
          <h1 className="font-belleza" data-aos="fade-down" data-aos-duration="1500"
          style={{fontSize: "70px", display: 'block', textAlign: 'center',
            letterSpacing: '6px', color: (index === 1 || index === 3 || index === 2 || index === 5 || index === 0) ? 'black' : 'white',
            fontWeight: '300'
            }}>
              LIRIOPLAN
          </h1>

          <h1 className="font-belleza" data-aos="fade-up" data-aos-duration="1500"
          style={{fontSize: "45px", display: 'block', textAlign: 'center',
            letterSpacing: '6px', color: (index === 1 || index === 3 || index === 2 || index === 5 || index === 0) ? 'black' : 'white',
            fontWeight: '300'
            }}>
              Stone and tile
          </h1>

          
          {index=== 1 || index === 3 || index === 2 || index === 5 || index === 0 ?
            <img src={bracketBtmBlack} alt="bracket" 
            style={{display: 'block', marginLeft: 'auto', 
            marginRight: 'auto', paddingTop: '16px', width: '144px'
          }} 
            /> : 
                <img src={bracketBtm} alt="bracket" 
            style={{display: 'block', marginLeft: 'auto', 
            marginRight: 'auto', paddingTop: '16px', width: '144px'
          }}
            />}




          <div className="font-merriweather" data-aos="fade-up" data-aos-duration="1500"
          style={{fontSize: "16px", display: 'block', textAlign: 'right',
            letterSpacing: '4px', color: (index === 1 || index === 3 || index === 5) ? 'black' : 'white',
            fontWeight: 300, fontStyle: 'italic', paddingTop: '96px', lineHeight: '150%',
            paddingRight: '390px' }}>
              “Make your house<br></br>
              stand out”<br></br>
              -LIRIOPLAN, 2001
          </div>

          <Button variant="contained"
          style={{color: 'white', backgroundColor: 'rgba(78, 90, 87, 0.6)',
              marginRight: '390px', marginLeft: 'auto', marginTop: '32px',
              position: 'right', zIndex: '3', fontSize: '15px',
              paddingLeft: '30px',paddingRight:'30px'
          }}
          sx={{display:'flex', justifyContent: 'flex-end'}}
          onClick={() => {
              window.location.href = 'mailto:vellkunio@gmail.com';
          }}
          >
              Contact us
          </Button>
        </div>
      
    </div>
  )
}