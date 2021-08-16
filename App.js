import React, {Fragment} from 'react';
import CustomSidebarMenu from './src/Components/CustomSidebarMenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { useColorScheme, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { MenuProvider } from 'react-native-popup-menu';
import FileScreenStack from './src/stacks/FileScreenStack';
import FriendScreenStack from './src/stacks/FriendScreenStack';
import ChatScreenStack from './src/stacks/ChatScreenStack';
import SharedScreenStack from './src/stacks/SharedScreenStack';
import StandAloneScreenStack from './src/stacks/StandAloneScreenStack';

const Drawer = createDrawerNavigator();

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}} />
      <SafeAreaView style={{flex: 1, backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
        <MenuProvider>
          <NavigationContainer style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
          <Drawer.Navigator 
              initialRouteName="Home"
              drawerStyle={{
                backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5",
              }}
              drawerContentOptions={{
                activeTintColor: '#fff', /* font color for active screen label */
                activeBackgroundColor: '#6495ED', /* bg color for active screen */
                inactiveTintColor: isDarkMode ? "white" : "black",
                inactiveBackgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 0.8)'
              }}
              drawerContent={(props) => {
              const filteredProps = {
                ...props,
                state: {
                  ...props.state,
                  routeNames: props.state.routeNames.filter(
                    // To hide single option
                    // (routeName) => routeName !== 'HiddenPage1',
                    // To hide multiple options you can add & condition
                    (routeName) => {
                      routeName !== 'StandAlone'
                    },
                  ),
                  routes: props.state.routes.filter(
                    (route) =>
                      route.name !== 'StandAlone'
                  ),
                }
              }
              return (
                <CustomSidebarMenu {...filteredProps} />
              )
              }}
            >
              <Drawer.Screen 
                name="Home" 
                options={{ drawerLabel: 'Home', drawerIcon: ({color}) =>
                  <Feather name='home' size={24} color={color} />
                }} 
                component={FileScreenStack} />
              <Drawer.Screen 
                name="Friends" 
                options={{ drawerLabel: 'Friends', drawerIcon: ({color}) => (
                  <Feather name='users' size={24} color={color} />
                )
                }}
                component={FriendScreenStack} />
              <Drawer.Screen 
                name="Chats" 
                options={{ drawerLabel: 'Chats', drawerIcon: ({color}) => (
                  <Feather name='inbox' size={24} color={color} />
                )
                }}
                component={ChatScreenStack} />
              <Drawer.Screen 
                name="Shared" 
                options={{ drawerLabel: 'Shared', drawerIcon: ({color}) => (
                  <Feather name='link' size={24} color={color} />
                )
                }}
                component={SharedScreenStack} />
                <Drawer.Screen
                  name="StandAlone"
                  component={StandAloneScreenStack}
                />
            </Drawer.Navigator>
          </NavigationContainer>
        </MenuProvider>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
