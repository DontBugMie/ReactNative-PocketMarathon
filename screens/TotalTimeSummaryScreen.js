import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import IntervalItem from '../components/IntervalItem';

const TotalTimeSummaryScreen = props => {
    const workouts = useSelector( state => state.workoutsReducer.workouts);

    return (
        <View>
            <Text>Total Time Summary</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            {/* // data={workouts} shows the type of data that is being past to the flatlist. KeyExtractor is the unique identified we created in the class model constructor. RenderItem allows the items to be rendered   */}
            <FlatList data={workouts} keyExtractor={item => item.id} renderItem={itemData => <IntervalItem image={null} title={itemData.item.title} address={null} onSelect={()=>{
                props.navigation.navigate('TotalTimeSummaryScreen', {workoutTitle : itemData.item.title, workoutId: itemData.item.id })}}/>}/>
        </View>
    );
};

TotalTimeSummaryScreen.navigationOptions = navData => {
    return { 
        headerTitle: 'Work out Summary',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title='Add Place' 
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            //below determines what page the app goes to when the button is clicked
            // onPress = {() =>{
            //     navData.navigation.navigate('')
            // }}
            />
        </HeaderButtons>

    };
};

const styles = StyleSheet.create({

});

export default TotalTimeSummaryScreen;