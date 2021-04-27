import  React from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
input:{
  borderWidth:1,
  borderRadius: 10,
  marginBottom:4,
  height:25,

},

container:{
 paddingTop: Constants.statusBarHeight,
},
});

class Addcontact extends React.Component {
  state= {
    name:'',
    phone:'',
    isFormValid: false,
 }

  handleNameChange = name => {
    this.setState({name}, this.validateForm)
  }

  handlePhoneChange = phone => {
    if(+phone >= 0  && phone.length <= 10 ){
     this.setState({phone}, this.validateForm)
    }
    
  }

  validateForm = () => {
  if(+this.state.phone >= 0  && this.state.phone.length === 10 && this.state.name.length >= 3 ) return this.setState({isFormValid:true})
   else
   return this.setState({isFormValid: false})
  }

  
/* here we create a handler that will form for us a function 
which will be used for onSubmit to act like a form in html or react 
wc is not in React native the dot notation says that just give me all the 
elements in the state */
handleSubmit =  () => {
     this.props.onSubmit(this.state) 
}
  render(){

/*the disabled state on the button can be helpful in the form validation
if the setState has not followe all the rules of validation then the button should
not allow submission because data already submited can cause issues if not the right type*/

     return(
       <View style={styles.container}> 
          <TextInput 
          style = {styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
          placeholder="Name" />

          <TextInput keyboardType="numeric"
          style={styles.input}
          placeholder="Phone"
          onChangeText={this.handlePhoneChange}
          value={this.state.phone}
          /> 
          <Button title="Add contact" 
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid} 
          />
          
       </View>
  )

  }
}
 

export default Addcontact;