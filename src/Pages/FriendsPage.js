/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Fragment} from 'react';
 import {
   FlatList,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 
 import Feather from 'react-native-vector-icons/Feather';
 import CardSection from '../Components/CardSection';

 Feather.loadFont();

 const data = [
   {
     id: 1,
     name: 'Friend One',
     desc: 'date, status, link'
   },
   {
     id: 2,
     name: 'Friend Two',
     desc: 'date, status, link'
   },
   {
     id: 3,
     name: 'Friend Three',
     desc: 'date, status, link'
   },
   {
     id: 4,
     name: 'Friend Four',
     desc: 'date, status, link'
   },
   {
     id: 5,
     name: 'Friend Five',
     desc: 'date, status, link'
   },
 ]

 const FriendsPage = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark';

   const NavigationDrawerStructureRight = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    return (
      <TouchableOpacity style={{ paddingRight: 10, flexDirection: 'row', backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
        <Feather name="user-plus" size={24} color={isDarkMode ? "white" : "black"} />
      </TouchableOpacity>
    );
  };
  
  
  React.useLayoutEffect(() => {
      navigation.setOptions({
          headerRight: () => (
              <NavigationDrawerStructureRight navigationProps={navigation} />
          ),
      });
  }, [navigation]);
 
   const renderItem = ({ item }) => (
    <TouchableOpacity>
      <CardSection title={item.name}>
        {item.desc}
      </CardSection>
    </TouchableOpacity>
   )

   return (
      <View style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5", height: '100%'}}>
        <Text style={{color: isDarkMode ? "white" : "black", fontSize: 20, fontWeight: "bold", marginBottom: 10, marginLeft: 10, marginTop: 10}}>Friends</Text>
        <FlatList
        style={{padding: 10}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
      </View>
   );
 };
 
 const styles = StyleSheet.create({
   headerStyle: {
     flexDirection: 'row',
     justifyContent:'space-between',
     padding: 5
   }
 });
 
 export default FriendsPage;
 