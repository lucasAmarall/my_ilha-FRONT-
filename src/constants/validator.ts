import _validator from 'validator';

const validator = {
  isStrongPassword: (password = '') => /(.*[A-Z].*)/.test(password),
  isEmail: (email: string) => _validator.isEmail(email),
  isCode: (code: string) => code.length === 6,
};

export { validator };
