import { ResultTypes } from '../../enums/ResultTypes';
import { IUserResult } from '../../UserSearchResult/interfaces/IUserResult';

export interface IRepoResult {
  type: ResultTypes,
  userDetails: IUserResult
  name: string,
  stars: number,
  repoUrl: string,
};
