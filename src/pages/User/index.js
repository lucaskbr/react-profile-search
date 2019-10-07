import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

class User extends Component {
  static PropTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    user: {
      login: '',
      avatar: '',
      name: '',
      bio: '',
    },
    stars: [],
    page: 1,
    finalPage: false,
    loading: false,
    refreshing: false,
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const { page } = this.state;

    this.setState({
      loading: true,
      user: {
        login: user.login,
        avatar: user.avatar,
        name: user.name,
        bio: user.bio,
      },
    });

    const response = await api.get(`/users/${user.login}/starred?page=${page}`);

    this.setState({
      stars: response.data,
      loading: false,
    });
  }

  handleNavigate = (link, name) => {
    const { navigation } = this.props;
    const repository = {
      link,
      name,
    };

    navigation.navigate('Repository', { repository });
  };

  loadMore = async () => {
    const { user, stars, page, finalPage } = this.state;

    if (!finalPage) {
      this.setState({
        loading: true,
      });

      const newPage = page + 1;

      const response = await api.get(
        `/users/${user.login}/starred?page=${newPage}`
      );

      if (response.data.length > 0) {
        this.setState({
          stars: [...stars, ...response.data],
          page: newPage,
          loading: false,
        });
      }
      if (response.data.length <= 0) {
        this.setState({
          finalPage: true,
          loading: false,
        });
      }
    }
  };

  renderFooter = () => {
    const { loading } = this.state;

    return loading ? <ActivityIndicator size="large" color="#eee" /> : null;
  };

  refreshList = async () => {
    const { user } = this.state;

    this.setState({
      refreshing: true,
    });

    const page = 1;

    const response = await api.get(`/users/${user.login}/starred?page=${page}`);

    this.setState({
      stars: response.data,
      page,
      refreshing: false,
      finalPage: false,
    });
  };

  render() {
    const { user, stars, refreshing } = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <Stars
          onEndReachedThreshold={0.2}
          onEndReached={this.loadMore}
          onRefresh={this.refreshList}
          refreshing={refreshing}
          ListFooterComponent={this.renderFooter}
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred
              onTouchEnd={() =>
                this.handleNavigate(item.html_url, item.full_name)
              }
            >
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}

export default User;
