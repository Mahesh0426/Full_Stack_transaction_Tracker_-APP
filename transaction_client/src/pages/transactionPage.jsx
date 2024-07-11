import { Container } from "react-bootstrap";
import TopNavbar from "../components/topNavbar";
import { useDispatch, useSelector } from "react-redux";
import TransactionForm from "../components/transactionForm";
import TransactionTable from "../components/transactionTable";
import { useEffect } from "react";
import { getTransactionsAction } from "../redux/transaction/transactionActions";

const TransactionPage = () => {
  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransactionsAction(user._id))
  }, [dispatch, user._id])
  
  return ( 
    <Container>
      <TopNavbar userName={user.name}/>

      {/* Transaction Form */}
        <TransactionForm userId={user._id} />
      {/* Transaction Table */}
      <TransactionTable />
    </Container>
   );
}
 
export default TransactionPage;