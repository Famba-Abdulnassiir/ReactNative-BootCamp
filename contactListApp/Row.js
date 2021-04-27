import React from 'react';
import{StyleSheet, View, Text} from 'react-native';


const styles = StyleSheet.create({
container:{
  padding: 10,
},
});

const Row = props => (
    <View style={styles.container}>
       <Text>{props.name}</Text> 
       <Text>{props.phone}</Text>
    </View>

)
     

  

export default Row;