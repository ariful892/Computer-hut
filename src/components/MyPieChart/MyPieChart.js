import React from 'react';
import { Pie, PieChart } from 'recharts';
import useData from '../hooks/useData';
import './MyPieChart.css';

const MyPieChart = () => {

    const [data, setData] = useData();

    return (
        <PieChart className='pie-chart' width={300} height={300}>

            <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />

        </PieChart>
    );
};

export default MyPieChart;