import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, Button, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import HeaderButton from '../components/HeaderButton';


const HomeScreen = props => {

    //This might be working with local storage but not too sure. 
    const [ date, saveRunNameCompletedRun ] = useState('');
    const dayRunCompletedChange = text => {
        // can add validation
        DayCompletedRun(text)
    };

    const saveRunBtnHandler = () => {

    };

    return (
        <View style={styles.page}>
            <Text>Finished Run Screen</Text>
            <Text>CONGRATULATIONS!</Text>

            <View style={styles.FinishedRunSummaryContainer}>
                <Text>Time:</Text>
                <Text>Distance:</Text>
                <Text>Average Pace:</Text>
            </View>
            <Text>SAVE RUN</Text>
            <TextInput style={textInput} onChangeText={saveRunNameChangeHandler} value={saveRunNameCompletedRun}/>
            <Button title="SAVE RUN" color={Colors.darkest} onPress={()=>{saveRunBtnHandler}}/>
               

            <Text>SET REMINDER</Text>
            <ScrollView style={styles.calendarContainer} horizontal={true}>
                <Button><Text>M</Text></Button>
                <Button><Text>T</Text></Button>
                <Button><Text>W</Text></Button>
                <Button><Text>T</Text></Button>
                <Button><Text>F</Text></Button>
                <Button><Text>S</Text></Button>
                <Button><Text>S</Text></Button>
            </ScrollView>



        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return { 
        // headerTitle: 'Home Page',
        // headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item 
        //     title='Add Place' 
        //     iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        //     //below determines what page the app goes to when the button is clicked
        //     onPress = {() =>{
        //         navData.navigation.navigate('CreateWorkoutScreen')
        //     }}
        //     />
        // </HeaderButtons>

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
    
});

export default HomeScreen;