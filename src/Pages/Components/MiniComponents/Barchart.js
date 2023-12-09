import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Smallbutton from './Smallbutton';

const data = [
    {
        name: 'Page A',
        uv: 2,
        pv: 3,
        cv: 1,
    },
    {
        name: 'Page B',
        uv: 3,
        pv: 1,
        cv: 4,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2,
        pv: 6,
        cv: 1,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2,
        pv: 3,
        cv: 4,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1,
        pv: 4,
        cv: 5,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2,
        pv: 3,
        cv: 5,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3,
        pv: 4,
        cv: 5,
        amt: 2100,
    },
    {
        name: 'Page H',
        uv: 4,
        pv: 3,
        cv: 2,
        amt: 2100,
    },
    {
        name: 'Page I',
        uv: 1.7,
        pv: 2.5,
        cv: 3.7,
        amt: 2100,
    },
    {
        name: 'Page J',
        uv: 3.7,
        pv: 1.8,
        cv: 3.9,
        amt: 2100,
    },
    {
        name: 'Page K',
        uv: 3.4,
        pv: 4.3,
        cv: 2.7,
        amt: 2100,
    },
    {
        name: 'Page L',
        uv: 1.4,
        pv: 4,
        cv: 3.7,
        amt: 2100,
    },
];

function Barchart({ chartdata }) {
    const [bar, setBar] = useState('pv');
    const handleClick = (e) => {
        setBar(e.target.name);
    }
    const [Charts, setCharts] = useState([]);

    useEffect(()=>{
        if(chartdata && chartdata.length > 0){
            setCharts(chartdata[0].data);
        }
    },[chartdata])

    const handleSelect = (e) => {
        const i = e.target.value
        setCharts(chartdata[i].data);
    }
    console.log(Charts)
    
    return (
        <div className='w-full h-full flex flex-col'>
            <div className={`w-full h-max flex ${chartdata && chartdata.length > 1 ? 'justify-between' : 'justify-end'} p-4 gap-x-4`}>
                { chartdata && chartdata.length > 1 ?
                    <div>
                        <select name="chart" id="chart" onChange={(e)=>handleSelect(e)} defaultValue={0} className='outline-none'>
                            {chartdata.map((chart, index) => {
                                return <option value={index} key={index}>{index}</option>
                            })
                            }
                        </select>
                    </div>
                    : null
                }

                <div className='gap-x-4 flex'>
                    <div className='flex w-max justify-center'>
                        <button className={`font-semibold p-2 px-3 hover:bg-blue-950 ${bar === 'pv' ? 'text-white bg-blue-700' : 'text-blue-700 bg-gray-100'} hover:text-white hover:font-semibold text-semibold text-xs rounded-md ease-in transition-all`} type='button' name='pv' onClick={(e) => handleClick(e)}>pv</button>
                    </div>
                    <div className='flex w-max justify-center'>
                        <button className={`font-semibold p-2 px-3 hover:bg-blue-950 ${bar === 'uv' ? 'text-white bg-blue-700' : 'text-blue-700 bg-gray-100'} hover:text-white hover:font-semibold text-semibold text-xs rounded-md ease-in transition-all`} type='button' name='uv' onClick={(e) => handleClick(e)}>uv</button>
                    </div>
                    <div className='flex w-max justify-center'>
                        <button className={`font-semibold p-2 px-3 hover:bg-blue-950 ${bar === 'cv' ? 'text-white bg-blue-700' : 'text-blue-700 bg-gray-100'} hover:text-white hover:font-semibold text-semibold text-xs rounded-md ease-in transition-all`} type='button' name='cv' onClick={(e) => handleClick(e)}>cv</button>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={chartdata ? Charts : data}
                    margin={{
                        top: 20,
                        right: 50,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid
                        vertical={false}
                        strokeDasharray="3 3"
                    />
                    <XAxis dataKey="name" style={{
                        fontSize: '0.7rem',
                    }} />
                    <YAxis style={{
                        fontSize: '0.7rem',
                    }} />
                    <Tooltip />
                    <Legend />
                    {bar === 'pv' && <Bar dataKey="pv" stackId="a" barSize={10} fill="#8884d8" />}
                    {bar === 'uv' && <Bar dataKey="uv" stackId="a" barSize={10} fill="#82ca9d" />}
                    {bar === 'cv' && <Bar dataKey="cv" stackId="a" barSize={10} fill="#eb8934" />}
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Barchart

