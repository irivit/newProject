/**
 * Auth Sagas
 */
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {USER_UPDATE, GET_WORKER_BY_ID} from '../actions/types';
import {updateUserFailure, updateUserSuccess} from '../actions';
import {NotificationManager} from 'react-notifications';

import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  GET_WORKERS,
  GET_USER_BY_ID,
} from '../actions/types';
import {
  getUserListFailure,
  getUserListSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  getUserList,
  getWorkersListFailure,
  getWorkersListSuccess,
  getWorkersList,
  getPersonByIdFailure,
  getPersonByIdSuccess,
  getWorkersByIdFailure,
  getWorkersByIdSuccess,
} from '../actions/UserActions';

import userAPI from '../api/UserAPI';

const updateUserRequest = async (id, user) =>
  await userAPI
    .updateUser (id, user)
    .then (authUser => authUser)
    .catch (error => error);

const getUserListRequest = async user =>
  await userAPI
    .getUsers ()
    .then (usersList => usersList)
    .catch (error => error);

const getWorkerListRequest = async user =>
  await userAPI
    .getAllWorkers ()
    .then (workersList => workersList)
    .catch (error => error);

const getPersonByIdRequest = async id =>
  await userAPI.getUser (id).then (person => person).catch (error => error);

const getWorkerByIdRequest = async id =>
  await userAPI.getUser (id).then (person => person).catch (error => error);

/**
 * UPDATE USER
 */
function* updateUserS (payload) {
  const user = payload.payload;
  try {
    const userUpdated = yield call (updateUserRequest, user.Id, user);
    console.log (`user updated ${JSON.stringify (userUpdated)}`);
    if (userUpdated.message) {
      yield put (updateUserFailure (userUpdated.message));
    } else {
      yield put (updateUserSuccess (userUpdated.data));
    }
  } catch (error) {
    yield put (updateUserFailure (error));
  }
}

/**
 * DELETE USER
 */
// function* deleteUserS(data) {
//   const id = data.payload;
//   console.log(`id en la saga${JSON.stringify(data)}`);
//   try {
//     const userDeleted = yield call(deleteUserRequest, id);
//     if (userDeleted.message) {
//       yield put(deleteUserFailure(userDeleted.message));
//     } else {
//       NotificationManager.success(`User deleted successfuly`);
//       yield put(getUserList());
//       yield put(getWorkersList());
//     }
//   } catch (error) {
//     yield put(deleteUserFailure(error));
//   }
// }

/**
 * GET USER LIST
 */
function* getUserListS () {
  try {
    const userList = yield call (getUserListRequest);
    if (userList.message) {
      yield put (getUserListFailure (userList.message));
    } else {
      yield put (getUserListSuccess (userList.data));
    }
  } catch (error) {
    yield put (getUserListFailure (error));
  }
}

/**
 * GET WORKERS LIST
 */
function* getWorkersListS () {
  console.log (`en la saga para buscar los ntrabajadores`);
  try {
    const workerList = yield call (getWorkerListRequest);
    console.log (
      `lo que vira delosn trabajadores ${JSON.stringify (workerList)}`
    );
    if (workerList.message) {
      yield put (getWorkersListFailure (workerList.message));
    } else {
      yield put (getWorkersListSuccess (workerList.data));
    }
  } catch (error) {
    yield put (getWorkersListFailure (error));
  }
}

/**
 * GET USER BY ID
 */
function* getUserByIdS (payload) {
  const id = payload.payload;
  try {
    const user = yield call (getPersonByIdRequest, id);
    if (user.message) {
      yield put (getPersonByIdFailure (user.message));
    } else {
      yield put (getPersonByIdSuccess (user.data));
    }
  } catch (error) {
    yield put (getPersonByIdFailure (error));
  }
}

/**
 * GET WORKER BY ID
 */
function* getWorkerByIdS (payload) {
  console.log(`7777777777777777`,payload)
  const id = payload.payload;
  try {
    const worker = yield call (getWorkerByIdRequest, id);
    console.log(`resultado de buscar el trabajador`, worker);
    if (worker.message) {
      yield put (getWorkersByIdFailure (worker.message));
    } else {
      yield put (getWorkersByIdSuccess (worker.data));
    }
  } catch (error) {
    yield put (getWorkersByIdFailure (error));
  }
}

/**
 * GET USER
 */
export function* updateUserWatcher () {
  yield takeEvery (USER_UPDATE, updateUserS);
}

/**
 * GET USERS LIST
 */
export function* getUserListWatcher () {
  yield takeEvery (GET_USERS, getUserListS);
}

/**
 * GET WORKERS LIST
 */
export function* getWorkersListWatcher () {
  yield takeEvery (GET_WORKERS, getWorkersListS);
}

/**
 * GET WORKER BY ID
 */
export function* getWorkerByIdWatcher () {
  yield takeEvery (GET_WORKER_BY_ID, getWorkerByIdS);
}

/**
 * Create User
 */
// export function* createUsertWatcher() {
//   yield takeEvery(ADD_USER, createUserWithEmailPasswordS);
// }

/**
 * DELETE User
 */
// export function* deleteUsertWatcher() {
//   yield takeEvery(DELETE_USER, deleteUserS);
// }
/**
 * DELETE User
 */
export function* getPersonByIdWatcher () {
  yield takeEvery (GET_USER_BY_ID, getUserByIdS);
}

/**
 * Auth Root Saga
 */
export default function* rootSaga () {
  yield all ([
    fork (updateUserWatcher),
    fork (getUserListWatcher),
    // fork(createUsertWatcher),
    // fork(deleteUsertWatcher),
    fork (getWorkersListWatcher),
    fork (getPersonByIdWatcher),
    fork (getWorkerByIdWatcher),
  ]);
}
