import React, { useState, useEffect } from "react";
import ExpensesChart from "react-minimal-pie-chart";
import classes from "./Expenses.module.css";

function Expenses() {
  //**************EXPENSES GRAPH
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3301/view-expenses")
      .then((response) => response.json())
      .then((json) => {
        const expensesData = json.expenses.map((expense) => {
          return {
            title: expense.expense_name,
            value: expense.amount,
            color: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          };
        });

        setExpenses(expensesData);
      });
  }, []);

  return (
    <>
      <div className={classes.expensesChart}>
        <p>Your spending in January 2020}}</p>
        <ExpensesChart
          animate
          animationDuration={500}
          animationEasing="ease-out"
          cx={50}
          cy={50}
          data={expenses}
          label
          labelPosition={112}
          labelStyle={{
            fill: "#121212",
            fontFamily: "sans-serif",
            fontSize: "2px",
          }}
          lengthAngle={360}
          lineWidth={100}
          onClick={undefined}
          onMouseOut={undefined}
          onMouseOver={undefined}
          paddingAngle={0}
          radius={30}
          rounded={false}
          startAngle={0}
          viewBoxSize={[100, 100]}
        />
      </div>
    </>
  );
}

export default Expenses;
