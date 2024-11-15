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
    } catch (error: any) {
      throw error;
    }
  };

  public deleteAccount = async () => {
    try {
      const response = await axios.delete(`${this.baseUrl}/user/delete`, {
        headers: {
          "project-id": this.projectId,
          "project-key": this.projectKey,
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public getCurrentUser = async () => {
    try {
      const response = await axios.get(`${this.baseUrl}/user/`, {
        headers: {
          "project-id": this.projectId,
          "project-key": this.projectKey,
          // Remove these later in production (ONLY FOR TESTING)
          Cookie:
            "user-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNjY1OTgzLCJleHAiOjE3MzE3NTIzODN9.DmlwA1bjx90TSf79HKRAOdkvCz_NlO6cKIDwXsREeEw; user-refresh-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNjY1OTgzLCJleHAiOjE3MzQyNTc5ODN9.QouIzbF1_h51E4GtLRWW4ubTQLow8c6oasIr2nVV42Y",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public passwordLogin = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await axios.post(
        `${this.baseUrl}/user/auth/session/create`,
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
    } catch (error: any) {
      throw error;
    }
  };

  public otpLogin = async () => {};

  public magicURLLogin = async () => {};

  public refreshAccessToken = async () => {};

  public logout = async () => {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/user/auth/session/delete`,
        {
          headers: {
            "project-id": this.projectId,
            "project-key": this.projectKey,
            // Remove these later in production (ONLY FOR TESTING)
            Cookie:
              "user-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNjY1OTgzLCJleHAiOjE3MzE3NTIzODN9.DmlwA1bjx90TSf79HKRAOdkvCz_NlO6cKIDwXsREeEw; user-refresh-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNjY1OTgzLCJleHAiOjE3MzQyNTc5ODN9.QouIzbF1_h51E4GtLRWW4ubTQLow8c6oasIr2nVV42Y",
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public deleteSessionById = async () => {};

  public getAllSessions = async () => {};

  public deleteAllSessions = async () => {};

  public verifyAccount = async () => {};

  public resetPassword = async () => {};
}
