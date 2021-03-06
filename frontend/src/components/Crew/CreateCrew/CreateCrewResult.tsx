import { Loading } from '@nextui-org/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSwalerts from '../../../common/hooks/useSwalerts';
import { CreateCrewActions } from '../../../modules/createCrew';
import useCreateCrew from './hooks/useCreateCrew';

interface IProps {
  questionOrder: number;
  createResult: string;
  setCreateResult: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateCrewResult: React.FC<IProps> = ({
  questionOrder,
  createResult,
  setCreateResult,
  loading,
  setLoading,
}) => {
  const dispatch = useDispatch();
  const {
    reduxCreateCrewState: { createCrewFetchStatus },
    QUESTION_COUNT,
    questions,
  } = useCreateCrew();
  const { errorToast } = useSwalerts();

  useEffect(() => {
    if (createCrewFetchStatus === 'Sucecss')
      setCreateResult('π μΆνν©λλ€. μλ‘μ΄ ν¬λ£¨λ₯Ό λ§λ€μμ΅λλ€!');
    if (createCrewFetchStatus === 'Failure') {
      errorToast(
        'ν¬λ£¨ μμ± μ€ν¨',
        'μ€λ₯λ‘ μΈνμ¬ ν¬λ£¨ μμ±μ μ€ν¨νμμ΅λλ€.π°'
      );
      setCreateResult('ν¬λ£¨ μμ±μ μ€ν¨νμμ΅λλ€.');
    }
    if (
      createCrewFetchStatus === 'Sucecss' ||
      createCrewFetchStatus === 'Failure'
    ) {
      setLoading(false);
      dispatch(CreateCrewActions.setCreateCrewStatus(''));
    }
  }, [createCrewFetchStatus]);

  return (
    <>
      {loading && <Loading type="points" size="xlarge" color="#8b8bf5" />}
      {questionOrder === QUESTION_COUNT
        ? createResult
        : questions[questionOrder]}
    </>
  );
};

export default CreateCrewResult;
