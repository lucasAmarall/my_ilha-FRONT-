import APIService from '../APIService';

class UserService {
  signIn(user: { email: string; password: string }) {
    return APIService.post('/user/signin', user);
  }

  signUp(user: { email: string; password: string }) {
    return APIService.post('/user/signup', user);
  }
}

export default new UserService();
