import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import HeaderButton from '../components/HeaderButton';

const HomeScreen = props => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return { 
        headerTitle: 'Home Page',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title='Add Place' 
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            //below determines what page the app goes to when the button is clicked
            onPress = {() =>{
                navData.navigation.navigate('SetTimeScreen')
            }}
            />
        </HeaderButtons>

    };
};

const styles = StyleSheet.create({

});

export default HomeScreen;