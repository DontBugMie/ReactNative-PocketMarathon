// platform API is used to determine if the device is android or not

import { Platform } from 'react-native';

//importing the navigation API's

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//importing the seperate pages for the apps 

import HomeScreen from '../screens/HomeScreen';
import SetTimeScreen from '../screens/SetTimeScreen';
import TotalTimeSummaryScreen from '../screens/TotalTimeSummaryScreen';
import RunningScreen from '../screens/RunningScreen';

//import colours for the default layout of the screens 

import Colors from '../constants/Colours';
import Colours from '../constants/Colours';

const PocketMarathonNavigator = createStackNavigator({
    HomeScreen: HomeScreen,
    SetTimeScreen: SetTimeScreen,
    TotalTimeSummaryScreen: TotalTimeSummaryScreen,
    RunningScreen: RunningScreen,
}, 
{   // default layout for screens
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColour: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colours.primary
        }
    }
);

export default createAppContainer(PocketMarathonNavigator);