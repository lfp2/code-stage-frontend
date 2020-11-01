/* eslint-disable no-undef */
import styled from 'styled-components'
import 'fontsource-inter'

export const Container = styled.div`
  width: 280px;
  height: 240px;
  padding: 5px;
  display: flex;
  background-image: linear-gradient(#e6b1ff, #b1faff);
  margin: 10px;
`
export const Image = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const Title = styled.text`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  letter-spacing: -0.05em;
  color: white;
  margin-bottom: 20px;
`
