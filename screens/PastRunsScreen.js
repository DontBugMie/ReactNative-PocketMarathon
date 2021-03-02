import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, Button, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import HeaderButton from '../components/HeaderButton';

const PastRunsScreen = props => {

    // //This might be working with local storage but not too sure. 
    // const [ DayNotRun, DayCompletedRun ] = useState('');
    // const dayRunCompletedChange = text => {
    //     // can add validation
    //     DayCompletedRun(text)
    // };

    return (
        <View style={styles.page}>
            <Text>Past Runs</Text>
            <ScrollView style={styles.calendarContainer} horizontal={false}>
                <Text>This is where the the veritcal calendar goes. 
                    Make the vertical calendar days clickable.
                    When a day is clicked on it shows up th details of the run completed that day 
                </Text>
                <FlatList/>
            </ScrollView>
        </View>
    );
};

PastRunsScreen.navigationOptions = navData => {
    return { 
        headerTitle: 'Past Runs',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title='what does this title do and where is it located' 
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            //below determines what page the app goes to when the button is clicked
            // onPress = {() =>{
            //     navData.navigation.navigate('CreateWorkoutScreen')
            // }}
            />
        </HeaderButtons>

    };

const styles = StyleSheet.create({
    page:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'pink',
        flex:1,
        padding: 20,
    },
    buttonContainer:{
        flexDirection: 'row'
    },
});

export default PastRunsScreen;