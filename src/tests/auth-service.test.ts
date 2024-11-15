import { AuthService } from "../auth/auth.service";

export class AuthServiceTest {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public testCreateAccount = async (data: any) => {
    try {
      const response = await this.authService.createAccount(
        data.username,
        data.email,
        data.password
      );
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testPasswordLogin = async (data: any) => {
    try {
      const response = await this.authService.passwordLogin(
        data.username,
        data.email,
        data.password
      );
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testGetCurrentUser = async () => {
    try {
      const response = await this.authService.getCurrentUser();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testLogout = async () => {
    try {
      const response = await this.authService.logout();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };
}
