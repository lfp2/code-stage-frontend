import React from 'react'
import {
  Container,
  Image,
  Title,
  Subtitle,
  StyledButton,
  Logo,
  TitleHeader,
  SecondButton,
  StyledLink,
} from './style'
import HeaderImage from '../../assets/images/Header.png'
import ImageLogo from '../../assets/images/Logo.png'
import { AUTHENTICATION_LINK } from '../../services/spotify'

export default function Home() {
  return (
    <Container>
      <TitleHeader>
        <Logo imageUrl={ImageLogo} />
        <Title>Música para todos os momentos da sua vida.</Title>
        <Subtitle>
          A MooDay é a sua nova assistente musical. Conecte a conta do seu
          serviço de streaming de música e pronto! A MooDay vai criar playlists
          para cada momento da sua vida, baseado no seu gosto musical.
        </Subtitle>
        <StyledLink href={AUTHENTICATION_LINK}>
          <StyledButton>Cadastre-se</StyledButton>
        </StyledLink>
        <SecondButton>Login</SecondButton>
      </TitleHeader>
      <Image imageUrl={HeaderImage}></Image>
    </Container>
  )
}
