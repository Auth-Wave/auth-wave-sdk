import axios from "axios";
import { AUTHWAVE_API_BASE_URL } from "../constant";

const cookies =
  "user-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNzc1MzYwLCJleHAiOjE3MzE4NjE3NjB9.mTPbcKHAagZurqIhplz3IDum71IDqjxd8dII3vkOBYM; user-refresh-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MDEwN2FkMDI4M2M0ZmZjNGY4ZGEiLCJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMxNzc1MzYwLCJleHAiOjE3MzQzNjczNjB9.PHvZ7qccrxWKdgweBDrhQ3wOjRI7vCCyIlyyjirt0W8";

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
    init: async (email: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/auth/otp-on-email?initiate=true`,
          { email },
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
    },
    complete: async (email: string, token: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/auth/otp-on-email?otpToken=${token}`,
          { email },
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
    },
  };

  public magicURLLogin = {
    init: async (email: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/auth/magic-url?initiate=true`,
          { email },
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
    },
    complete: async (email: string, token: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/auth/magic-url?magicURLToken=${token}`,
          { email },
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
