import { UnAuthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resouserceUserId) => {
  if (requestUser.userId !== resouserceUserId.toString()) {
    throw new UnAuthenticatedError("Not authorized to access this route");
  }
};

export default checkPermissions;
