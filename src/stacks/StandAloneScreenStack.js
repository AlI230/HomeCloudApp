import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useColorScheme} from 'react-native';
import ProfilePage from '../Pages/ProfilePage';

const Stack = createStackNavigator();

const StandAloneScreenStack = () => {
    const isDarkMode = useColorScheme() === 'dark';
  
    return (
      <Stack.Navigator initialRouteName="StandAlonePages" style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            title: 'Profile Page', //Set Header Title
            headerStyle: {
              backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5",
              shadowRadius: 0,
              shadowOffset: {
                  height: 0,
              }, //Set Header color
            },
            headerTintColor: isDarkMode ? 'white' : 'black',
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            }}
        />
      </Stack.Navigator>
    )
}

export default StandAloneScreenStack;