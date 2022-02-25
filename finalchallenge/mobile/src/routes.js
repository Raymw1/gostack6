import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Products from 'pages/Products';
import Types from 'pages/Types';
import Sizes from 'pages/Sizes';

const ProductsNavigator = createStackNavigator(
  {
    Products, // Cart
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      initialRouteName: 'Products',
    },
  },
);

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {SignIn, SignUp, Products: ProductsNavigator, Types, Sizes},
      {initialRouteName: isLoggedIn ? 'Products' : 'SignIn'},
    ),
  );
}
