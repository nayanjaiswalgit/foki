import React from 'react';
import TableComponent from '../../ui/TableComponent';
import { useGetTransactionsQuery } from '../../app/api/transactionsApi';


const TransactionTable = () => {
    const { data: transactions, isLoading } = useGetTransactionsQuery();


    const filteredTransactions = transactions?.filter((transaction) => (transaction?.amount > 100));

    return (
           <TableComponent
           loading={isLoading}
           columns={[
             {
               title: "Sr No.",
               dataIndex: "index",
               key: "id",
               render: (text, record, index) => index + 1,
             },
             {
               title: "Account",
               dataIndex: "account",
               key: "account",
               render: (text, record) => record.account ? record.account.account_name : "Select",
             },
             {
               title: "Amount",
               dataIndex: "amount",
               key: "amount",
             },
             {
               title: "Date",
               dataIndex: "date",
               key: "date",
             },
             {
               title: "Description",
               dataIndex: "description",
               key: "description",
             },
             {
               title: "Reference Number",
               dataIndex: "reference_number",
               key: "reference_number",
             },  
     
           ]}
           data={filteredTransactions}
           />
    );
};

export default TransactionTable;