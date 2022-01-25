require('dotenv').config({ path: '.env' });

class AppEnv {
  static get PORT() {
    return process.env.PORT || 3001;
  }

  static get RELATIONAL_DATABASE() {
    return process.env.RELATIONAL_DATABASE || 'sqlite';
  }
}

module.exports = AppEnv;