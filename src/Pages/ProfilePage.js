import React, {useLayoutEffect} from 'react';
import { Text, View, useColorScheme, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const ProfilePage = ({ navigation }) => {

    const NavigationDrawerStructure = (props) => {
        const toggleDrawer = () => {navigation.openDrawer()};
        const isDarkMode = useColorScheme() === 'dark';
      
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5", height: 45, paddingTop: 10  }}>
            <TouchableOpacity onPress={toggleDrawer}>
              <View style={{marginLeft: 10}}>
                <Feather name={'menu'} size={25} color={ isDarkMode ? 'white' : 'black'} />
              </View>
            </TouchableOpacity>
          </View>
        );
      };

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),
        });
    }, [navigation]);

    // useEffect to get all the stats and user info then show the results on this page

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5", height: '100%', flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <ScrollView style={{ width: '100%', padding: 15}}>
            <View style={{
              alignItems: 'center', 
              backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 0.8)', 
              width: "100%", 
              borderRadius: 10, 
              padding: 20,
            }}>
              <Feather name="user" size={45} color={isDarkMode ? "white": "black"} />
              <View style={{
                marginTop: 20,
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}>
                <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Firstname lastname</Text>
                <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Email</Text>
              </View>
            </View>
            <View style={{
              marginTop: 20,
              alignItems: 'center', 
              backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 0.8)', 
              width: "100%", 
              borderRadius: 10, 
              padding: 10,
            }}>
              <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Stats about files and space</Text>
            </View>
            <View style={{
              marginTop: 20,
              alignItems: 'center', 
              backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 0.8)', 
              width: "100%", 
              borderRadius: 10, 
              padding: 10,
            }}>
              <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Stats about Friends and actions</Text>
            </View>
          </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
  textStyleDark: {
    color: 'white',
    fontSize: 16
  },
  textStyleLight: {
    color: 'black',
    fontSize: 16
  }
})

export default ProfilePage;