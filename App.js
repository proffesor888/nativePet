/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAh1mD696xGh-7LAaO74Eptj_fMALdQiAs",
    authDomain: "auth-196ad.firebaseapp.com",
    databaseURL: "https://auth-196ad.firebaseio.com",
    projectId: "auth-196ad",
    storageBucket: "auth-196ad.appspot.com",
    messagingSenderId: "948891309722"
  };

firebase.initializeApp(config);

type Props = {};
export default class App extends Component<Props> {
  state = {
    email: '',
    password: ''
  };
  getEmail = e => {
    this.setState({email: e})
  };
  getPass = e => {
    this.setState({password: e})
  };
  logIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };
  signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.label}>Email: </Text>
       <TextInput style={styles.input}
       autoCorrect={false}
       placeholder='Enter your Email'
       value={this.state.email}
       onChangeText={(e) => this.getEmail(e)}
       />
       <Text style={styles.label}>Password: </Text>
       <TextInput style={styles.input}
       autoCorrect={false}
       placeholder='Enter your Password'
       value={this.state.password}
       onChangeText={(e) => this.getPass(e)}/>
       <Button 
        style={styles.buttons}
        title='Log In'
        onPress={()=> this.logIn(this.state.email, this.state.password)}
        />
       <Button 
        style={styles.buttons}
        title='Sign Up'
        onPress={()=> this.signUp(this.state.email, this.state.password)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    marginTop: 10,
    width: '80%'
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 20
  },
  buttons: {
  }
});
