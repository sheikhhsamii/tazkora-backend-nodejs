import { Router } from "express";
import {
  changeCurrentPassword,
  currentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { apiRoutes } from "../apiRoutes.js";
import { USER_FIELDS } from "../constants.js";

const router = Router();

router.route(apiRoutes.USER.REGISTER).post(
  upload.fields([
    {
      name: USER_FIELDS.AVATAR,
      maxCount: 1,
    },
    {
      name: USER_FIELDS.COVER_IMAGE,
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route(apiRoutes.USER.LOGIN).post(upload.none(), loginUser);

//PROTECTED ROUTES
router
  .route(apiRoutes.USER.CHANGE_PASSWORD)
  .post(verifyJWT, changeCurrentPassword);
router
  .route(apiRoutes.USER.UPDATE_AVATAR)
  .post(upload.single(USER_FIELDS.AVATAR), verifyJWT, updateUserAvatar);
router
  .route(apiRoutes.USER.UPDATE_COVER_IMAGE)
  .post(
    upload.single(USER_FIELDS.COVER_IMAGE),
    verifyJWT,
    updateUserCoverImage
  );
router.route(apiRoutes.USER.CURRENT_USER).get(verifyJWT, currentUser);
router
  .route(apiRoutes.USER.UPDATE_DETAILS)
  .patch(verifyJWT, updateAccountDetails);
router.route(apiRoutes.USER.REFRESH_TOKEN).post(refreshAccessToken);
router.route(apiRoutes.USER.LOGOUT).post(verifyJWT, logoutUser);

export default router;
