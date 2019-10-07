import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  state = {
    loading: true,
  };

  endLoading = () => {
    this.setState({
      loading: true,
    });
  };

  render() {
    const { navigation } = this.props;
    const { link } = navigation.getParam('repository');
    const { loading } = this.state;
    return (
      <Container>
        {loading ? (
          <ActivityIndicator color="#000" size="large" />
        ) : (
          <WebView
            source={{ uri: link }}
            onLoadEnd={this.endLoading}
            style={{ flex: 1 }}
          />
        )}
      </Container>
    );
  }
}

export default Repository;
