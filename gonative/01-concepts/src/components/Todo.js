import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: 'Study GoNative',
};

Todo.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({});

export default Todo;
