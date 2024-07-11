import userSchema from "../schema/userSchema.js"

// Create a user
export const createUSer = (userObj) => {
  return userSchema(userObj).save()
}

// Find User by email
export const findUserByEmail = (email) => {
  return userSchema.findOne({ email })
}

// Find User by email
export const findUserById = (id) => {
  return userSchema.findOne({ _id: id })
}