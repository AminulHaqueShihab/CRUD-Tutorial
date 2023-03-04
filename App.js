import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, button, Pressable, } from 'react-native';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./components/config.jsx"

export default function App() {

  const [username, setUserName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassowrd] = useState('');
  //create data
  function create() {
    //submit data
    addDoc(collection(db, "users"), {
      username: username,
      email: email,
      password: password
    }).then(() => {
      console.log('Data Submitted');
    }).catch((error) => {
      console.log(error);
    });
  }
    //update data
  function update(id) {
    updateDoc(doc(db, "users", id ), {
      username: username,
      email: email,
      password: password
    }).then(() => {
      console.log('Data Submitted');
    }).catch((error) => {
      console.log(error);
    });
  }
    //delete data
  function deleteData(id) {
    deleteDoc(doc(db, "users", id ));
  }
    //update data
  function getData(id) {
    getDoc(doc(db, "users", id ))
    .then((docData) => {
      if (docData.exists()) {
        console.log(docData.data());
      }else {
        console.log('No such data found');
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  //Get all the data
  function getAll(id) {
    getDocs(collection(db, "users"))
    .then((docSnap) => {
      let users = [];
      docSnap.forEach(doc => {
        users.push({...doc.data(), id:doc.id})
      });
      console.log("Document Data: ", users);
    });
    
  }
  //Get data by query
  function queryData(username) {
    getDocs(query(collection(db, "users"), where('username', '==', username)))
    .then((docSnap) => {
      let users = [];
      docSnap.forEach(doc => {
        users.push({...doc.data(), id:doc.id})
      });
      console.log("Document Data: ", users[0].username);
    });
    
  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#546E7A', fontWeight: 'bold', fontSize: 30}} >Sign Up!</Text>
      <View style={styles.form}>
        <TextInput value={username} onChangeText={(username) => {setUserName(username)}} style={styles.input} placeholder="Enter Username" placeholderTextColor={'#90A4AE'} />
        <TextInput value={email} onChangeText={(email) => {setemail(email)}} style={styles.input} placeholder="Enter your email" placeholderTextColor={'#90A4AE'} />
        <TextInput value={password} onChangeText={(password) => {setPassowrd(password)}} style={styles.input} placeholder="Enter your Password" placeholderTextColor={'#90A4AE'} secureTextEntry={'secure'} />
        <Pressable onPress={create} style={styles.submit} >Submit</Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2DFDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignItems:'center',
    backgroundColor: '#80CBC4',
    padding: 20,
    borderRadius: 10,
    margin: 15
  },
  input: {
    padding: 5,
    marginTop: 15,
    width: 400,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 15,
  },
  submit: {
    padding: 5,
    marginTop: 20,
    width: 100,
    height: 40,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#4DB6AC',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'roboto',
    borderColor: '#546E7A',
    borderWidth: 2
  },
});
