import yupErrorUtils from './yupErrorUtils';

const yupError = {
  value: {
    email: '',
    password: '',
  },
  errors: [
    'Email is required',
    'Password is required',
    'Password must be at least 8 characters',
  ],
  inner: [
    {
      value: '',
      path: 'email',
      type: 'required',
      errors: ['Email is required'],
      params: {
        value: '',
        originalValue: '',
        path: 'email',
      },
      inner: [],
      name: 'ValidationError',
      message: 'Email is required',
      line: 183101,
      column: 28,
      sourceURL:
        'http://192.168.0.102:19000/node_modules/expo/AppEntry.bundle?platform=android&dev=true&hot=false&strict=false&minify=false',
    },
    {
      value: '',
      path: 'password',
      type: 'required',
      errors: ['Password is required'],
      params: {
        value: '',
        originalValue: '',
        path: 'password',
      },
      inner: [],
      name: 'ValidationError',
      message: 'Password is required',
      line: 183101,
      column: 28,
      sourceURL:
        'http://192.168.0.102:19000/node_modules/expo/AppEntry.bundle?platform=android&dev=true&hot=false&strict=false&minify=false',
    },
    {
      value: '',
      path: 'password',
      type: 'min',
      errors: ['Password must be at least 8 characters'],
      params: {
        value: '',
        originalValue: '',
        path: 'password',
        min: 8,
      },
      inner: [],
      name: 'ValidationError',
      message: 'Password must be at least 8 characters',
      line: 183101,
      column: 28,
      sourceURL:
        'http://192.168.0.102:19000/node_modules/expo/AppEntry.bundle?platform=android&dev=true&hot=false&strict=false&minify=false',
    },
  ],
  name: 'ValidationError',
  message: '3 errors occurred',
  line: 183101,
  column: 28,
  sourceURL:
    'http://192.168.0.102:19000/node_modules/expo/AppEntry.bundle?platform=android&dev=true&hot=false&strict=false&minify=false',
};

describe('yupErrorUtils', () => {
  it('should return error with fields', () => {
    const response = yupErrorUtils.buildError(yupError);

    expect(response).toBeDefined();
    expect(response).toEqual([
      { field: 'email', message: ['Email is required'] },
      {
        field: 'password',
        message: [
          'Password is required',
          'Password must be at least 8 characters',
        ],
      },
    ]);
  });

  it('should return field error if filed is present in errors', () => {
    const yupErrors = yupErrorUtils.buildError(yupError);

    const response = yupErrorUtils.returnFieldErrors('email', yupErrors);

    expect(response).toBeDefined();
    expect(response).toBe('Email is required');
  });

  it('should return undefined if filed is not present in errors', () => {
    const yupErrors = yupErrorUtils.buildError(yupError);

    const response = yupErrorUtils.returnFieldErrors('unknown', yupErrors);

    expect(response).not.toBeDefined();
  });
});
