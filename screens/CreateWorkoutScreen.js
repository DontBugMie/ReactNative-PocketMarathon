import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, FlatList, StyleSheet, Platform, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import HeaderButton from '../components/HeaderButton';
import * as workoutActions from '../store/workout-actions';

import IntervalItem from '../components/IntervalItem';








const CreateWorkoutScreen = props => {

    const [nameWorkoutValue, setNameWorkoutValue] = useState('');

    const dispatch = useDispatch();

    const nameWorkoutHandler = text => {
        //you can add validation here
        setNameWorkoutValue(text);
    };

    const addIntervalHandler = () => {
        dispatch(workoutActions.addWorkout(nameWorkoutValue));

    };

    const startWorkoutHandler = () =>{
        props.navigation.navigate('TotalTimeSummaryScreen');
    };

    const workouts = useSelector( state => state.workoutsReducer.workouts);

    


    return (
        <View style={styles.pageContainer}>
        <View style={styles.page}>
            <TextInput style={styles.textInput}
                onChangeText={nameWorkoutHandler}
                value={nameWorkoutValue}
                placeholder="Name Workout"
            >
                {/* //Name the workout */}
            </TextInput>

            <View style={styles.workoutDisplayView}>
                <ScrollView style={styles.workoutScreen}>
                    {/* <Text>This is where the screen to see the work out intervals go</Text> */}
                   
                   
                   
                    <View style={styles.infoContainer}>

                        <Text style={styles.title}>{props.title}</Text>
                    </View>

                    
                    <FlatList horizontal = {true} style={styles.flatlistContainer} data={workouts} keyExtractor={item => item.id} renderItem={itemData => <IntervalItem image={null} title={itemData.item.title} address={null} 
                    onSelect={()=>{
                props.navigation.navigate('', {workoutTitle : itemData.item.title, workoutId: itemData.item.id })}}/>}
                />
                 {/* <Text style={styles.title}>{props.title}</Text> */}
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
                    <View style={styles.timer}><TextInput placeholder="This is where the timer goes"></TextInput></View>
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
                    <Button title='START' onPress={startWorkoutHandler}/>
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
    // workoutDisplayView:{
    //     flexDirection:'column'
    // },
    flatlistContainer:{
        flexDirection:'column',
        // backgroundColor:'blue',
        // borderColor:'black',
        // borderWidth:2,
        flexWrap:'wrap',
        
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