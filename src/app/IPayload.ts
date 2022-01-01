import { ResultTypes } from '../components/enums/ResultTypes';
import { IRepoResult } from '../components/RepoSearchResult/interfaces/IRepoResult';
import { IUserResult } from '../components/UserSearchResult/interfaces/IUserResult';

export interface IPayload {
  type: ResultTypes,
  text: string,
  results: IUserResult[] | IRepoResult[],
};
