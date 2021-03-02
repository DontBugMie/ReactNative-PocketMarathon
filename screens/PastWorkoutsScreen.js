import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PastWorkoutsScreen = props => {
    return (
        <View>
            <Text>Past Work outs</Text>
        </View>
    );
};

PastWorkoutsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('workoutTitle')
    };
}

const styles = StyleSheet.create({

});

export default PastWorkoutsScreen;