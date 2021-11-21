import React, { Component } from "react";
import PropTypes from "prop-types";
import withRouter from "../withRouter";

import { connect } from "react-redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import { Creators as PlayerActions } from "../../store/ducks/player";
import { bindActionCreators } from "redux";

import { Container, Header, SongList, SongItem } from "./styles";
import Loading from "../../components/Loading";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  renderDeatils = () => {
    const playlist = this.props.playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>Playlist</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} songs</p>}
            <button>Play</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt="Duration" />
            </th>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan="5">
                  This playlist is empty. Add some songs to start building
                  something awesome!
                </td>
              </tr>
            ) : (
              playlist.songs.map((song) => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() =>
                    this.props.loadSong(song, playlist.songs)
                  }
                  selected={this.state.selectedSong === song.id}
                  playing={this.props.currentSong?.id === song.id}
                >
                  <td>
                    <div>
                      <img src={PlusIcon} alt="Add" />
                    </div>
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>{song.duration}</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDeatils()
    );
  }
}

Playlist.propTypes = {
  getPlaylistDetailsRequest: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
  playlistDetails: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
        })
      ),
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  loadSong: PropTypes.func.isRequired,
  currentSong: PropTypes.shape({
    id: PropTypes.number,
  }),
};

const PlaylistComponent = withRouter(Playlist);

const mapStateToProps = (state) => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistComponent);
