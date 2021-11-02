import React, {Component} from 'react';
import MapView from 'react-native-maps';

import AddUser from 'components/AddUser';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ModalActions} from 'store/ducks/modal';

class Map extends Component {
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
    return <AddUser latLng={coordinate} />;
  };

  render() {
    return (
      <>
        <AddUser />
        <MapView
          style={{flex: 1}}
          region={this.state.region}
          onLongPress={e => {
            this.addUser(e.nativeEvent.coordinate);
          }}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
