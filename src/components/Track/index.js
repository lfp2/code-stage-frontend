import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Title } from './style'

export default function Track({ imageUrl, title }) {
  return (
    <Container>
      <Image imageUrl={imageUrl} alt="image"></Image>
      <Title>{title}</Title>
    </Container>
  )
}

MoodCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
