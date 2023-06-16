import React from 'react';
import type {PropsWithChildren} from 'react';
import { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { styles } from './Style';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableHighlight,TouchableOpacity
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


type CardProps = {
    title:string,
    date:string
  }
  
  const Crd = ({title,date}: CardProps)=> <TouchableOpacity style={styles.card}><Text>LOLEEE</Text></TouchableOpacity>
  
  
 export const myIcon = <Icon name="ellipsis-v"size={30} color="#f7f1e1"/>;
  
  
 export const Card_Container = ()=><View style={styles.card_container}>
    <Crd title='lole4 ' date='big ass stuff'></Crd>
    <Crd title='lole3 ' date='10:0'></Crd>
   
  </View>
  

