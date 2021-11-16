import React from "react";

import { Container, Nav, NewPlaylist } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Your Library</span>
        </li>
        <li>
          <a href="">Your Daily Mix</a>
        </li>
        <li>
          <a href="">Recently Played</a>
        </li>
        <li>
          <a href="">Songs</a>
        </li>
        <li>
          <a href="">Albums</a>
        </li>
        <li>
          <a href="">Artists</a>
        </li>
        <li>
          <a href="">Stations</a>
        </li>
        <li>
          <a href="">Local Files</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="">Your Top 50</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add playlist" />
      New Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
