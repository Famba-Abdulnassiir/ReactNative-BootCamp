import * as React from 'react';
import { Text, View, Button, ScrollView, Switch, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  appContainer:{
     flex:1,
     alignItems:"center",
     justifyContent:"center",  

  },
  count:{
    fontSize:48,
  },
  
});

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    setInterval(this.inc, 1000)
  }
  
  inc = ()=> {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
   
  render(){
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    )
  }
}

export default App;