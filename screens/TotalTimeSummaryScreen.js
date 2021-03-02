import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalTimeSummaryScreen = props => {
    return (
        <View>
            <Text>TotalTimeSummaryScreen</Text>
        </View>
    );
};

TotalTimeSummaryScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('workoutTitle')
    };
}

const styles = StyleSheet.create({

});

export default TotalTimeSummaryScreen;