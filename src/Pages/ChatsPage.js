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
     name: 'Chat One',
     desc: 'user: Hello...'
   },
   {
     id: 2,
     name: 'Chat Two',
     desc: 'user: Hello...'
   },
   {
     id: 3,
     name: 'Chat Three',
     desc: 'user: Hello...'
   },
   {
     id: 4,
     name: 'Chat Four',
     desc: 'user: Hello...'
   },
   {
     id: 5,
     name: 'Chat Five',
     desc: 'user: Hello...'
   },
 ]

 const ChatsPage = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5",
   };
 
   const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ChatPage', {user: {
      // id: item.id,
      id: 1,
      name: item.name,
    },
    chat: {
      id: 1,
    }})}>
      <CardSection title={item.name}>
        {item.desc}
      </CardSection>
    </TouchableOpacity>
   )

   return (
      <View style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5", height: '100%'}}>
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
 
 export default ChatsPage;
 