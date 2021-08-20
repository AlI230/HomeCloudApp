import React from 'react';
import HomePage from '../Pages/HomePage';
import FilePage from '../Pages/FilePage';
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
    <View style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <View style={{marginLeft: 10}}>
          <Feather name={'menu'} size={25} color={ isDarkMode ? 'white' : 'black'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

function FileScreenStack({ navigation, route }) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Stack.Navigator initialRouteName="HomePage" style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={({route}) => ({
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
        })}
      />
      <Stack.Screen
        name="FilePage"
        component={FilePage}
        options={({route}) => ({
          title: route.params.folder.name, //Set Header Title
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
        })}
      />
    </Stack.Navigator>
  )
}

export default FileScreenStack;