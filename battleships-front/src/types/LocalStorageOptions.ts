export interface LocalStorageOptions {
  selector?: (values: any[]) => any;
  rejectSelector?: (values: any[]) => boolean;
  rejectMessage?: string;
  createNewIfNull?: boolean;
}
