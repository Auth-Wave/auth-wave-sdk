import { AuthService } from "../auth/auth.service";

export class AuthServiceTest {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public testCreateAccount = async (data:any) => {
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
}
