import React, { useState, useRef } from "react";
import { useTransition, useSpring, useChain, config } from 'react-spring';
import classes from "./Carousal.css";
import {Container, Item } from './styles'




const Carousal = (props) => {

  
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? props.items : [], item => item.title, {
    ref: transRef,
    unique: true,
    trail: 400 / props.items.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])
 
    return (
      <div className={classes.Carousal}>
      <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
          {transitions.map(({ item, key, props}) => {
           return <Item key={key} style={{...props, background: `url(${item.background})`, backgroundSize:'cover', height: '300px', width: '300px'}}><h2>{item.title}</h2></Item>
          })}
      </Container>
      </div>
    );
  }


export default Carousal;
