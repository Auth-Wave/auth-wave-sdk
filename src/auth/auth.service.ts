import axios from "axios";
import { AUTHWAVE_API_BASE_URL } from "../constant";

const cookies =
  "user-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNzM2Nzk3LCJleHAiOjE3MzE4MjMxOTd9.7UP8OTkvwWaJIcTS87ktBDmDYGR7fu-t7N1YxEGD49U; user-refresh-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNzM2Nzk3LCJleHAiOjE3MzQzMjg3OTd9.gdUpoB72WEvUHsuAyehLHfyz-xcvZZgzcloUte85esw";

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

  // TESTING REMAINING
  public deleteAccount = async () => {
    try {
      const response = await axios.delete(`${this.baseUrl}/user/delete`, {
        headers: {
          "project-id": this.projectId,
          "project-key": this.projectKey,
          // Remove these later in production (ONLY FOR TESTING)
          Cookie: cookies,
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
          Cookie: cookies,
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

  public otpLogin = {
    init: async () => {
      // Functionality to be implemented later
    },
    complete: async () => {
      // Functionality to be implemented later
    },
  };

  public magicURLLogin = {
    init: async () => {
      // Functionality to be implemented later
    },
    complete: async () => {
      // Functionality to be implemented later
    },
  };

  public refreshAccessToken = async () => {
    try {
      const response = await axios.post(
        `${this.baseUrl}/user/access-token/refresh`,
        {},
        {
          headers: {
            "project-id": this.projectId,
            "project-key": this.projectKey,
            // Remove this later in production (ONLY FOR TESTING)
            Cookie: cookies,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public logout = async () => {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/user/auth/session/delete`,
        {
          headers: {
            "project-id": this.projectId,
            "project-key": this.projectKey,
            // Remove these later in production (ONLY FOR TESTING)
            Cookie: cookies,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public deleteSessionById = async (sessionId: string) => {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/user/auth/session/delete/${sessionId}`,
        {
          headers: {
            "project-id": this.projectId,
            "project-key": this.projectKey,
            // Remove this later in production (ONLY FOR TESTING)
            Cookie: cookies,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public getAllSessions = async () => {
    try {
      const response = await axios.get(`${this.baseUrl}/user/sessions`, {
        headers: {
          "project-id": this.projectId,
          "project-key": this.projectKey,
          // Remove this later in production (ONLY FOR TESTING)
          Cookie: cookies,
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public deleteAllSessions = async () => {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/user/sessions/delete`,
        {
          headers: {
            "project-id": this.projectId,
            "project-key": this.projectKey,
            // Remove this later in production (ONLY FOR TESTING)
            Cookie: cookies,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  };

  public accountVerification = {
    init: async () => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/verify?initiate=true`,
          {},
          {
            headers: {
              "project-id": this.projectId,
              "project-key": this.projectKey,
              // Remove this later in production (ONLY FOR TESTING)
              Cookie: cookies,
            },
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error: any) {
        throw error;
      }
    },
    complete: async (token: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/verify?verificationToken=${token}`,
          {},
          {
            headers: {
              "project-id": this.projectId,
              "project-key": this.projectKey,
              // Remove this later in production (ONLY FOR TESTING)
              Cookie: cookies,
            },
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error: any) {
        throw error;
      }
    },
  };

  public resetPassword = {
    init: async () => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/reset-password?initiate=true`,
          {},
          {
            headers: {
              "project-id": this.projectId,
              "project-key": this.projectKey,
              // Remove this later in production (ONLY FOR TESTING)
              Cookie: cookies,
            },
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error: any) {
        throw error;
      }
    },
    complete: async (token: string, newPassword: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/reset-password?resetPasswordToken=${token}`,
          { newPassword },
          {
            headers: {
              "project-id": this.projectId,
              "project-key": this.projectKey,
              // Remove this later in production (ONLY FOR TESTING)
              Cookie: cookies,
            },
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error: any) {
        throw error;
      }
    },
  };
}
