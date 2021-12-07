const DB_USER = process.env.MONGO_INITDB_ROOT_USERNAME;
const DB_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const DB_NAME = process.env.MONGO_INITDB_DATABASE;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',

    MONGO_URL: 'mongodb://localhost:27017/Stomatology' || `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    PORT: process.env.PORT || 5000,
    HOST: process.env.HOST || '0.0.0.0',

    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'app_stomatology',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'app_stomatology_refresh',
    JWT_ACTION_FORGOT_SECRET: process.env.JWT_FORGOT_SECRET || 'app_stomatology_action_forgot',
    JWT_ACTION_ACTIVATE_SECRET: process.env.JWT_ACTION_ACTIVATE_SECRET || 'app_stomatology_action_activate',

    EMAIL_LOGIN: process.env.EMAIL_LOGIN,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,

    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASS: process.env.ADMIN_PASS,
    ADMIN_NUMBER: process.env.ADMIN_NUMBER,

    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
    ACTIVATE_URL: process.env.ACTIVATE_URL || 'http://localhost:5000/auth/activate',

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',

    AWS_S3_REGION: process.env.AWS_S3_REGION,
    AWS_S3_NAME: process.env.AWS_S3_NAME,
    AWS_S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY,
    AWS_S3_SECRET_KEY: process.env.AWS_S3_SECRET_KEY,
};
