import bcrypt from "bcryptjs"

const SALT  =15

export const hashPassword = (plainPassword) => {
  const hashPassword = bcrypt.hashSync(plainPassword, SALT)

  return hashPassword
}

export const comparePassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword)
}