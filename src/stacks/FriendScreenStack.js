import React from 'react';
import FriendsPage from '../Pages/FriendsPage';
import ProfilePage from '../Pages/ProfilePage';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useColorScheme, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
    const isDarkMode = useColorScheme() === 'dark';
  
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5", height: 45, paddingTop: 10  }}>
        <TouchableOpacity onPress={toggleDrawer}>
          {/*Donute Button Image */}
          <View style={{marginLeft: 10}}>
            <Feather name={'menu'} size={25} color={ isDarkMode ? 'white' : 'black'} />
          </View>
        </TouchableOpacity>
      </View>
    );
};
  
function FriendScreenStack({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <Stack.Navigator initialRouteName="FriendsPage" style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
        <Stack.Screen
            name="FriendsPage"
            component={FriendsPage}
            options={{
            title: '', //Set Header Title
            headerLeft: () => (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),
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

export default FriendScreenStack;