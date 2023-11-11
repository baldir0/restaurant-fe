export interface MyFormProps<T> {
  onSubmit: (values: T) => void | Promise<void>;
}