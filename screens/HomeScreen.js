import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import HeaderButton from '../components/HeaderButton';
import CreateWorkoutScreen from './CreateWorkoutScreen';
// import Month from '../components/calendar/month';




const HomeScreen = props => {

    // //This might be working with local storage but not too sure. 
    // const [ DayNotRun, DayCompletedRun ] = useState('');
    // const dayRunCompletedChange = text => {
    //     // can add validation
    //     DayCompletedRun(text)
    // };

    //javascript for going to the create workout screen 
    const newRunHandler = () => {
        props.navigation.navigate('CreateWorkoutScreen');
    };

    return (
        <View style={styles.page}>
            <Text style={[styles.headerText, styles.headerTextLeft]}>Welcome</Text>
            <Text style={[styles.headerText, styles.headerTextRight]}>back!</Text>

            <View style={styles.buttonContainer}>
                <View style={[styles.button, styles.newRunButton]}>
                    <Button
                        onPress = {newRunHandler}
                        title="New Run"
                        color='#D6FFF3'
                        accessibilityLabel="Create new running workout plan"
                    />
                </View>
                <View  style={[styles.button, styles.competeButton]}>
                    <Button
                        // onPress={onPressLearnMore}
                        title="Compete"
                        color='#D6FFF3'
                        accessibilityLabel="Compete against others online"
                    />
                </View>
            </View>
                <Text>This is where the the calendar goes</Text>
            <ScrollView style={styles.calendarContainer} horizontal={true}>
                <ScrollView horizontal={true}> 
                    <View style={styles.wrap}>
                        <View style={styles.month}/>
                        {/* <Text>1</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>2</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>3</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>7</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>8</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>9</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>10</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>1</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>2</Text> */}
                        <View style={styles.month}/>
                        {/* <Text>3</Text> */}
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
















                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                        <View style={styles.month}/>
                    </View>
                </ScrollView>
            </ScrollView>

            <View style={styles.footer}></View>

            
        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return { 
        headerTitle: 'Home',
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
    headerText:{
        fontSize: 30,
        width:'30%'
    },
    headerTextLeft:{
        textAlign: 'left',
        width:'80%'
    },
    headerTextRight:{
        textAlign: 'right'
    },
    page:{
        display: 'flex',
        // justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.lightest,
        flex:1,
    },
    buttonContainer:{
        flexDirection: 'row',
        margin:5,
    },
    button:{
        backgroundColor: Colors.darkest,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderRadius:5,
    },
    newRunButton:{
        backgroundColor: Colors.primary,
    },
    competeButton:{
        backgroundColor: Colors.primary,
    },
    calendarContainer:{
        backgroundColor: 'red',
        flexDirection: 'row',
        // height: 30,
        width: '83%',
        maxHeight:'66%',
        borderRadius:10,
        borderColor:'black',
        borderWidth:2,
        padding:4,
    },
    wrap:{
        // justifyContent:'center',
        flexWrap:'wrap',
        // alignContent:'center',
        // alignItems:'center',
    },
    month:{
        backgroundColor: Colors.primary,
        // width:12,
        // height:12,
        margin:2,
        padding:20,
        borderRadius:5,
        borderColor:'black',
        borderWidth: 2,
    },
    footer:{
        height:50,
    }
});

export default HomeScreen;