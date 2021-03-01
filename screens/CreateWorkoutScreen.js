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
        <View>
            <Text>Create Workout Screen </Text>
            <Text>Name Workout</Text>
            <TextInput style={styles.textInput}
                onChangeText={nameWorkoutHandler}
                value={nameWorkoutValue}
            >
                {/* //Name the workout */}
            </TextInput>

            <View style={styles.workoutDisplayView}>
                <ScrollView>

                </ScrollView>
            </View>
            <Text>Timer</Text>
            <View>
                <View style={styles.speedIntervalContainer}>
                    <Button title="WALK"/>
                    <Button title="JOG"/>
                    <Button title="RUN"/>
                    <Button title="SPRINT"/>
                </View>

                <View style={styles.time_distanceContainer}>

                </View>

                <View styles={styles.add_deleteButtonsContainer}>
                    <Button title="ADD" color={Colors.primary} onPress={addIntervalHandler}/>
                    <Button title="DELETE"/>
                </View>

                <Button title='START'/>
            </View>

        </View>
    );
};

CreateWorkoutScreen.navigationOptions = {
    headerTitle: 'Create Workout',
};

const styles = StyleSheet.create({

});

export default CreateWorkoutScreen;