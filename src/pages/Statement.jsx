import React, { useState } from "react";
import { Button, Card, Col, Dropdown, Menu, Row, Typography } from "antd";
import TableComponent from "../ui/TableComponent";
import AccountCard from "../components/account/AccountCard";
import { useGetAccountQuery } from "../app/api/accountApi";
import ButtonComponent from "../ui/Button";
import { useGetStatementsQuery, useUploadStatementMutation } from "../app/api/statementApi";
import { formatDateRange } from "../utils/dateUtils";
import { GoKebabHorizontal } from "react-icons/go";
import { PiFilePdfLight } from "react-icons/pi";
import { getStatusDetails } from "../components/statement/constant";
import TransactionTable from "../components/transaction/TransactionTable";

const StatementManager = () => {
  const { data: accounts } = useGetAccountQuery();
  const { data: statements } = useGetStatementsQuery();
  const  [uploadStatement] = useUploadStatementMutation();

  const handleUpload = (newStatement) => {
    const formData = new FormData();
    formData.append('file', newStatement);
    formData.append('account', "d6f78756-1086-4204-abf2-ac0816e3ff00");
    uploadStatement(formData);
  };

  const handleDelete = (id) => {
    // logic to delete statement
  };

  const handleUpdate = (updatedStatement) => {
    // logic to update statement
  };

  return (
    <div className="overflow-hidden w-full p-4 overflow-y-auto">
      <div className=" ">
        <div className="p-2 flex justify-between items-center">
          <div className="text-xl font-medium">Accounts</div>
          <ButtonComponent type="">Add Account</ButtonComponent>
        </div>
        <div className="w-full mx-auto">
  <div className="  flex gap-4 overflow-x-auto justify-center items-center p-4 pl-0 rounded-md">
    {accounts?.map((account) => (
      <AccountCard
        id={account.id}
        key={account.id}
        accountName={account.account_name}
        bankName={account.bank_name}
        bankImage={account.bank_image}
        onClickHandler={() => console.log("Account clicked")}
      />
    ))}
  </div>
</div>

      </div>

      <div className="overflow-auto ">
        <div className="p-2 flex justify-between items-center">
          <div className="text-xl font-medium">Statement</div>
          <input type="file" onChange={e => handleUpload(e.target.files[0])} />
          <ButtonComponent type="">Add Statement</ButtonComponent>
        </div>
        <TableComponent
          columns={[
            {
              title: "Sr No.",
              dataIndex: "index",
              key: "id",
              width: 90,
            },
            {
              title: "File",
              dataIndex: "file",
              key: "file",
              render: (file) => (
                <a href={file} target="_blank" rel="noopener noreferrer">
                  <PiFilePdfLight size={22} />
                </a>
              ),
            },

            {
              title: "Account Name",
              dataIndex: "account_name",
              key: "account_name",
            },
            {
              title: "Statement Month",
              dataIndex: "statement_month",
              key: "statement_month",
              render: (text) => <div className="  -medium">{text}</div>,
            },

            {
              title: "Status",
              dataIndex: "task_status",
              key: "task_status",
              render: (task_status) => getStatusDetails(task_status).icon,
            },

            {
              title: "",
              dataIndex: "actions",
              key: "actions",
              width: 1,
              fixed: "right",

              render: (_, record) => (
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="update">
                        <ButtonComponent
                          type="primary"
                          onClick={() => handleUpdate(record)}
                        >
                          Update
                        </ButtonComponent>
                      </Menu.Item>
                      <Menu.Item key="delete">
                        <ButtonComponent
                          type="danger"
                          onClick={() => handleDelete(record.id)}
                        >
                          Delete
                        </ButtonComponent>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <GoKebabHorizontal style={{ transform: "rotate(90deg)" }} />
                </Dropdown>
              ),
            },
          ]}
          data={statements?.map((statement, index) => ({
            ...statement,
            statement_month: formatDateRange(
              statement.start_date,
              statement.end_date
            ),
            index: index + 1,
            ...accounts?.find((account) => account.id === statement.account),
          }))}
          pagination={false}
        />
      </div>
      <div className="mt-6">
        <div className="p-2 flex justify-between items-center">
          <div className="text-xl font-medium">Transactions</div>
          <ButtonComponent type="">Add Transaction</ButtonComponent>
        </div>
        <TransactionTable/>
      </div>
    </div>
  );
};

export default StatementManager;
