import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    FlatList,
    TextInput
} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

const data = [
    {
        id: 1,
        text: "Message 1",
        sender: 1
    },
    {
        id: 2,
        text: "Message 2",
        sender: 1
    },
    {
        id: 3,
        text: "Message 3",
        sender: 2
    },
    {
        id: 4,
        text: "Message 4",
        sender: 1
    },
    {
        id: 5,
        text: "Message 5",
        sender: 2
    },
    {
        id: 6,
        text: "Message 6",
        sender: 2
    },
    {
        id: 7,
        text: "Message 7",
        sender: 1
    },
    {
        id: 8,
        text: "Message 8",
        sender: 2
    },
    {
        id: 9,
        text: "Message 9",
        sender: 1
    },
    {
        id: 10,
        text: "Message 10",
        sender: 1
    },
    {
        id: 11,
        text: "Message 11",
        sender: 2
    },
]


const ChatPage = ({ route, navigation }) => {
    
    const NavigationDrawerStructureRight = (props) => {
        const isDarkMode = useColorScheme() === 'dark';
      
        return (
          <Menu>
            <MenuTrigger>
                <Feather name="more-vertical" size={24} color={isDarkMode ? "white" : "black"} />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="info" size={22} style={{marginRight: 15}} />
                        <Text>About</Text>
                    </View>
                </MenuOption>
                <MenuOption>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="image" size={22} style={{marginRight: 15}} />
                        <Text>Media</Text>
                    </View>
                </MenuOption>
                <MenuOption>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="settings" size={22}  style={{marginRight: 15}} />
                        <Text>Settings</Text>
                    </View>
                </MenuOption>
            </MenuOptions>   
          </Menu>
        );
      };
    

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <NavigationDrawerStructureRight navigationProps={navigation} />
            ),
        });
    }, [navigation]);

    const isDarkMode = useColorScheme() === 'dark';
    
    const {user, chat} = route.params;

    const [chatInput, setChatInput] = React.useState("");

    const renderItem = ({item}) => (
        <>
        {item.sender === user.id ? (
            <View style={{
                backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 1)',
                borderRadius: 10,
                alignSelf: 'flex-start',
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginTop: 8,
            }}>
                <Text style={{color: isDarkMode ? 'white' : 'black', fontSize: 16}}>{item.text}</Text>
            </View>
        ): (
            <View style={{
                backgroundColor: '#6495ED',
                borderRadius: 10,
                alignSelf: 'flex-end',
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginTop: 8,
            }}>
                <Text style={{color: isDarkMode ? 'white' : 'black', fontSize: 16}}>{item.text}</Text>
            </View>
        )}
        </>
    );

    return (
        <View style={{backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5", height: '100%', flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
            <FlatList
                contentContainerStyle={{flexDirection: 'column'}}
                style={{padding: 10}}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={{height: 60, padding: 10, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                    style={{
                        backgroundColor: isDarkMode ? 'rgba(234, 234, 234, 0.05)' : 'rgba(234, 234, 234, 1)',
                        padding: 10,
                        borderRadius: 10,
                        width: "80%",
                        color: isDarkMode ? 'white' : 'black',
                        fontSize: 16
                    }}
                    onChangeText={setChatInput}
                    value={chatInput}
                    placeholder="Type here..."
                />
                <TouchableOpacity style={{marginLeft: 10}}>
                    <Feather name="send" size={30} color={isDarkMode ? "white" : "black"}></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 8,
        borderRadius: 10,
        width: "80%",
    }
})

export default ChatPage;