import { ResultTypes } from '../../enums/ResultTypes';

export interface IUserResult {
  type: ResultTypes,
  name: string,
  avatar: string,
  profileUrl: string,
};
