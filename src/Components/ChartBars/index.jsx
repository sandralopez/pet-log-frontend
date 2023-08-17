import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ChartBars({data}) {
  const barData = Object.entries(
    data.reduce((accumulator, { value }) => {
      accumulator[value] = (accumulator[value] || 0) + 1;
      return accumulator;
    }, {})
  ).map(([name, times]) => ({ name, times }));

  return (
    <ResponsiveContainer>
      <BarChart data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="times" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export { ChartBars };