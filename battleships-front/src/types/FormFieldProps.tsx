export interface FormFieldProps {
  name: string;
  label: string;
  component: React.ReactNode;
  validate?: (value: any) => string | undefined
  [key: string]: any;
}
