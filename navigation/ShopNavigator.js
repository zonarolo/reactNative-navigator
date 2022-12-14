import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={CategoriesScreen}/>
        <Stack.Screen name='Bread' component={CategoryBreadScreen}/>
        <Stack.Screen name='Details' component={BreadDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator;