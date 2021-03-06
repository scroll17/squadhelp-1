import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';

import {
  loginUserSaga,
  createUserSaga,
  getUserSaga,
  userLogoutSaga,
  getAllUserSaga,
  banUserByIdSaga,
} from './userSaga';

import { saveTokenSaga,tokenErrorSaga } from './tokenSaga'


import {
  createContestSaga,
  nextContestStageSaga,
  prevContestStageSaga,
    toContestQueueSaga,
} from './contestSaga'



function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_USER_ACTION, loginUserSaga);
  yield takeLatest(ACTION.CREATE_USER_ACTION, createUserSaga);
  yield takeLatest(ACTION.TOKENS_ACTION_WITH_LOCAL, saveTokenSaga);
  yield takeLatest(ACTION.TOKENS_ERROR, tokenErrorSaga);
  yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
  yield takeLatest(ACTION.USER_LOGOUT, userLogoutSaga);
  yield takeLatest(ACTION.GET_ALL_USERS, getAllUserSaga);
  yield takeLatest(ACTION.BAN_USER_BY_ID, banUserByIdSaga);


  yield takeLatest(ACTION.CREATE_CONTEST_ACTION, createContestSaga);
  yield takeLatest(ACTION.PREV_STAGE_CONTEST, prevContestStageSaga);
  yield takeLatest(ACTION.NEXT_STAGE_CONTEST, nextContestStageSaga);
  yield takeLatest(ACTION.TO_CONTEST_QUEUE, toContestQueueSaga);


}

export default rootSaga;
