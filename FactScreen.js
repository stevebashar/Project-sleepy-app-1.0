import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';

export default class FactScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      age:"",
      sleepTime:"",
      wakeupTime:""
    };
  }
  render(){
    return(
  <View style ={styles.container}>
  <TextInput
  style = {styles.txtInpt}
  onChangeText={text =>{
    this.setState({age:text});
  }}
  value = {this.state.age}
  />
  </View>
    )
  }
}
const styles =  StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : '#9b695b'
  },
  txtInpt:{
    marginTop:80,
    width: "80%",
    height: 40
  }
})