import React, {useState, useEffect} from 'react'
import IncomeSourcesChart from 'react-minimal-pie-chart'

function Income() {

    const [incomes, setIncomes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3301/view-income-sources')
        .then(response => response.json()) 
        .then(json => {

          const incomeSourcesData = json.income_sources.map((income) => {
            return {
                    title: income.name,
                    value: income.amount,
                    color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
              }
            })
        
        setIncomes(incomeSourcesData)
        })        
    }, [])

    return(<>
    
        <p>Your income for January 2020}}</p>
        <IncomeSourcesChart 
            animate
            animationDuration={500}
            animationEasing="ease-out"
            cx={50}
            cy={50} 
            data={incomes}   
            label
            labelPosition={112}
            labelStyle={{
            fill: '#121212',
            fontFamily: 'sans-serif',
            fontSize: '2px'
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
    
    </>)

}

export default Income