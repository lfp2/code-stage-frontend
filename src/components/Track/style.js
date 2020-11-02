/* eslint-disable no-undef */
import styled from 'styled-components'
import 'fontsource-inter'

export const Container = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  display: flex;
  background-color: #171727;
  margin: 10px;
`
export const Image = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 32px;
  height: 32px;
  display: flex;
`
export const Title = styled.text`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  /* identical to box height */

  /* Cinza */
  color: #9c9c9c;
`
