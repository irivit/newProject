/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import authSagas from './Auth';
import userSaga from './User';


export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        userSaga(),

    ]);
}