import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
`;

export const ViewMap = styled(MapView)`
  width: 100%;
  height: 50%;
`;