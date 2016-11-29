/**
 * Actions
 */

import * as types from './actions';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=teacher2';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}posts${API_KEY}`);
  
  return {
    type: types.FETCH_POSTS,
    payload: request
  }
}
