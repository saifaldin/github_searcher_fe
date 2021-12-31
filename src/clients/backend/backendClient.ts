import axios from 'axios';
import { ResultTypes } from '../../components/enums/ResultTypes';

const BACKEND_CLIENT = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const search = (type: ResultTypes, text: string) => BACKEND_CLIENT.get('search', {
  params: {
    type,
    text,
  }
});

export default {
  search,
};
