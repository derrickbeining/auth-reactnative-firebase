import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, LoginForm, LogoutButton} from './components';
import secrets from '../secret.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: secrets.FIREBASE_API_KEY,
      authDomain: secrets.FIREBASE_AUTH_DOMAIN,
      databaseURL: secrets.FIREBASE_DB_URL,
      projectId: secrets.FIREBASE_PROJECT_ID,
      storageBucket: secrets.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: secrets.FIREBASE_MESSAGING_SENDER_ID
    });
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          this.setState({isLoggedIn: true});
        } else {
          this.setState({isLoggedIn: false});
        }
      })

  }

  render() {
    const {isLoggedIn} = this.state;
    return (
      <View style={styles.root}>
        <Header>AuthFirebase</Header>
        <View style = {{flex: 1}} >
          {isLoggedIn
            ? <LogoutButton />
            : <LoginForm />
          }
        </View>
      </View>
    )
  }
}

const styles = {
  root: {
    flex: 1,
  }
}

export default App;
