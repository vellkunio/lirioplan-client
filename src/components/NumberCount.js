import { useSpring, animated, config } from 'react-spring';
import React, { useState } from 'react'

export default function NumberCount(props) {
    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: false,
      reverse: false,
      from: { number: 0 },
      number: props.number,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
  }
