import React from 'react'
import { Image, Title, Text, Logo } from './style'
import Background from '../../assets/images/HeaderBackground.png'
import ImageLogo from '../../assets/images/Logo.png'

export default function MoodCard() {
  return (
    <Image imageUrl={Background} alt="image">
      <Logo imageUrl={ImageLogo} />
      <Title>Sua playlist perfeita</Title>
      <Text>
        A MooDay vai encontrar uma playlist perfeita para este momento
      </Text>
    </Image>
  )
}
