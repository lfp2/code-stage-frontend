/* eslint-disable no-undef */
import styled from 'styled-components'
import 'fontsource-inter'

export const Container = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #171727;
`

export const PlaylistContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const TitleContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  align-self: center;
  margin-bottom: 10px;
`

export const Title = styled.text`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: white;

  /* identical to box height */
  letter-spacing: -0.05em;
`
export const TitleIcon = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 30px;
  height: 30px;
  radius: 15px;
  margin-right: 8px;
`
export const MoreIcon = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 30px;
  height: 30px;
  radius: 15px;
  margin-left: 8px;
`
