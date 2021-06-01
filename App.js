import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Constants from 'expo-constants';
import FactScreen from "./Screens/FactScreen";

export default class App extends React.Component{
render(){
  return(
  </AppContainer>
  <View style={styles.background}>
    <Text style ={styles.title}>Sleep Deep</Text>
    <View style={styles.background}>
       <Image
   style={styles.imageIcon}
   source={{
     uri: ""
   }}/>
    </View>
   <View style={styles.background}>

    <TouchableOpacity style={styles.button}
    onPress ={()=>{
      
    
    }}>
    <Text style={styles.text}>Continue</Text>
  </TouchableOpacity>
   
   </View> 
  </View>  
  )
}
}

const switchNavigator = createSwitchNavigator({
 FactScreen:{screen:FactScreen}  
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  background:{
    color: "#991B1B"
  },
  button:{
    backgroundColor: "#9424b2",
    width: 150,
    height: 45,
    borderRadius: 10, 
    justifyContent:"center",
    marginLeft: 95,
    marginTop: 100,
  },
  text:{
    
    fontStyle: "Roboto",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24
  },
  title:{
    marginTop: 50,
    fontSize: 36,
    alignSelf:"center",
    fontWeight: "bold"
  },
  imageIcon:{
    marginTop: 10,
    width:150,
    height:150,
    marginRight:50
  }
  });
