import * as React from 'react';
import { Text, View, Button, ScrollView, Switch, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  fill:{
    flex:1,
  },
 todoContainer:{
   flexDirection:'row',
   alignItems:"center",
   paddingTop:5,

 },  appContainer:{
     paddingTop:Constants.statusBarHeight,
    

  }
  
});

const Todo = props => (
  <View style={[styles.todoContainer, styles.fill]}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle}/>
    <Button onPress = {props.onDelete} title="Delete"/>
    <Text> {props.todo.text}</Text>
  </View>
  );
let id = 0;
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [],
    }
  }

   addTodo() {
    const text = <Text>"TODO text please!"</Text>
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id++, text: text, checked: false},
      ], 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render(){
    return (
      <View style={styles.appContainer}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="ADD TODO"/>
        <ScrollView >
          {this.state.todos.map(todo => (
            <Todo
              onToggle ={() => this.toggleTodo(todo.id)}
              onDelete = {() => this.removeTodo(todo.id)}
          todo = {todo} /> )
          )}
        </ScrollView>
      </View>
    )
  }
}

export default App;