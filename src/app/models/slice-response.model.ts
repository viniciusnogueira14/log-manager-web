import { LogEntry } from './log-entry.model';

export class SliceResponse {
  public content: LogEntry[];
  public totalPages: number;
  public totalElements: number;
  public last: boolean;
  public numberOfElements: number;
  public first: boolean;
  public size: number;
  public number: number;
  public empty: boolean;

  constructor(obj?: any) {
    this.content = obj && LogEntry.getList(obj.content) || null;
    this.totalPages = obj && obj.totalPages || null;
    this.totalElements = obj && obj.totalElements || null;
    this.last = obj && obj.last || null;
    this.numberOfElements = obj && obj.numberOfElements || null;
    this.first = obj && obj.first || null;
    this.size = obj && obj.size || null;
    this.number = obj && obj.number || null;
    this.empty = obj && obj.empty || null;
  }
}
