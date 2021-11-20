import React from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import Sound from "react-sound";

import { connect } from "react-redux";
// import {bindActionCreators} from 'redux';
// import {Creators as PlayerActions} from '../../store/ducks/player';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
// import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}
    <Current>
      <img
        src="https://carrefourbr.vtexassets.com/arquivos/ids/7146517/MP28868605_Kit-de-Camisetas-Camisas-Iron-Maiden-Com-2-Pecas-G_3_Zoom.jpg?v=637348691650500000"
        alt="Ironn"
      />
      <div>
        <span>The Trooper</span>
        <small>Iron Maiden</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ backgroundColor: "#404040", borderRadius: 10 }}
            trackStyle={{ backgroundColor: "#1ED760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ backgroundColor: "#404040", borderRadius: 10 }}
        trackStyle={{ backgroundColor: "#fff" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
