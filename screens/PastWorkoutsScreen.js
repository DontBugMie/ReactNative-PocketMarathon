import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import HeaderButton from '../components/HeaderButton';

const PastWorkoutsScreen = props => {
    return (
        <View>
            <Text>Past Workouts Screen</Text>
        </View>
    );
};

PastWorkoutsScreen.navigationOptions = navData => {
    return { 
        headerTitle: 'Past Workouts',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title='Add Place' 
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            //below determines what page the app goes to when the button is clicked
            // onPress = {() =>{
            //     navData.navigation.navigate('')
            // }}
            />
        </HeaderButtons>

    };
};

const styles = StyleSheet.create({

});

export default PastWorkoutsScreen;