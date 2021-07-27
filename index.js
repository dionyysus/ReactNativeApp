/**
 * @format
 */

// import {Text, AppRegistry} from 'react-native';
// import React from 'react';
// import Header from './src/components/Header';
import{AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);

