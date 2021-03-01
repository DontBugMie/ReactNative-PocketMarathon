import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import HeaderButton from '../components/HeaderButton';


const HomeScreen = props => {

    // //This might be working with local storage but not too sure. 
    // const [ DayNotRun, DayCompletedRun ] = useState('');
    // const dayRunCompletedChange = text => {
    //     // can add validation
    //     DayCompletedRun(text)
    // };

    return (
        <View style={styles.page}>
            <Text>Home Screen</Text>

            <View style={styles.buttonContainer}>
                <Button
                    // onPress={onPressLearnMore}
                    title="New Run"
                    color="#841584"
                    accessibilityLabel="Create new running workout plan"
                />
                <Button
                    // onPress={onPressLearnMore}
                    title="Compete"
                    color="#841584"
                    accessibilityLabel="Compete against others online"
                />
            </View>
            <ScrollView style={styles.calendarContainer} horizontal={true}>
                <Text>This is where the the calendar goes</Text>
            </ScrollView>

            
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
                navData.navigation.navigate('CreateWorkoutScreen')
            }}
            />
        </HeaderButtons>

    };
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

export default HomeScreen;