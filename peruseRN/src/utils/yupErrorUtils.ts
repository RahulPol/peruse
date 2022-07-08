import { each, groupBy, keys } from 'lodash';
import * as yup from 'yup';

//const { each } = Aigle;

export type YupError = {
  field: string;
  message: string[];
};

const yupErrorUtils = {
  buildError(error: yup.ValidationError) {
    const errors: YupError[] = [];

    const fieldErrors = groupBy(error.inner, 'path');
    const fields = keys(fieldErrors);

    each(fields, (field) => {
      const errorsHolder: string[] = [];

      each(fieldErrors[field], (fieldError) => {
        errorsHolder.push(fieldError.errors[0]);
      });

      errors.push({
        field,
        message: errorsHolder,
      });
    });

    return errors;
  },
  returnFieldErrors(field: string, errors: YupError[] | undefined) {
    if (errors) {
      const message = errors.find((err) => err.field === field)?.message;
      if (message) {
        return message[0];
      }
      return undefined;
    }
  },
};

export default yupErrorUtils;
