import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Modal as RNModal,
} from 'react-native';

import styles from './styles';

const Modal = ({visible, children, onRequestClose}) => (
  <RNModal
    visible={visible}
    animationType="slide"
    transparent
    onRequestClose={onRequestClose}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View style={styles.content}>{children}</View>
    </KeyboardAvoidingView>
  </RNModal>
);

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Modal;
