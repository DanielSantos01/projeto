import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ListContainer = styled.View`
  height: 40%;
`;

export const List = styled.FlatList`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const EmptyContainer = styled.View`
  background-color: transparent;
`;

export const EmptyText = styled.Text`
  text-align: left;
  margin-top: 25%;
  font-size: 15px;
  color: black;
  opacity: 0.3;
  align-self: center;
  padding: 7px;
  border-radius: 5px;
`;

export const Icon = styled(Ionicons)`
  color: black;
  opacity: 0.3;
  font-size: 35px;
  font-weight: bold;
  align-self: center;
`;
