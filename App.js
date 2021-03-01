import 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  ReduxThunk  from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PocketMarathonNavigator from './navigation/PocketMarathonNavigator';
import runReducer from './store/workout-reducer';

const rootReducer = combineReducers({
  runReducer: runReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));



export default function App() {
  return (
    <Provider store={store}>
      <PocketMarathonNavigator/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
 
});
