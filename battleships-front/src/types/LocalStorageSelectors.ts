export interface LocalStorageSelectors {
  selector?: (values: any[]) => any;
  rejectSelector?: (values: any[]) => boolean;
  rejectMessage?: string;
}
