module.exports = Object.freeze({
  TransactionType: {
    PLUS: '+',
    MINUS: '-'
  },
  UserType: {
    ADMIN: 'Admin',
    USER: 'User'
  },
  ERRORS: {
    INVALID_CREDENTIALS: {
      status: 401,
      message: "Invalid credentials"
    }
  }
});
