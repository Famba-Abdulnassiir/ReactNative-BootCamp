import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Addcontact from './Addcontact';
import Constants from 'expo-constants';
import contacts, {compareNames} from './contacts'
import Row from './Row'
import ButtonTest from './BtnTesting'
import SectionListContacts from './SectionList'


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:20,   
  },
 
 btn:{
   paddingBottom:10,
   marginBottom:20,
 }
})


export default class App extends React.Component {
  state = {
    contacts:contacts,
    showContacts: true,
    showForm: false, 
  }

  //if not in previous state then show the new state
  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }
 
 //sorting our contacts in alphabetical order
sort = () => {
  this.setState(prevState => ({contacts:[...prevState.contacts.sort(compareNames)],}))
}

toggleForm = () => {
  this.setState(prevState => ({showForm: !prevState.showForm}))
}

/* add a new contact when the prevState with dot notation get all the values in the 
old conatact form and append it to a newContact hence a new array of new contacts will be 
created then the showForm to false is like dont show this form any more now show the 
the contact we saved*/

addcontact = newContact => {
  this.setState(prevState => ({showForm: false, contacts:[...prevState.contacts, newContact]}))
}

showForm = () => {
  this.setState({showForm: true})
}

  render() {
  //this is wat we return to the view
  //line 77 if its the state thats say true or false then display accordingly 
  if(this.state.showForm) return <Addcontact onSubmit={this.addcontact}/>
   return (
      <View style={styles.container}>  
        
         <Button style={styles.btn}
          onPress={this.toggleContacts}
           title="toggle Contact" /> 

         <Button 
         onPress={this.toggleForm}
          title="Add contact" />
       
            
       {this.state.showContacts && <SectionListContacts contacts={this.state.contacts} />}
              
       
      </View> 
    );
  }
}


