import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../assets/images/SearchIcon.png'
import {
  Container,
  Item,
  Line,
  StyledLink,
  SearchContainer,
  InputSpace,
  ItemsContainer,
  SearchIcon,
} from './style'

export default function Menu({ actualPage }) {
  const pages = ['Moods', 'Atividades', 'Festa']
  const menuItems = pages.map((item) => {
    const selected = actualPage === item
    return (
      <StyledLink to={`/${item.toLowerCase()}`}>
        <Item selected={selected}>
          {item}
          {selected && <Line />}
        </Item>
      </StyledLink>
    )
  })
  return (
    <Container>
      <InputSpace>
        <SearchContainer placeholder="Digite um sentimento ou atividade" />
        <SearchIcon imageUrl={Icon} />
      </InputSpace>
      <ItemsContainer>{menuItems}</ItemsContainer>
      <InputSpace />
    </Container>
  )
}

Menu.propTypes = {
  actualPage: PropTypes.string.isRequired,
}
