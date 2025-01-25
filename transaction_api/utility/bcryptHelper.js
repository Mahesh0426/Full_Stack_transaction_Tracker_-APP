import bcrypt from "bcryptjs";

const SALT = 8;

export const hashPassword = (plainPassword) => {
  const hashPassword = bcrypt.hashSync(plainPassword, SALT);

  return hashPassword;
};

export const comparePassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword);
};
