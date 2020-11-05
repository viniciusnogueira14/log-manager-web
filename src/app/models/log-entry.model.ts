export class LogEntry {

  public code: number;
  public logDate: string;
  public ipAddress: string;
  public request: string;
  public logStatus: number;
  public userAgent: string;

  constructor(obj?: any) {
    this.code = obj && obj.code || null;
    this.logDate = obj && obj.logDate || null;
    this.ipAddress = obj && obj.ipAddress || null;
    this.request = obj && obj.request || null;
    this.logStatus = obj && obj.logStatus || null;
    this.userAgent = obj && obj.userAgent || null;
  }

}
