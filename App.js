import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
//import HomeNavigator from './src/navigators/HomeNavigator';
//import RootNavigator from './src/navigators/RootNavigator';
import ContentNavigator from './src/navigators/ContentNavigator';
import TestTextInput from './components/TestTextInput';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import itemReducer from './store/reducers/item';

const rootReducer = combineReducers({
  xyz: itemReducer
})

const store = createStore(rootReducer)
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <ContentNavigator />
    </NavigationContainer>
    </Provider>
  );
}
