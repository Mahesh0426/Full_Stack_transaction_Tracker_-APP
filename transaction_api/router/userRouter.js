import express from "express"
import { comparePassword, hashPassword } from "../utility/bcryptHelper.js"
import { createUSer, findUserByEmail } from "../model/userModel.js"
import { buildErrorResponse, buildSuccessResponse } from "../utility/responseHelper.js"

const userRouter = express.Router()

// Create User | Signup | POST
userRouter.post("/signup", async(req, res)=>{
  try{
    // Signup Process
    const { password, name, email } = req.body
    // encrypt| hash the password
    const encryptedPassword = hashPassword(password)

    // Create User In Database
    const result = await createUSer({
      name: name,
      email: email,
      password: encryptedPassword,
    })

    result?._id
      ? buildSuccessResponse(res, result, "User created successfully!")
      : buildErrorResponse(res, "Could not register the user")

  }catch(error){
    if(error.code === 11000){
      error.message = "User with this email already exists!"
    }

    buildErrorResponse(res, error.message)
  }
  
})

// POST | User Login
userRouter.post("/login", async(req, res)=>{
  try {
    // Get email and password from request
    const { email, password } = req.body

    // Find if the user exist in our database
    const user = await findUserByEmail(email)

    // User not found
    if(!user?._id){
      return buildErrorResponse(res, "Invalid Credentials!!")
    }

    // user found
    const isPasswordMatched = comparePassword(password, user?.password)

    isPasswordMatched
      ? buildSuccessResponse(res, user, "Logged in successfully")
      : buildErrorResponse(res, "Invalid Credentials!!")

  } catch (error) {
    buildErrorResponse(res, "Invalid Credentials!!")
  }
})

export default userRouter