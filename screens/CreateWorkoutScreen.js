import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Platform, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import * as workoutActions from '../store/workout-actions';


const CreateWorkoutScreen = props => {

    const [nameWorkoutValue, setNameWorkoutValue] = useState('Name Workout');

    const dispatch = useDispatch();

    const nameWorkoutHandler = text => {
        //you can add validation here
        setNameWorkoutValue(text);
    };

    const addIntervalHandler = () => {
        dispatch(workoutActions.addWorkout(nameWorkoutValue));
        props.navigation.goBack();
    };


    return (
        <View style={styles.pageContainer}>
        <View style={styles.page}>
            <TextInput style={styles.textInput}
                onChangeText={nameWorkoutHandler}
                value={nameWorkoutValue}
            >
                {/* //Name the workout */}
            </TextInput>

            <View style={styles.workoutDisplayView}>
                <ScrollView style={styles.workoutScreen}>
                    <Text>This is where the screen to see the work out intervals go</Text>
                </ScrollView>
            </View>
            <Text>Timer</Text>
            <View>
                <View style={styles.speedIntervalContainer}>
                    <View style={styles.walkBtn}>
                        <Button title="WALK"/>
                    </View>
                    <View style={styles.jogBtn}>
                        <Button title="JOG"/>
                    </View>
                    <View style={styles.runBtn}>
                        <Button title="RUN"/>
                    </View>
                    <View style={styles.sprintBtn}>
                        <Button title="SPRINT"/>
                    </View>
                </View>

                <View style={styles.time_distanceContainer}>
                    <View style={styles.timer}><TextInput>This is where the timer goes</TextInput></View>
                    <View style={styles.distanceBtn}><Text>km</Text></View>
                    <View style={styles.timeBtn}><Text>hrs</Text></View>
                </View>

                <View style={styles.add_deleteButtonsContainer}>
                    <View style={styles.addBtn}>
                        <Button title="ADD" onPress={addIntervalHandler}/>
                    </View>
                    <View style={styles.deleteBtn}>
                        <Button title="DELETE" style={styles.deleteBtn}/>
                    </View>
                </View>

                <View style={styles.startBtn}>
                    <Button title='START'/>
                </View>
            </View>
        </View>
    </View>
    );
};

CreateWorkoutScreen.navigationOptions = {
    headerTitle: 'Create Workout',
};

const styles = StyleSheet.create({
    page:{
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        padding:10,
        
    },
    workoutScreen:{
        width:'100%',
        height:'40%',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    speedIntervalContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    add_deleteButtonsContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    addBtn:{
        padding:5,
        margin:5,
        backgroundColor:'green',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    deleteBtn:{
        padding:5,
        margin:5,
        backgroundColor:'blue',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    walkBtn:{
        padding:5,
        margin:5,
        backgroundColor:'#228B22',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    jogBtn:{
        padding:5,
        margin:5,
        backgroundColor:'yellow',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    runBtn:{
        margin:5,
        padding:5,
        backgroundColor:'orange',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    sprintBtn:{
        padding:5,
        margin:5,
        backgroundColor:'red',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    startBtn:{
        padding:5,
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    time_distanceContainer:{
        flexDirection:'row',
        width:'100%',
    },
    distanceBtn:{
        padding:5,
        backgroundColor:'grey',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    timeBtn:{
        padding:5,
        backgroundColor:'grey',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
    },
    timer:{
        // paddingHorizontal:50,
        minWidth:280,
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
        textAlign:'left',
        textAlignVertical: 'center',
    }
});

export default CreateWorkoutScreen;