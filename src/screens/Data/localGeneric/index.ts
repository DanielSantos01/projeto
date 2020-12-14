export interface DataProps {
  route: RouteType;
}

export interface MainProps {
  latitude: number;
  longitude: number;
  info: InfoType;
}

export type InfoType = {
  name: string;
  temp: string;
  humidity: string;
  desc: string;
  icon: string;
};

type RouteType = {
  params: ParamsType;
};

type ParamsType = {
  latitude: number;
  longitude: number;
};
