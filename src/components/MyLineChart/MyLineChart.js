import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../hooks/useData';

const MyLineChart = () => {

    const [data, setData] = useData();

    return (
        <LineChart width={500} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
    );
};

export default MyLineChart;