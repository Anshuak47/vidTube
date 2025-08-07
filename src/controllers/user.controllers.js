import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  //validation
  if (fullName?.trim() === "") {
    throw new ApiError(400, "Full name is required");
  }
});

export { registerUser };
