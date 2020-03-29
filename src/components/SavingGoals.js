import React, {useState, useEffect} from 'react'
import BarChart from 'react-horizontal-stacked-bar-chart'

function SavingGoals() {

    const [savingsGoals, setSavingsGoals] = useState([])

    useEffect(() => {
        fetch('http://localhost:3301/view-savings-goals')
        .then(response => response.json())
        .then(json => {

            const savingsGoalsData = json.savings_goals.map((savingsGoal) => {
                return {
                    name: savingsGoal.name,
                    value: savingsGoal.amount,
                    description: savingsGoal.amount,
                    color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                }
            })

            setSavingsGoals(savingsGoalsData)
        })
    }, [])

    return (<>
        <div className="row">
            <div className="col">
                <form action="/add-savings-goal" method="POST">
                    <input type="text" placeholder="goal name" name="name" />
                    <input type="text" placeholder="goal category" name="type" />
                    <input type="hidden" value="2" name="user_id" />
                    <input type="text" placeholder="deadline" name="deadline_date" />
                    <input required type="number" placeholder="goal amount" name="amount" />
                    <button tye="submit">Add</button>
                </form>
            </div>
        </div>

        <div className="saving-goals-container">
            <h1>Your Goal</h1>
            <p>(you're almost there!)</p>
            <BarChart   
                height={50}
                showTextDown
                id="new_id"
                fontColor="rgb(50,20,100)"
                data={savingsGoals} 
            />
        </div>

    </>)
}

export default SavingGoals