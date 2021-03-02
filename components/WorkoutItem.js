import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colours';

const WorkoutItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.workoutItem}>
            <Image style={styles.image} source = {{ uri: props.image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.address}> {props.address}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    workoutItem:{
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'yellow',
        padding: 5,
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 70,
        backgroundColor: 'purple',
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: 'blue'
    },
    address:{
        color: 'red'
    }
});

export default workoutItem;