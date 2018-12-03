import React from 'react';
import { StyleSheet, Text,Image, View ,TouchableOpacity} from 'react-native';
import Signin from './Signin';
import Register from './Register';
import {createStackNavigator} from 'react-navigation';
class App extends React.Component {
  static navigationOptions ={
    header: null
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Image style ={{flex:1, height:'100%',width:'100%',zIndex:1}}  source= {require('./assets/images/bg-image.jpg')}>

      </Image>
      <View style={{flex:1, top:291,left:61,position:'absolute',zIndex:2
  }}>
        <Text style={{fontSize:60,color:'#fff',textAlign:'center'}}>One </Text>
        <Text style={{fontSize:40,color:'#fff',textAlign:'center'}}> Planet Rating</Text>
       
    </View>

    <View style={{flex:1, bottom:105,left:33,position:'absolute',zIndex:2
  }}>
    
    <TouchableOpacity onPress={()=>{ navigate('Second')}}>
      <View style={{height:55,width:310 ,borderRadius:30,backgroundColor:'#fff',justifyContent:'center'}}>
    <Text style={{fontSize:23,color:'#707070',textAlign:'center'}}>SIGN IN</Text>
    </View>
    </TouchableOpacity>
    </View>
    
    <View style={{flex:1, bottom:48,left:124,position:'absolute',zIndex:2
  }}>
  <TouchableOpacity onPress={()=>{ navigate('Third')}}>
    <Text style={{fontSize:23,color:'#fff',textAlign:'center'}}>New Account?</Text>
    </TouchableOpacity>
    </View>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});

export default App = createStackNavigator({
  first:{screen: App},
  Second:{screen: Signin},
  Third:{screen: Register},
 
});
