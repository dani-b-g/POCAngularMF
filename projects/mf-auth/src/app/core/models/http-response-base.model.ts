export default interface AppHttpResponseBase<T> {
  status: string;
  errors: any;
  data: T;
}
