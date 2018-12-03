import React , { Component } from 'react';
import { StyleSheet, Text, View, Image,ScrollView,Button,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 class Signin extends Component {
  static navigationOptions ={
    header: null
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        
      <View style={{height:360,width:'100%',overflow:'hidden',
    
backgroundColor:'#fff',
  
borderBottomLeftRadius:180 ,borderBottomRightRadius:180}}>
  <Image style={{ height:360,width:'100%' }} source= {require('./assets/images/bg-image.jpg')}/>
  <View style={{flex:1, top:127,left:61,position:'absolute',zIndex:2
  }}>
        <Text style={{fontSize:60,color:'#fff',textAlign:'center'}}>One </Text>
        <Text style={{fontSize:40,color:'#fff',textAlign:'center'}}> Planet Rating</Text>
       
    </View>
    </View>
    <Ionicons style= {{shadowColor: 'black',shadowOpacity: 1.0,position:'absolute',left:170,top:325}} onPress={()=> this.props.navigation.goBack()} name="md-close-circle" size={50} color="#fff" />
    <View style={{padding:40}}>
    <View style={{marginTop:50,height:55,width:310 ,borderRadius:30,borderWidth:0.5,borderColor:'#dbdfe1',justifyContent:'center'}}>
    <Text style={{paddingLeft:21,fontSize:18,color:'#b7c0c4'}}>EMAIL</Text>
    </View>
    <View style={{marginTop:13,height:55,width:310 ,borderRadius:30,borderWidth:0.5,borderColor:'#DBDFE1',justifyContent:'center'}}>
    <Text style={{paddingLeft:21,fontSize:18,color:'#b7c0c4'}}>PASSWORD</Text>
    </View>
    <View style={{marginTop:25,height:55,width:310 ,borderRadius:30,borderWidth:0.5,borderColor:'#CECEE7',justifyContent:'center'}}>
    <Text style={{fontSize:23,color:'#707070',textAlign:'center'}}>SIGN IN</Text>
    </View>
    </View>
      </View>
    );
  }
}
export default Signin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:4,
   
  },
 
});
