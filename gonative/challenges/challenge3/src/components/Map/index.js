import React, {Component} from 'react';
import {Text} from 'react-native';
import MapView, {Callout} from 'react-native-maps';
import PropTypes from 'prop-types';

import AddUser from 'components/AddUser';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ModalActions} from 'store/ducks/modal';

import {Avatar, PopupContainer, PopupTitle} from './styles';

class Map extends Component {
  static propTypes = {
    user: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          bio: PropTypes.string,
          avatar: PropTypes.string,
        }),
      ).isRequired,
    }).isRequired,
    toggleModalSuccess: PropTypes.func.isRequired,
  };

  state = {
    region: {
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
  };

  addUser = async coordinate => {
    await this.props.toggleModalSuccess(true, coordinate);
    return <AddUser />;
  };

  render() {
    const {region} = this.state;
    const {
      user: {data: users},
    } = this.props;
    return (
      <>
        <AddUser />
        <MapView
          style={{flex: 1}}
          initialRegion={region}
          onLongPress={e => {
            this.addUser(e.nativeEvent.coordinate);
          }}>
          {users.map(user => (
            <MapView.Marker
              key={user.id}
              coordinate={{...user.latLng}}
              name={user.name}
              bio={user.bio}>
              <Avatar source={{uri: user.avatar}} />
              <Callout>
                <PopupContainer>
                  <PopupTitle>{user.name}</PopupTitle>
                  <Text numberOfLines={5}>{user.bio}</Text>
                </PopupContainer>
              </Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
