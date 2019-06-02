import { animated } from 'react-spring'
import styled from 'styled-components'



const Container = styled(animated.div)`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 5px;
  margin: 10px;
  will-change: transform, opacity;

`

export {Container, Item }