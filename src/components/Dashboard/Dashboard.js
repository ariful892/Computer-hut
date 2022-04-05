import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <h2>MONTH WISE SELL</h2>
            <MyLineChart></MyLineChart>
            <h2>Investment VS Revenue</h2>
            <MyAreaChart></MyAreaChart>
        </div>
    );
};

export default Dashboard;