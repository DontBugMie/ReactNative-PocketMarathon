// platform API is used to determine if the device is android or not

import { Platform } from 'react-native';

//importing the navigation API's

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//importing the seperate pages for the apps 

import HomeScreen from '../screens/HomeScreen';
import CreateWorkoutScreen from '../screens/CreateWorkoutScreen';
import TotalTimeSummaryScreen from '../screens/TotalTimeSummaryScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import FinishedRunScreen from '../screens/FinishedRunScreen';
import PastWorkoutsScreen from '../screens/PastWorkoutsScreen';

//import colours for the default layout of the screens 

import Colors from '../constants/Colours';
import Colours from '../constants/Colours';

const PocketMarathonNavigator = createStackNavigator({
    HomeScreen: HomeScreen,
    CreateWorkoutScreen: CreateWorkoutScreen,
    TotalTimeSummaryScreen: TotalTimeSummaryScreen,
    WorkoutScreen: WorkoutScreen,
    FinishedRunScreen: FinishedRunScreen,
    PastWorkoutsScreen: PastWorkoutsScreen,

}, 
{   // default layout for screens
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColour: Platform.OS === 'android' ? Colors.darkest : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.darkest
        }
    }
);

export default createAppContainer(PocketMarathonNavigator);