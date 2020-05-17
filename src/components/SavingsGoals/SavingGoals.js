import React, { useState, useEffect } from "react";
import BarChart from "react-horizontal-stacked-bar-chart";
import classes from "./SavingGoals.module.css";
import axios from "axios";

function SavingGoals() {
  const [savingsGoals, setSavingsGoals] = useState([]);
  const [prcntToGoal, setPrcntToGoal] = useState("");
  const [goalName, setGoalName] = useState("");

  useEffect(() => {
    async function getSavingsGoals() {
      const funds = await axios.get(
        "http://localhost:3301/accountBalances/checking"
      );
      const available_funds = parseInt(funds.data[0].available_funds);
      const res = await axios.get(
        "http://localhost:3301/savingsGoals/view-savings-goals"
      );
      const toGoal = available_funds / res.data.savings_goals[0].amount;
      const goalName1 = res.data.savings_goals[0].name;
      setGoalName(goalName1);
      setPrcntToGoal(toGoal);
      const savingsGoalsData = res.data.savings_goals.map((savingsGoal) => {
        return (
          <div key={savingsGoal.name + savingsGoal}>
            <BarChart
              height={50}
              showTextIn
              id="new_id"
              fontColor="rgb(50,20,100)"
              data={[
                {
                  name: null,
                  value: available_funds,
                  description: null,
                  color: "#008000",
                },
                {
                  name: savingsGoal.name,
                  value: savingsGoal.amount,
                  description: available_funds + " / " + savingsGoal.amount,
                  color: "#f8f8f8",
                },
              ]}
            />
          </div>
        );
      });

      setSavingsGoals(savingsGoalsData);
    }
    getSavingsGoals();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col">
          <form action="/add-savings-goal" method="POST">
            <input type="text" placeholder="goal name" name="name" />
            <input type="text" placeholder="goal category" name="type" />
            <input type="hidden" value="2" name="user_id" />
            <input type="text" placeholder="deadline" name="deadline_date" />
            <input
              required
              type="number"
              placeholder="goal amount"
              name="amount"
            />
            <button tye="submit">Add</button>
          </form>
        </div>
      </div>

      <div className={classes.savingGoalsContainer}>
        <h1>Your Goal</h1>
        <p>
          You're <b>{prcntToGoal}%</b> of the way to <b>{goalName}</b>
        </p>
        {savingsGoals}
      </div>
    </>
  );
}

export default SavingGoals;
