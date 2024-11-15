export class SecurityLogService {
  private readonly projectId: string;   
  private readonly projectKey: string;

  constructor(projectId: string, projectKey: string) {
    this.projectId = projectId;
    this.projectKey = projectKey;
  }

  public getAllUserLogs=async()=>{}

  public getUserLogsByEventCode = async () => {};
}
