export const required = (value?: string) => {
  let error: string | undefined;

  if (!value || value.length === 0)
    error = 'This field is required';
    
  return error;
};

export const minLength = (minLenght: number) => (value?: string) => {
  let error = required(value);

  if (error)
    return error;

  if (!value || value.length < minLenght)
    error = `Must be at least ${minLenght} letters long`;

  return error;
};

export const atLeast3 = minLength(3);
export const atLeast5 = minLength(5);
