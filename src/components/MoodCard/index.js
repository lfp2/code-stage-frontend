import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Title } from './style'

export default function MoodCard({ imageUrl, title }) {
  return (
    <Container>
      <Image imageUrl={imageUrl} alt="image">
        <Title>{title}</Title>
      </Image>
    </Container>
  )
}

MoodCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
