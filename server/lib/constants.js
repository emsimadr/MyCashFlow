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
    TOKEN_EXPIRED: {
      status: 400,
      message: "Token expired."
    },
    INVALID_CREDENTIALS: {
      status: 401,
      message: "Invalid credentials."
    },
    INVALID_USER: {
      status: 401,
      message: "Invalid user."
    },
    INVALID_TOKEN_KEY: {
      status: 401,
      message: "Invalid token or key."
    },
    UNAUTHORIZED_USER: {
      status: 403,
      message: "Not authorized."
    },
    SYSTEM_ERROR: {
      status: 500,
      message: "Ooops something went wrong."
    }
  }
});
