import { call, takeLatest, put } from '@redux-saga/core/effects';
import { SignInActions } from '../signIn';
import { crewActions } from '../crew';
import CrewService from '../../lib/api/crewService';
import { refreshUserDataAndRefreshLocalStorage } from './createCrewSaga';

function* deleteCrewSaga({
  payload,
}: ReturnType<typeof crewActions.deleteCrew>) {
  try {
    const { message } = yield call(
      new CrewService().deleteCrew,
      payload.crewName
    );
    if (message === '삭제 완료') {
      yield put(crewActions.sucessCrewRequest());
      const { email, crewName, nickName, address, id, crewLeader } = yield call(
        refreshUserDataAndRefreshLocalStorage,
        payload.token
      );
      yield put(
        SignInActions.signInSuccess({
          email,
          crewName,
          nickName,
          address,
          id,
          crewLeader,
        })
      );
    }
  } catch {
    yield put(crewActions.failureCrewRequest());
  }
}

export default function* watchDeleteCrew() {
  yield takeLatest('crew/deleteCrew', deleteCrewSaga);
}
