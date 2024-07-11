import express from "express"
import { createTransaction, deleteSelectedIds, getTransactions } from "../model/transactionModel.js"
import { buildErrorResponse, buildSuccessResponse } from "../utility/responseHelper.js"
import { userAuth } from "../middleware/authMiddleware.js"

const transactionRouter = express.Router()

// Get all the transactions | GET
transactionRouter.get("/", userAuth, async(req, res) => {
  try {
    // db Query
    const result = await getTransactions(req.userId)

    result
      ? buildSuccessResponse(res, result)
      : buildErrorResponse(res, error.message)

  } catch (error) {
    buildErrorResponse(res, error.message)
  }
})

// Create Transaction | POST | CREATE
transactionRouter.post("/", userAuth, async(req, res) => {
  try {
    const transaction = req.body
    const userId = req.userId
    // db query
    const result = await createTransaction({ ...transaction, userId })

    result?._id
      ? buildSuccessResponse(res, result, "Transaction Created!")
      : buildErrorResponse(res, "Cannot create transaction!!")
  } catch (error) {
    buildErrorResponse(res, "Cannot create transaction!!")
  }
})

// delete a  transaction
transactionRouter.delete("/", userAuth, async(req,res) => {
  try {
    //call the query
    const { selectedIds } = req.body
    const result = await deleteSelectedIds(selectedIds)

    result?.acknowledged
      ? buildSuccessResponse(res, result.deletedCount, "Transaction Deleted!")
      : buildErrorResponse(res, "Cannot delete transaction")
  } catch (error) {
    buildErrorResponse(res, error.message)
  }
})

export default transactionRouter