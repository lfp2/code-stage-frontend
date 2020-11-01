/* eslint-disable no-undef */
import styled from 'styled-components'
import 'fontsource-inter'

export const Image = styled.div`
  background-position: center;
  background-size: cover;
  background-color: #171727;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
`
export const Logo = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 93px;
  height: 93px;
  radius: 45px;
  z-index: 1;
  position: absolute;
  top: 21px;
  left: 75px;
`

export const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77.45px;
  text-align: center;
  color: white;
  margin: 20px;
`
export const Text = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #9c9c9c;
  margin: 20px;
`
