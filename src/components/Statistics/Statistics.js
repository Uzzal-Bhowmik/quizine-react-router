import React from 'react';
import "./Statistics.css";
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const statsData = useLoaderData().data;

    return (
        <div className='my-5 stats'>
            <div className='text-center'>
                <h1 className=''>Total <span style={{ color: "var(--primary-color)" }}>Questions</span></h1>
                <p className='text-muted fw-semibold fs-6 mt-3 mb-5'>Total number of questions asked by different topics.</p>
            </div>

            <div style={{ marginBottom: "100px" }}>
                <AreaChart width={1000} height={300} data={statsData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 0 }} className='mx-auto'>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;