/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Fragment} from 'react';
 import {
   TextInput,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
   FlatList
 } from 'react-native';
 
 import Feather from 'react-native-vector-icons/Feather';
 import Section from '../Components/Section';

 Feather.loadFont();

 const data = [
   {
     id: 1,
     name: 'Shared File One'
   },
   {
     id: 2,
     name: 'Shared File Two'
   },
   {
     id: 3,
     name: 'Shared File Three'
   },
   {
     id: 4,
     name: 'Shared File Four'
   },
   {
     id: 5,
     name: 'Shared File Five'
   },
 ]

 const SharedPage = ({ navigation }) => {
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
 
   const renderItem = ({item}) => (
    // <TouchableOpacity onPress={() => navigation.navigate('FilePage', {folder: item})}>
    <TouchableOpacity>
      <Section title={item.name} type="file" />
    </TouchableOpacity>
   );
 
   return (
    <View style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5", height: '100%'}}>
      <Text style={{color: isDarkMode ? "white" : "black", fontSize: 20, fontWeight: "bold", marginBottom: 10, marginLeft: 10, marginTop: 10}}>Shared Files</Text>
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
   },
   iconButton: {
    elevation: 8,
    backgroundColor: "transparent",
    padding: 1
  }
 });
 
 export default SharedPage;
 