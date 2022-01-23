import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '@nextui-org/react';
import Swal from 'sweetalert2';
import { useSelector } from '../../../modules';
import CrewService from '../../../lib/api/crewService';

// import useLocalStroeageData from '../../../hooks/useLocalStorageData';

const Management = () => {
  const history = useHistory();
  const crewName = useSelector((state) => state.crew.crewName);
  const [newCrewName, setnewCrewName] = useState('');

  //* 이부분도 토큰 필요한지 알아보기
  // const { getToken } = useLocalStroeageData();

  const chnageCrewInformation = async () => {
    try {
      //* 이부분도 토큰 필요한지 알아보기
      const { message } = await new CrewService().changeNewCrewName(
        crewName,
        newCrewName
      );
      await Swal.fire({
        title: message,
        icon: 'success',
        confirmButtonText: '크루 정보페이지로 돌아가기.',
      });
      history.push(`/crewList/${newCrewName}`);
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: '정보 변경에 실패하였습니다.',
        icon: 'error',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <div className="mx-auto my-0 w-500 py-10 flex flex-wrap space-y-10 justify-center">
      <div className="w-300 md:w-full flex flex-col">
        <Input
          size="large"
          color="secondary"
          bordered
          clearable
          defaultValue={crewName}
          value={newCrewName}
          onChange={(e) => setnewCrewName(e.target.value)}
          labelPlaceholder="크루명"
        />
      </div>
      <div className="w-300 md:w-full flex flex-col">
        <Input
          width="100%"
          color="secondary"
          bordered
          clearable
          labelPlaceholder="오픈채팅방 URL"
          value="아직 미완성 작업중 🚧"
          disabled
        />
      </div>
      <div className="flex-none space-y-3">
        <span>크루 이미지</span>
        <label
          htmlFor="crew-image"
          className="w-64 flex flex-col items-center px-4 py-3 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple ease-linear transition-all duration-150"
        >
          이미지 변경
          <input
            id="crew-image"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>
      <div className="w-300 md:w-500 flex flex-col">
        <Button
          rounded
          size="large"
          color="secondary"
          onClick={chnageCrewInformation}
        >
          변경
        </Button>
      </div>
    </div>
  );
};

export default Management;
