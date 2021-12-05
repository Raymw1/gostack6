import React from 'react';

const products = [
  {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image: 'https://github.com/Raymw1.png',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
  },
  {
    id: 3,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
  },
  {
    id: 4,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
];

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductSign,
  ProductPrice,
} from './styles';

const Products = () => {
  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({item}) => (
          <Product>
            <ProductImage source={{uri: 'https://github.com/Raymw1.png'}} />
            <ProductInfo>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductSign>Adidas</ProductSign>
              <ProductPrice>R$50,00</ProductPrice>
            </ProductInfo>
          </Product>
        )}
      />
    </Container>
  );
};

export default Products;
