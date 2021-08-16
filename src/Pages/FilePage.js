import React, {Fragment} from 'react';
import {
  StyleSheet,
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
    name: 'File One'
  },
  {
    id: 2,
    name: 'File Two'
  },
  {
    id: 3,
    name: 'File Three'
  },
  {
    id: 4,
    name: 'File Four'
  },
  {
    id: 5,
    name: 'File Five'
  },
]

const FilePage = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {folder} = route.params;

  const NavigationDrawerStructureRight = (props) => {
  //Structure for the navigatin Drawer on the right side of the navigation
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5"}}>
      <Feather name="more-vertical" size={24} color={isDarkMode ? "white" : "black"} />
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

   const renderItem = ({item}) => (
    <TouchableOpacity>
      <Section title={item.name} type="file" />
    </TouchableOpacity>
   );
 
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
  },
  iconButton: {
  elevation: 8,
  backgroundColor: "transparent",
  padding: 1
}
});
 
 export default FilePage;
 