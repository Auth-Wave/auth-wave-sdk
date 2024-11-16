import axios from "axios";
import { AUTHWAVE_API_BASE_URL } from "../constant";

export const cookies =
  "user-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJ1c2VySWQiOiI2NzM4Y2JjY2RmOWUxNTMyNDY3YWM4NzAiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3MzE3NzU1MzEsImV4cCI6MTczMTg2MTkzMX0.FPkZtLtGqxdMGwOVaocJlYooWCBzdIhF9J0Mx9SgSPI; user-refresh-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJ1c2VySWQiOiI2NzM4Y2JjY2RmOWUxNTMyNDY3YWM4NzAiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3MzE3NzU1MzEsImV4cCI6MTczMTg2MTkzMX0.FPkZtLtGqxdMGwOVaocJlYooWCBzdIhF9J0Mx9SgSPI";

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

  /* -----------------------------SECURITY LOG METHODS---------------------------------------- */

  public getAllUserLogs = async ({
    page,
    itemLimit,
    startDate,
    endDate,
  }: {
    page?: number;
    itemLimit?: number;
    startDate?: Date;
    endDate?: Date;
  }) => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/user/logs/all?page=${page}&itemLimit=${itemLimit}&startDate=${startDate}&endDate=${endDate}`,
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

  public getUserLogsByEventCode = async ({
    page,
    itemLimit,
    startDate,
    endDate,
    eventCode,
  }: {
    page?: number;
    itemLimit?: number;
    startDate?: Date;
    endDate?: Date;
    eventCode: string;
  }) => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/user/logs?page=${page}&itemLimit=${itemLimit}&startDate=${startDate}&endDate=${endDate}&eventCode=${eventCode}`,
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
}
