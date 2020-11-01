import React from 'react'
import PropTypes from 'prop-types'
import {
  PlaylistContainer,
  TitleContainer,
  TitleIcon,
  Container,
  Title,
  MoreIcon,
} from './style'
import MoodCard from '../../components/MoodCard'
import More from '../../assets/images/More.png'

export default function Playlists({
  title,
  titleImage,
  playlistsImages,
  playlistsTitle,
}) {
  const playlistItems = playlistsTitle.map((item, index) => {
    return <MoodCard title={item} imageUrl={playlistsImages[index]} />
  })
  return (
    <Container>
      <PlaylistContainer>
        <TitleContainer>
          <TitleIcon imageUrl={titleImage} />
          <Title>{title}</Title>
        </TitleContainer>
        <TitleContainer>
          <Title>Ver todos</Title>
          <MoreIcon imageUrl={More} />
        </TitleContainer>
      </PlaylistContainer>
      <PlaylistContainer>{playlistItems}</PlaylistContainer>
    </Container>
  )
}

Playlists.propTypes = {
  title: PropTypes.string,
  titleImage: PropTypes.string,
  playlistsImages: PropTypes.array.isRequired,
  playlistsTitle: PropTypes.array.isRequired,
}
