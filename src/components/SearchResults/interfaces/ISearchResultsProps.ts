import { ResultTypes } from '../../enums/ResultTypes';

export interface ISearchResultsProps {
  setRemainingRequests: Function,
  text: string,
  type: ResultTypes,
};
