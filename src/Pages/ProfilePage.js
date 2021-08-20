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
              backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 1)', 
              width: "100%", 
              borderRadius: 10, 
              padding: 20,
            }}>
              <TouchableOpacity style={{alignSelf: 'flex-end', marginBottom: -15}} >
                <Feather name='edit-2' size={16} color={isDarkMode ? "white": "black"} />
              </TouchableOpacity>
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
              backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 1)', 
              width: "100%", 
              borderRadius: 10, 
              padding: 20,
              justifyContent: 'space-between',
            }}>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                borderColor: "#AAC5F5",
                width: "100%",
              }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <View style={{backgroundColor: isDarkMode ? "rgba(170, 197, 245, 0.65)" : "#AAC5F5", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 9999}}>
                    <Text style={{color: isDarkMode ? "white" : "black", fontSize: 14}}>Available Space</Text>
                  </View>
                  <View>
                    <Text style={{color: isDarkMode ? "white" : "black", fontSize: 14}}>2.8GB / 25GB</Text>
                  </View>
                </View>
                <View style={{
                  marginTop: 10,
                  height: 8,
                  borderRadius: 9999,
                  backgroundColor: "#AAC5F5"
                }}>
                  <View style={{
                    width: "80%",
                    flex: 1,
                    flexDirection: "column",
                    whiteSpace: "nowrap",
                    justifyContent: "center",
                    backgroundColor: "#6495ED",
                    borderRadius: 9999,
                  }}></View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  marginTop: 25,
                  borderBottomColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(112, 112, 112, 0.50)',
                  borderBottomWidth: 2,
                }}
              />
              <View style={{
                marginTop: 25,
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}>
                  <View style={{height: 100, width: 60, alignItems: 'center', justifyContent: "flex-end"}}>
                    <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Folders</Text>
                    <View style={{
                      marginTop: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "flex-end",
                      width: "100%",
                      height: "40%",
                      backgroundColor: "#6495ED",
                      borderRadius: 5,
                      padding: 5,
                    }}>
                      <Text style={{color: isDarkMode ? "white" : "black"}}>5</Text>
                    </View>
                  </View>
                  <View style={{height: 100, width: 60, alignItems: 'center', justifyContent: "flex-end"}}>
                    <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Files</Text>
                    <View style={{
                      marginTop: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "flex-end",
                      width: "100%",
                      height: "80%",
                      backgroundColor: "#6495ED",
                      borderRadius: 5,
                      padding: 5,
                    }}>
                      <Text style={{color: isDarkMode ? "white" : "black"}}>15</Text>
                    </View>
                  </View>
                  <View style={{height: 100, width: 60, alignItems: 'center', justifyContent: "flex-end"}}>
                    <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Folders</Text>
                    <View style={{
                      marginTop: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "flex-end",
                      width: "100%",
                      height: "30%",
                      backgroundColor: "#6495ED",
                      borderRadius: 5,
                      padding: 5,
                    }}>
                      <Text style={{color: isDarkMode ? "white" : "black"}}>3</Text>
                    </View>
                  </View>
                  
              </View>
              {/* <Text style={isDarkMode ? styles.textStyleDark : styles.textStyleLight}>Stats about files and space</Text> */}
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