import { toast } from "react-toastify";
import {
  createTransaction,
  deleteSelectedTransactions,
  getTransactions,
} from "../../axios/transactionAxios";
import { setTransactions } from "./transactionSlice";

// Get all transactions
export const getTransactionsAction = (userId) => async (dispatch) => {
  // call axios
  const result = await getTransactions(userId);

  if (result.status === "success") {
    dispatch(setTransactions(result.data));
  }
};

// Create a transaction
export const createTransactionAction = (transactionObj) => async (dispatch) => {
  // call axios
  const result = await createTransaction(transactionObj);

  if (result.status === "error") {
    return toast.error(result.message);
  }

  // can be refactored to call the getTransactionsAction

  // call an axios to request api to fetch all transactions list
  const transactionResult = await getTransactions(transactionObj.userId);

  if (transactionResult.status === "error") {
    return toast.error(transactionResult.message);
  }

  toast.success("Transaction created");
  dispatch(setTransactions(transactionResult.data));
};

export const deleteSelectedTransactionAction =
  (selectedIds, userId) => async (dispatch) => {
    // axios call
    const result = await deleteSelectedTransactions(selectedIds, userId);

    if (result.status === "error") {
      toast.error(result.message);
      return;
    }

    // success
    dispatch(getTransactionsAction(userId));
    toast.success("Selected transactions deleted");
  };
