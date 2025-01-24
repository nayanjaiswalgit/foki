import ButtonComponent from "../ui/Button";
import TransactionTable from "../components/transaction/TransactionTable";

const TransactionManager = () => {





  const handleUpload = (newTransaction) => {
    // logic to upload transaction
  };

  const handleDelete = (id) => {
    // logic to delete transaction
  };

  const handleUpdate = (updatedTransaction) => {
    // logic to update transaction
  };

  const fetchTransactions = () => {
    // logic to fetch transactions
  };
  return (
    <div className="overflow-hidden w-full p-4">
    <div className=" ">
      <div className="p-2 flex justify-between items-center">
        <div className="text-xl font-medium">Transactions</div>
        <ButtonComponent type="">Add Transactions</ButtonComponent>
      </div>
    <TransactionTable filter={""} />
    </div>
    </div>
  );
};

export default TransactionManager;
