import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from 'pages/Main';
import Test from 'pages/Main';

import Icon from 'react-native-vector-icons/MaterialIcons';

const defaultNavigationOptions = {
  headerStyle: {
    height: Platform.OS === 'ios' ? 74 : 54,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF989B',
  },
  headerTintColor: '#FF989B',
  headerBackTitle: null,
  headerTitleAlign: 'center',
};

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      GoCommerce: createStackNavigator(
        {
          GoCommerce: Main,
        },
        {
          defaultNavigationOptions,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => (
              <Icon name="home" size={20} color={tintColor} />
            ),
          },
        },
      ),
      Cart: createStackNavigator(
        {
          Cart: Test,
        },
        {
          defaultNavigationOptions,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => (
              <Icon name="shopping-cart" size={20} color={tintColor} />
            ),
          },
        },
      ),
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#FF989B',
        inactiveTintColor: '#b1b1b1',
        style: {
          backgroundColor: '#fff',
        },
      },
    },
  ),
);

export default Routes;
