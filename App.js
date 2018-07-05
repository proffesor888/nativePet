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
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
<<<<<<< HEAD
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logIn, signIn} from './src/actions';
=======
import LinearGradient from 'react-native-linear-gradient';

>>>>>>> ec7cdf29231529d9f070c1941185b286860e6f02

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

class App extends Component<Props> {
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
      <LinearGradient colors={['#3494E6','#ec6ead']} style={styles.container}>
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
       <View style={styles.buttonsContainer}>
       <TouchableOpacity 
        style={styles.buttons}
        onPress={()=> this.logIn(this.state.email, this.state.password)}
        >
        <Text style={{textAlign: 'center', paddingTop: 5}}> Log IN </Text>
        </TouchableOpacity>
       <TouchableOpacity
        style={styles.buttons}
        title='Sign Up'
        onPress={()=> this.signUp(this.state.email, this.state.password)}>
        <Text style={{textAlign: 'center', paddingTop: 5}}> Sign UP </Text>
        </TouchableOpacity>
        </View>
      </LinearGradient>
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
  buttonsContainer: {
    width: '100%',
    marginTop: 10
  },
  buttons: {
    backgroundColor: '#ffee00',
    width: '80%',
    height: 30,
    marginLeft: 40,
    borderRadius: 10,
    marginTop: 10,
  }
});

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn,
    signIn
  })
}

export default connect()(App);