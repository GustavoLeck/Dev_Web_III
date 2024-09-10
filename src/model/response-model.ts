export class ResponseModel {
  status: boolean;
  code: number;
  message: string;
  data: any;
  constructor(status: boolean, code: number, message: string, data: any) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
