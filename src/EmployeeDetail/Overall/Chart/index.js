import React from 'react';
import { Bar } from 'react-chartjs-2';

import { getRand } from '../../helpers'

const dummyData = [];
for (let i = 0; i < 6; i++) {
  dummyData.push(getRand(0, 15));
}

const EmployeeDetailOverallChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'inspections',
        backgroundColor: 'rgba(255,105,180,0.2)',
        borderColor: 'rgba(255,105,180,1)',
        borderWith: 1,
        hoverBackgroundColor: 'rgba(255,105,180,0.4)',
        hoverBorderColor: 'rgba(255,105,180,1)',
        data: dummyData
      }
    ]
  };

  return (
    <Bar
      data={data}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: false
      }}
    />
  )
}

export default EmployeeDetailOverallChart;
