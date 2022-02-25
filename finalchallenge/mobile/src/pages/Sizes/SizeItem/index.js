import React from 'react';

import {
  SizeContainer,
  SizeImage,
  SizeDescription,
  SizeTitle,
  SizePrice,
} from './styles';

const Size = ({
  size: {
    id,
    File: {url},
    title,
    value,
  },
  addToCartRequest,
}) => (
  <SizeContainer onPress={() => addToCartRequest(id)}>
    <SizeImage
      size={title}
      source={{uri: url.replace('localhost', '10.0.2.2')}}
    />
    <SizeDescription>
      <SizeTitle>{title}</SizeTitle>
      <SizePrice>R$ {`${value},00`}</SizePrice>
    </SizeDescription>
  </SizeContainer>
);

export default Size;
