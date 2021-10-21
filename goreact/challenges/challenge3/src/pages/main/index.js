import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "../../store/ducks/users";

import { ModalOverlay, Modal, Button } from "./styles";

import UsersBar from "../../components/UsersBar";

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    modalVisibility: false,
    latitude: null,
    longitude: null,
    userInput: "",
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    this.setState({ latitude, longitude, modalVisibility: true });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { userInput, latitude, longitude } = this.state;
    if (userInput.trim() === "" || !latitude || !longitude) return;
    this.props.addUserRequest({ userInput, latitude, longitude });
    this.setState({
      latitude: null,
      longitude: null,
      modalVisibility: false,
      userInput: "",
    });
  };

  render() {
    return (
      <Fragment>
        <UsersBar />
        <ModalOverlay visible={this.state.modalVisibility}>
          <Modal>
            <h3>Add new user</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.userInput}
                onChange={(e) => this.setState({ userInput: e.target.value })}
                placeholder="User on GitHub"
              />
              <div className="buttons">
                <Button
                  background="#bbb"
                  type="reset"
                  onClick={() => this.setState({ modalVisibility: false })}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Modal>
        </ModalOverlay>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_TOKEN_MAPGL}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          {this.props.users.data.map((user) => (
            <Marker latitude={user.latitude} longitude={user.longitude}>
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={user.avatar_url}
                alt={user.name}
              />
            </Marker>
          ))}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
