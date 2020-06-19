import { HttpErrorResponse } from '@angular/common/http';
import { ApiError } from '../interfaces/api-error';

export const extractError = (resError: HttpErrorResponse): ApiError[] => {
  let errors = [{ message: 'something went wrong' }];
  if (resError && resError.error && resError.error.errors) {
    errors = resError.error.errors;
  }

  return errors;
};
