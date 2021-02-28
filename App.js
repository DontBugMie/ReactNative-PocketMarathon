import 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PocketMarathonNavigator from './navigation/PocketMarathonNavigator';

export default function App() {
  return (
    
      <PocketMarathonNavigator/>
    
  );
}

const styles = StyleSheet.create({
 
});
