import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useColorScheme, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ChatsPage from '../Pages/ChatsPage';
import ChatPage from '../Pages/ChatPage';

const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <View style={{marginLeft: 10}}>
          <Feather name={'menu'} size={25} color={ isDarkMode ? 'white' : 'black'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

function ChatScreenStack({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
  
    return (
      <Stack.Navigator initialRouteName="ChatsPage" style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
        <Stack.Screen
          name="ChatsPage"
          component={ChatsPage}
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
        <Stack.Screen
          name="ChatPage"
          component={ChatPage}
          options={({navigation, route}) => ({
            headerTitle: route.params.user.name, //Set Header Title
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

export default ChatScreenStack;