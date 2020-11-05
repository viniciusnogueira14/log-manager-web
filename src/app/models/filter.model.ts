export class Filter {
  public ipAddress: string;
  public logDate: string;
  public datePeriod: string;
  public userAgent: string;

  constructor(obj: any) {
    this.ipAddress = obj && obj.ipAddress || null;
    this.logDate = obj && obj.logDate || null;
    this.datePeriod = obj && obj.datePeriod || null;
    this.userAgent = obj && obj.userAgent || null;
  }
}
