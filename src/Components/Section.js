import React from 'react';
import {
    Text,
    useColorScheme,
    View,
    StyleSheet
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';

const Section = ({title, type}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isDarkMode ? "#2b2b2b" : "#f7f5f5",
        marginTop: 12,
        paddingHorizontal: 24,
        paddingVertical: 24,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 3 },
        shadowOpacity: 0.3,
        borderRadius: 10,
      }}>
        <Feather name={type} size={24} style={{marginRight: 10, color: isDarkMode ? 'white': 'black'}} />
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    // sectionContainer: {
    //   marginTop: 32,
    //   paddingHorizontal: 24,
    //   shadowColor: 'blue',
    //   alignItems: 'center',
    //   shadowOffset: {width: 3, height: 3 },
    //   shadowOpacity: 1.0,
    //   borderRadius: 10,
    // },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  export default Section;