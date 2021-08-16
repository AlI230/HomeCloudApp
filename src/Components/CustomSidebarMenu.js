import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';

function CustomSidebarMenu(props, navigation) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.sideMenuProfileIcon}>
        <Feather name={'box'} size={40} color='#6495ED' />
        <Text style={{fontSize: 22, marginLeft: 5, color: '#6495ED', fontWeight: 'bold'}}>HomeCloud</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 0.8)',
        padding: 16,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        borderRadius: 10
      }}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => props.navigation.navigate('StandAlone', {screen: 'ProfilePage'})}>
          <Feather name={"user"} size={30} style={{marginRight: 10, color: isDarkMode ? "white" : "black",}}/>
          <View>
            <Text style={{color: isDarkMode ? "white" : "black"}}>Alexander Callebaut</Text>
            <Text style={{color: "gray"}}>View Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name={"log-out"} size={24} style={{color: isDarkMode ? "white" : "black"}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    height: 60,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 16,
    color: "#6495ED",
    alignSelf: "center",
  }
});

export default CustomSidebarMenu;
