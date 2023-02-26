/*
 *
 * AddSignedDocument actions
 *
 */

import { MERGE_DATA } from './constants';

export function mergeData(data) {
  console.log("data")
  return {
    type: MERGE_DATA,
    data
  }
}

// action login
export function login(data) {
  return {
    type: MERGE_DATA,
    data
  }
}
export function loginSuccess(data) {
  return {
    type: MERGE_DATA,
    data
  }
}
export function loginFalse(data) {
  return {
    type: MERGE_DATA,
    data
  }
}
