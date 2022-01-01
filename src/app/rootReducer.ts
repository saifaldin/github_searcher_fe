import { PayloadAction } from '@reduxjs/toolkit';
import { IPayload } from './IPayload';

const initialState = {
  repositories: {},
  users: {},
};

export const rootReducer = (state: any = initialState, action: PayloadAction<IPayload>) => {
  if (action.type === 'CACHE') {
    const { type, results, text } = action.payload;
    state[type][text] = results;
    return state;
  }
  return state;
};
