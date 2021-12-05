import React from 'react';

import {CategoryList, Category, CategoryText} from './styles';

const list = [
  'Camisetas',
  'Calças',
  'Camisetas de Couro',
  'Calças de Couro',
  'Camisetas de Algodão',
  'Calças de Algodão',
];

const Categories = () => (
  <CategoryList
    data={list}
    keyExtractor={item => item}
    renderItem={({item}) => (
      <Category>
        <CategoryText>{item}</CategoryText>
      </Category>
    )}
  />
);

export default Categories;
