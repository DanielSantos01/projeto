import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, TextContent } from './styles';

const Loading: React.FC = () => (
  <Container>
    <TextContent>Carregando...</TextContent>
    <ActivityIndicator size={30} color="rgba(0, 0, 0, .5)" />
  </Container>
);

export default Loading;
