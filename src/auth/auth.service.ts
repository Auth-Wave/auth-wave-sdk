import axios from "axios";
import { AUTHWAVE_API_BASE_URL } from "../constant";

export class AuthService {
  private readonly projectId: string;
  private readonly projectKey: string;
  private readonly baseUrl: string;

  constructor(projectId: string, projectKey: string) {
    this.projectId = projectId;
    this.projectKey = projectKey;
    this.baseUrl = AUTHWAVE_API_BASE_URL;
  }

  public createAccount = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await axios.post(
        `${this.baseUrl}/user/create`,
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "project-id": this.projectId,
            "project-key": this.projectKey,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error:any) {
      throw error;
    }
  };

  public deleteAccount = async () => {};

  public getCurrentUser = async () => {};

  public passwordLogin = async () => {};

  public otpLogin = async () => {};

  public magicURLLogin = async () => {};

  public refreshAccessToken = async () => {};

  public logout = async () => {};

  public deleteSessionById = async () => {};

  public getAllSessions = async () => {};

  public deleteAllSessions = async () => {};

  public verifyAccount = async () => {};

  public resetPassword = async () => {};
}
