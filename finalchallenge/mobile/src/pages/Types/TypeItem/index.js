import React from 'react';

import {TypeContainer, TypeImage, TypeTitle} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Type = ({
  type: {
    id,
    File: {url},
    title,
  },
  // typesRequest,
}) => (
  <TypeContainer onPress={() => {}}>
    <TypeImage source={{uri: url.replace('localhost', '10.0.2.2')}} />
    <TypeTitle>{title}</TypeTitle>
  </TypeContainer>
);

export default Type;
