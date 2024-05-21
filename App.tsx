/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import NewsList from './src/components/NewsList';
import Header from './src/components/Header';

function App() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <NewsList />
    </View>
  );
}

export default App;
