import React, { Component } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

class User extends Component {
  // console.tron.log(navigation.getParam('user'));

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  componentDidMount({ navigation }) {
    console.tron.log(navigation.getParam('user'));
  }

  render() {
    return <View />;
  }
}

export default User;
