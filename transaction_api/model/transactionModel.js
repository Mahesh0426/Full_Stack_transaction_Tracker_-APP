import transactionSchema from "../schema/transactionSchema.js"

// Get all transactions
export const getTransactions = (userId) => {
  return transactionSchema.find({ userId })
}
// Create a transaction
export const createTransaction = (transObj) => {
  return transactionSchema(transObj).save()
}
//delete selected Ids

export const deleteSelectedIds = (selectedIds = []) => {
  return transactionSchema.deleteMany({ "_id": { $in: selectedIds } });
}