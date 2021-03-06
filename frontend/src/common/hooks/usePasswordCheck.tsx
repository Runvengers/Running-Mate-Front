import { useCallback, useState } from 'react';
import { debounce, isEqual } from 'lodash';
import { FormElement } from '@nextui-org/react/esm/input/input-props';

const usePasswordCheck = () => {
  const [confirmPassword, setConfirmPassword] = useState(
    '비밀먼호 형식은 8자리 이상, 영어와 숫자, 특수기호(~!@#$%^&*)를 섞은 문자입니다.'
  );
  const [samePassword, setSamePassword] = useState('');
  const [safePassword, setSafePassword] = useState(false);

  const changePassword = useCallback(
    debounce((e: React.ChangeEvent<FormElement>, dispatch?: () => void) => {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

      if (passwordRegex.test(e.target.value)) {
        setConfirmPassword('안전한 비밀번호입니다.');
        setSafePassword(true);
      }
      if (!passwordRegex.test(e.target.value)) {
        setConfirmPassword(
          '비밀먼호 형식은 8자리 이상, 영어와 숫자, 특수기호(~!@#$%^&*)를 섞은 문자입니다.'
        );
        setSafePassword(false);
      }
      if (dispatch) dispatch();
    }, 500),
    [confirmPassword, safePassword]
  );

  const changeChekcPassword = useCallback(
    debounce(
      (
        e: React.ChangeEvent<FormElement>,
        passwordTarget: string,
        dispatch?: () => void
      ) => {
        if (isEqual(passwordTarget, e.target.value)) {
          setSamePassword('같은 비밀번호입니다.');
        }
        if (!isEqual(passwordTarget, e.target.value)) {
          setSamePassword('비밀번호가 다릅니다.');
        }
        if (dispatch) dispatch();
      },
      500
    ),
    [samePassword]
  );

  const isSafedAndPasswordSame = useCallback(
    (target1, target2) => {
      if (safePassword && isEqual(target1, target2)) return true;
      return false;
    },
    [safePassword]
  );

  return {
    getConfirmPasswordState: () => confirmPassword,
    getSamePasswordState: () => samePassword,
    getSafePasswordState: () => safePassword,
    changeChekcPassword,
    changePassword,
    isSafedAndPasswordSame,
  };
};

export default usePasswordCheck;
