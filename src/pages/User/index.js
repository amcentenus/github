import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  FavRepos,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

const User = ({ navigation, route }) => {
  const [user, setUser] = useState(route.params.user);
  const [favRepos, setFavRepos] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: user.name });

    async function getUserFavs() {
      const response = await api.get(`/users/${user.login}/starred`);

      setFavRepos(response.data);
    }

    getUserFavs();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <FavRepos
        data={favRepos}
        keyExtractor={(favRepo) => String(favRepo.id)}
        renderItem={({ item }) => (
          <Starred>
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
};

export default User;

User.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};
