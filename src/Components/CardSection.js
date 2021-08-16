import React from 'react';
import {
    Text,
    useColorScheme,
    View,
    StyleSheet
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';

const CardSection = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={{
        backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5",
        marginTop: 12,
        paddingHorizontal: 24,
        paddingVertical: 16,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 3 },
        shadowOpacity: 0.3,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Feather name="user" size={33} style={{marginRight: 10, color: isDarkMode ? 'white': 'black'}} />
        <View>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {title}
          </Text>
          <Text
            style={[
              styles.sectionDescription,
              {
                color: isDarkMode ? Colors.light : Colors.dark,
              },
            ]}>
            {children}
          </Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      shadowColor: 'blue',
      alignItems: 'center',
      shadowOffset: {width: 3, height: 3 },
      shadowOpacity: 1.0,
      borderRadius: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 5,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  export default CardSection;