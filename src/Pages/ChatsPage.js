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
   TextInput,
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
 
   const NavigationDrawerStructureRight = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isSearchMode, setIsSearchMode] = React.useState(false);
    const [searchInput, setSearchInput] = React.useState("");

   return (
     <View style={{paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
       {isSearchMode ? (
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
           <TextInput
             style={{
                 backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 1)',
                 padding: 10,
                 borderRadius: 10,
                 color: isDarkMode ? 'white' : 'black',
                 fontSize: 14,
                 width: 200,
                 marginRight: 5
             }}
             onChangeText={setSearchInput}
             value={searchInput}
             placeholder="Type here..."
           />
           <TouchableOpacity onPress={() => setIsSearchMode(false)}>
             <Feather name="x" size={24} color={isDarkMode ? "white" : "black"}/>
           </TouchableOpacity>
         </View>
       ) : (
         <>
           <TouchableOpacity onPress={() => setIsSearchMode(true)}>
             <Feather name="search" size={24} color={isDarkMode ? "white" : "black"}/>
           </TouchableOpacity>
           <TouchableOpacity>
             <Feather name="more-vertical" size={24} color={isDarkMode ? "white" : "black"}/>
           </TouchableOpacity>
         </>
       )}
     </View>
   )

  };

 React.useLayoutEffect(() => {
   navigation.setOptions({
       headerRight: () => (
           <NavigationDrawerStructureRight navigationProps={navigation} />
       ),
   });
 }, [navigation]);
 
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
 