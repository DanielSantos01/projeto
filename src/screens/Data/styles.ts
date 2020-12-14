import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1;
`;

export const WeatherIconContainer = styled.View`
    align-items: center;
`;

export const LocalName = styled.Text`
    color: rgba(0, 120, 255, .65);
    margin-top: 30px;
    font-size: 30px;
`;

export const WeatherIcon = styled.Image`
    width: 120px;
    height: 120px;
    margin-bottom: 3%;
`;

export const WeatherInfoContainer = styled.View`
    padding: 12px;
`;

export const Info = styled.Text`
    color: rgba(0, 120, 255, .65);
    font-size: 20px;
`;

export const DirectionerContainer = styled.View`
    margin-top: 4%;
    background-color: rgba(0, 120, 255, .5);
    align-items: center;
`;

export const DirectionerText = styled.Text`
    color: white;
    font-size: 17px;
`;

export const Map = styled(MapView)`
    width: 100%;
    height: 30%;
`;
