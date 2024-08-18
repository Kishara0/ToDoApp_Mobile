import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[enteredGoalText, setEnteredGoalText]= useState('');
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler(){
    console.log.apply(enteredGoalText);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder=' Your course goal!'onChangeText={goalInputHandler}/>
        <Button title='Add Goal'onPress={addGoalHandler}/>
      </View>
      <View>
        <Text>List Of Goals</Text>
      </View>
      
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding:0,
  },
  TextInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'80%',
    marginRight:8,
  }

});
