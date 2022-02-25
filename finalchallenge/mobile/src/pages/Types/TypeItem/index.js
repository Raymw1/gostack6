import React from 'react';

import {TypeContainer, TypeImage, TypeTitle} from './styles';

const Type = ({
  type: {
    id,
    File: {url},
    title,
  },
  sizesRequest,
}) => (
  <TypeContainer onPress={() => sizesRequest(id)}>
    <TypeImage source={{uri: url.replace('localhost', '10.0.2.2')}} />
    <TypeTitle>{title}</TypeTitle>
  </TypeContainer>
);

export default Type;
