/**
 * @format
 */

import {View, Navigator, StatusBar,ActivityIndicator} from 'react-native';
import React, {Component,useState, useEffect} from 'react';
import Home from './screens/Home/Home';
import OnBoard from './screens/OnBoard/OnBoard';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from './consts/colors';
import Cart from './screens/Cart/Cart';
import { AsyncStorage } from 'react-native';


const Stack = createStackNavigator();
const App = () => {

 

  //console.log("test");
  
  
  // let cartData = { 
  //   product : "Apple",
  //   quantity : 1,
  //   price : 4
  // }


/*
  try {
      AsyncStorage.setItem('cartDatas',JSON.stringify(cartData));
      console.log("saved");
    } catch (error) {
      console.log("NOT saved : " + error);
    }
*/


    // try {
    // let value = AsyncStorage.getItem('cartDatas').then((result) =>
    //    parseCart(result)
    // );
    // } catch (error) {
    //   console.log("error retrieve data"); 
    // }


    // async function parseCart(rawData) {
    //   let cartItems = JSON.parse(rawData);
    //   //let productName  = cartItems.product;
    //   //let price  = cartItems.price;

    //   shoppingList.push(cartItems);

    //   //console.log(productName); 

    // }


  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.dark} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
