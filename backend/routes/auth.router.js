const {mainMiddleware, authMiddleware} = require('../middlewares');
const {authValidator} = require('../validators');
const {O_Auth, ActionToken, Users} = require('../dataBase');
const {tokenEnum, actionTokenTypeEnum} = require('../configs');
const {authController} = require('../controllers');
const authRouter = require('express').Router();

authRouter.post(
    '/login',
    mainMiddleware.validateBody(authValidator.loginValidator),
    authMiddleware.userAuth,
    authController.login
);
authRouter.get(
    '/logout',
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    authController.logout
);
authRouter.get(
    '/logoutall',
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    authController.logoutAll
);
authRouter.get(
    '/refresh',
    authMiddleware.checkToken(O_Auth, tokenEnum.REFRESH),
    authController.changeRefresh
);
authRouter.put(
    '/password',
    mainMiddleware.validateBody(authValidator.changePasswordValidator),
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    authController.changePass
);
authRouter.get(
    '/activate/:token',
    authMiddleware.checkToken(ActionToken, actionTokenTypeEnum.ACTIVATE_ACCOUNT),
    authController.activateAccount
);
authRouter.post(
    '/password/forgot',
    mainMiddleware.validateBody(authValidator.emailValidator),
    mainMiddleware.findAndCheckOne(Users,'email', false),
    authController.forgotPass
);
authRouter.put(
    '/password/forgot',
    mainMiddleware.validateBody(authValidator.passwordValidator),
    authMiddleware.checkToken(ActionToken, actionTokenTypeEnum.FORGOT_PASSWORD),
    authController.setNewPass
);

module.exports = authRouter;

