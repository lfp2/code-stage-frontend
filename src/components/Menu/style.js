/* eslint-disable no-undef */
import styled from 'styled-components'
import 'fontsource-inter'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #171727;
  max-width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px;
`

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Item = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-decoration: none;

  /* identical to box height */
  letter-spacing: -0.05em;
  color: ${(props) => (props.selected ? '#E4B3FF' : 'white')};
  margin: 20px;
`
export const Line = styled.div`
  background-color: #b2f9ff;
  width: 74px;
  height: 2px;
`

export const SearchContainer = styled.input`
  background-color: #282838;
  border-radius: 5px;
  margin-left: 36px;
  height: 36px;
  border: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #747481;
  padding-left: 5px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
`

export const InputSpace = styled.div`
  width: 400px;
  margin: 10px;
  display: flex;
  align-items: center;
`

export const StyledLink = styled(Link)`
  textdecoration: 'none';

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const SearchIcon = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => `${props.imageUrl}`});
  width: 60px;
  height: 60px;
  radius: 30px;
  z-index: 1;
  margin-left: -30px;
`
