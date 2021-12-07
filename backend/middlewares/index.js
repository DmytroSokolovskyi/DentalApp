module.exports = {
    authMiddleware: require('./auth.middleware'),
    doctorMiddleware: require('./doctor.middleware'),
    mainMiddleware: require('./main.middleware'),
    errorMiddleware: require('./error.middleware')
};
