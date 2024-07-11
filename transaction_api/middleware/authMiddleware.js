import { findUserById } from "../model/userModel.js"
import { buildErrorResponse } from "../utility/responseHelper.js"

export const userAuth = async(req, res, next) => {
  try {
    // get the user from request | authiorization has userID
    const { authorization } = req.headers

    const user = await findUserById(authorization)

    // check if user is valid user
    if(user?._id){
      req.userId = user._id
      next()
      return
    }

    buildErrorResponse(res, "Unauthorized User!!")
  } catch (error) {
    buildErrorResponse(res, "Unauthorized User!!")
  }
}