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
    init: async (email: string, baseLink: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/auth/magic-url?initiate=true`,
          { email, baseLink },
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
    init: async (baseLink: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/verify?initiate=true`,
          { baseLink },
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
    complete: async (token: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/verify?verificationToken=${token}`,
          {},
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

  public resetPassword = {
    init: async (baseLink: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/reset-password?initiate=true`,
          { baseLink },
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
    complete: async (token: string, newPassword: string) => {
      try {
        const response = await axios.post(
          `${this.baseUrl}/user/reset-password?resetPasswordToken=${token}`,
          { newPassword },
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
