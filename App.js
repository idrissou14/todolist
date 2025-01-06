import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const AddTask = () => {
      if(task && !taskList.includes(task)){
          setTaskList([...taskList, task]);
          setTask("");
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <TextInput 
        style={styles.input}  // Input Text Field
        placeholder='Entrer le nom de votre tache'
        value = {task}
        onChangeText={(text) => setTask(text)} 
      />
      <TouchableOpacity
        style={styles.save}
        onPress={AddTask}
      >
        <Text>Sauvegarder</Text>
      </TouchableOpacity>
      <FlatList 
          data={taskList}
          renderItem={({item, index}) => (
            <Text 
              style={styles.item}
              onPress={() => {setTaskList(taskList.filter((_i, i) => i !== index));}}
            >
              {index + 1}--{item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50
  },
  save: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9967A',
    width: 250,
    height: 40,
    borderRadius: 5,
    marginBottom: 20
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#424242',
    width: 250,
    height: 40,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#f2f2f2'
  },
  item: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: 5,
    width: 400,
  }

});
