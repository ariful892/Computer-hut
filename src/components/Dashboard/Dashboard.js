import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='rechart'>
            <div>
                <h3 className='chart-title'>MONTH WISE SELL</h3>
                <MyLineChart></MyLineChart>
            </div>
            <div>
                <h3 className='chart-title'>Investment VS Revenue</h3>
                <MyAreaChart></MyAreaChart>
            </div>
            <div>
                <h3 className='chart-title'>Investment VS Revenue</h3>
                <MyBarChart></MyBarChart>
            </div>
            <div>
                <h3 className='chart-title'>Investment VS Revenue</h3>
                <MyPieChart></MyPieChart>
            </div>
        </div>
    );
};

export default Dashboard;