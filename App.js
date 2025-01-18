import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [answer, setAnswer] = useState('')

  const clearInputs = () => {
    setNumber1()
    setNumber2()
  }

  const plusPressed = () => {
    
    setAnswer(parseFloat(number1) + parseFloat(number2))
    clearInputs()
  }

  const minusPressed = () => {
    setAnswer(parseFloat(number1) - parseFloat(number2))
    clearInputs()
  }

  return (
    <View style={styles.container}>
      <Text>Result: {answer}</Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'column'}}>
        <TextInput
          style={styles.input}
          onChangeText={number1 => (setNumber1(number1))}
          value={number1}
          keyboardType="numeric" />
        <TextInput
          style={styles.input}
          onChangeText={number2 => (setNumber2(number2))}
          value={number2}
          keyboardType="numeric" />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: '20' }}>
        <Button onPress={plusPressed} title="+" />
        <Button onPress={minusPressed} title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100
  },
});
