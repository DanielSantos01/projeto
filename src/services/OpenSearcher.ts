/* eslint-disable no-unused-vars */
import HandleNavigation from './HandleNavigation';

type OpenSearcherProps = {
  setUpdated: (updatedAt: number) => void;
}

export const openSearcher = (props: OpenSearcherProps) => {
  HandleNavigation.navigate('Search', { setUpdated: props.setUpdated });
};
