import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';

import AOS from 'aos';

import FrontPic1 from '../images/FrontPicture1.png';
import FrontPic2 from '../images/FrontPicture2.png';
import FrontPic3 from '../images/FrontPicture3.png';
import FrontPic4 from '../images/FrontPicture4.png';
import FrontPic5 from '../images/FrontPicture5.png';

import bracketTop from '../images/bracketTop.png';
import bracketBtm from '../images/bracketBtm.png';
import bracketTopBlack from '../images/bracketTopBlack.png';
import bracketBtmBlack from '../images/bracketBtmBlack.png';

import Button from '@mui/material/Button';
import HomeIcon from '@material-ui/icons/Home';
import MyButton from '../util/MyButton';


const slides = [
  FrontPic1,
  FrontPic2,
  FrontPic3,
  FrontPic4,
  FrontPic5
]


// const slides = [
//   'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i',
//   'photo-1544572571-ab94fd872ce4',
//   'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
//   'photo-1540206395-68808572332f',
// ]

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
            height: '715px'
          }}
        />
      ))}

          <Link to="/finance">
          <MyButton tip="Admin" >
              <HomeIcon fontSize="large" style={{opacity: '20%', position: 'absolute', right: '0px', 
                                          left: '10px', top: '5px'}}/>
          </MyButton>
          </Link>

        <div style={{position: 'absolute', alignItems: 'center', left: 0, right: 0}}>
          {index=== 1 || index === 3 ? 
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
          style={{fontSize: "44px", display: 'block', textAlign: 'center',
            letterSpacing: '6px', color: (index === 1 || index === 3) ? 'black' : 'white',
            fontWeight: '300'
            }}>
              LIRIOPLAN
          </h1>

          <h1 className="font-belleza" data-aos="fade-up" data-aos-duration="1500"
          style={{fontSize: "30px", display: 'block', textAlign: 'center',
            letterSpacing: '6px', color: (index === 1 || index === 3) ? 'black' : 'white',
            fontWeight: '300'
            }}>
              Stone and tile
          </h1>

          
          {index=== 1 || index === 3 ?
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
            letterSpacing: '4px', color: (index === 1 || index === 3) ? 'black' : 'white',
            fontWeight: 300, fontStyle: 'italic', paddingTop: '96px', lineHeight: '150%',
            paddingRight: '60px' }}>
              “Make your house<br></br>
              stand out”<br></br>
              -LIRIOPLAN, 2001
          </div>

          <Button variant="contained"
          style={{color: 'white', backgroundColor: 'rgba(78, 90, 87, 0.6)',
              marginRight: '60px', marginLeft: 'auto', marginTop: '32px',
              position: 'right', zIndex: '3', fontSize: '15px',
              paddingLeft: '20px',paddingRight:'20px'
          }}
          sx={{display:'flex', justifyContent: 'flex-end'}}
          onClick={() => {
              window.location.href = 'tel:+12262241256';
          }}
          >
              Contact us
          </Button>
        </div>
      
    </div>
  )
}



// import React, { useState, useEffect } from 'react'
// import { useTransition, animated, config } from 'react-spring'
// import style from './stylesTransition.css'

// const slides = [
//   { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
//   { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
//   { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
//   { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
// ]

// function FrontImageTransition() {

//   const [slides, setSlides] = useState([
//     { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
//     { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
//     { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
//     { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
//   ]);

//   const [index, set] = useState(0)

//   const transitions = useTransition(slides[index], {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     // config: { duration: 3000 },
//   });

//   useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])

//   const fragment = transitions((style, item, props, key) => {
//     return <animated.div
//     key={key}
//     className="bg"
//     style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
//   />;
//   });


//   return (
//     <>
//     <div>{fragment}</div>
//     </>
//   )

// }

// export default FrontImageTransition


// export default function FrontImageTransition() {
//   const [index, set] = useState(0)
//   const transitions = useTransition(index, {
//     key: index,
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: { duration: 1500 },
//   })
//   useEffect(() => {
//     const t = setInterval(() => set(state => (state + 1) % slides.length), 7000)
//     return () => clearTimeout(t)
//   }, [])
//   return (
//     <div className="flex fill center">
//       {transitions((style, i) => (
//         <animated.div
//           className={styles.bg}
//           style={{
//             ...style,
//             backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
//           }}
//         />
//       ))}
//     </div>
//   )
// }