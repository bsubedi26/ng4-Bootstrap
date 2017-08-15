interface IAuthState {
  isLoggedIn: boolean;
  accessToken: string;
  error: Object;
}

export default IAuthState;