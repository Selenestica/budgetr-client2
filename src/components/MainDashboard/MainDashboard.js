import React from "react";
import Budget from "../Budget/Budget";
import { useState } from "react";
import BankAccountChart from "react-minimal-pie-chart";
import classes from "./MainDashboard.module.css";

function MainDashboard() {
  const [accounts, setAccounts] = useState([]);

  const handleAccountAdded = (account) => {
    setAccounts(
      accounts.concat({
        title: account.accountType,
        value: parseInt(account.balance),
        color: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      })
    );
  };

  return (
    <>
      <Budget onAccountAdded={handleAccountAdded} />
      <BankAccountChart data={accounts} />
    </>
  );
}

export default MainDashboard;
