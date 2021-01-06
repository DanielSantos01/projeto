import styled from 'styled-components/native';

export const ListContainer = styled.View`
  height: 200px;
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
  font-size: 15px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 7px;
  border-radius: 5px;
`;
