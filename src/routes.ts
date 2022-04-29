import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/createTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import {ensureAuthenticated} from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveController = new ListUserReceiveComplimentsController();
const listUserSendController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post('/users',createUserController.handle)
router.post('/tags',ensureAuthenticated,ensureAdmin,createTagController.handle)
router.post('/login',authenticateUserController.handle)
router.post('/compliment',ensureAuthenticated,ensureAdmin,createComplimentController.handle)
router.get('/users/elogio/send',ensureAuthenticated,ensureAdmin,listUserReceiveController.handle)
router.get('/users/elogio/receive',ensureAuthenticated,ensureAdmin,listUserSendController.handle)
router.get('/tags/list',ensureAuthenticated,ensureAdmin,listTagsController.handle)
router.get('/users/list',ensureAuthenticated,ensureAdmin,listUsersController.handle)

export { router }