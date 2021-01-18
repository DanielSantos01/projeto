import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, TextContent, Logo } from './styles';

const Loading: React.FC = () => (
  <Container>
    <Logo source={require('../../assets/logo.png')} />
    <TextContent>Carregando...</TextContent>
    <ActivityIndicator size={30} color="rgba(0, 0, 0, .5)" />
  </Container>
);

export default Loading;
