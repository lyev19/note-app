/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { styles } from './src/Style';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { Button} from '@rneui/base';
import { Card } from '@rneui/themed';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Card_Container,myIcon } from './src/Cards';

 //if this wasnt void arg the same applies              //this is what the function type returns

function App(): JSX.Element{
  
  const [Cards,setCards] = useState([])

  return(
    <SafeAreaView style={styles.main}>
     <View style={styles.options}><Text>Options</Text><Button buttonStyle={styles.button_style} type='solid'>{myIcon}</Button></View>

     <Text style={styles.appTitle}>This is my first TS App</Text>
      
      <Card_Container></Card_Container>
    </SafeAreaView>
  )
}



export default App;
