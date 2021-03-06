import { all } from '@redux-saga/core/effects';
import watchSignIn from './signInSaga';
import watchSignUp from './signUpSaga';
import watchCreateCrew from './createCrewSaga';
import watchDeleteCrew from './deleteCrewSaga';
import watchSignUpRequestCrew from './signUpRequestCrewSaga';
import watchFriend from './friendSaga';
import watchLeaveCrew from './leaveCrewSaga';
import watchDeligateCrewLeader from './deligateCrewLeaderSaga';
import watchPermitCrewRequest from './permitCrewRequsetSaga';
import watchCloseBoard from './closeBoardSaga';
import watchLogOut from './logOutSaga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchCreateCrew(),
    watchDeleteCrew(),
    watchSignUpRequestCrew(),
    watchFriend(),
    watchLeaveCrew(),
    watchDeligateCrewLeader(),
    watchPermitCrewRequest(),
    watchCloseBoard(),
    watchLogOut(),
  ]);
}
