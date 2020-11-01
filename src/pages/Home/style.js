/* eslint-disable no-undef */
import styled from 'styled-components'
import 'fontsource-inter'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Header = styled.div`
  width: 50%;
  min-height: 690px;
`
export const TitleHeader = styled(Header)`
  padding: 64px;
`

export const Image = styled(Header)`
  background-image: url(${(props) => `${props.imageUrl}`});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-origin: content-box;
`

export const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 105.4%;
  letter-spacing: -0.05em;
  color: #171727;
  margin-bottom: 36px;
`

export const Subtitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #171727;
  margin-bottom: 24px;
  width: 60%;
`

export const StyledButton = styled.div`
  outline: 2.5px solid black;
  outline-offset: -5px;
  width: 80%;
  height: 64px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#e6b1ff, #b1faff);
  margin: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.05em;
`
export const SecondButton = styled.div`
  outline: 2.5px solid black;
  outline-offset: -5px;
  width: 80%;
  height: 64px;
  padding: 5px;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
`

export const Logo = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 118px;
  height: 118px;
  radius: 59px;
  margin-bottom: 32px;
  z-index: 1;
`
export const StyledLink = styled.a`
  textdecoration: 'none';

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
