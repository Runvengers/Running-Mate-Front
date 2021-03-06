export interface ISignUp {
  email: string;
  nickname: string;
  password: string;
  checkPassword: string;
  address: string;
  signUpFetchState: '' | 'Fetch' | 'Success' | 'Error';
  success: {
    id: number;
  };
}

export interface ISignUpForm {
  email: string;
  nickName: string;
  password: string;
  address: string;
}
