import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import styles from 'styles';

import Main from 'pages/Main';
import Test from 'pages/Main';

import Icon from 'react-native-vector-icons/MaterialIcons';

const defaultNavigationOptions = {
  headerStyle: {
    height: Platform.OS === 'ios' ? 74 : 54,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: styles.colors.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: styles.colors.secondary,
  },
  headerTintColor: styles.colors.secondary,
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
        activeTintColor: styles.colors.secondary,
        inactiveTintColor: styles.colors.regular,
        style: {
          backgroundColor: styles.colors.white,
        },
      },
    },
  ),
);

export default Routes;
