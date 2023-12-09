import React, { useState, useEffect } from 'react'
import Smallbutton from './MiniComponents/Smallbutton'
import Barchart from './MiniComponents/Barchart'
import Circularprogressbar from './MiniComponents/Circularprogressbar'
import { HiMiniClipboardDocumentList } from 'react-icons/hi2';
import { ImBoxAdd } from 'react-icons/im'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers } from '../../Redux/UserSlice';
import { getChartsAsync, selectAllcharts } from '../../Redux/ChartSlice';


export const capitalizeWord = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

function Dashboard() {
    const dispatch = useDispatch();
    const user = useSelector(selectAllUsers);
    useEffect(() => {
        dispatch(getChartsAsync(user.id))
    }, [dispatch])
    const charts = useSelector(selectAllcharts);
    console.log(charts)
    return (
        <div className='w-full h-full p-6 overflow-scroll bg-gray-100 transition-all'>
            <div className='w-full h-auto pb-6 flex justify-between'>
                <p className='text-sm font-medium'>Dashboard</p>
                <p className='text-sm font-medium'>Welcome to ABCD Dashboard</p>
            </div>
            <div className='grid grid-cols-9 auto-rows-180-auto gap-6'>
                <div className='w-full h-full bg-white rounded col-span-full lg:col-span-3 row-span-5 overflow-hidden'>
                    <div className='w-hull h-2/4 bg-dashboard flex justify-between p-2 pb-0'>
                        <div className='pt-2 pl-2'>
                            <p className='text-dashboard-text'>Welcome Back!</p>
                            <p className='text-dashboard-text text-xs'> ABCD Dashboard</p>
                        </div>
                        <img src="./coding.svg" alt="" className='w-40 h-auto mb-0 pb-0 mr-4' />
                    </div>
                    <div className='relative grid grid-cols-3 h-2/4 w-full gap-x-4 px-6'>
                        <div className='h-full w-full flex items-center justify-center'>
                            <img src="./60111.jpg" alt="" className='rounded-full w-16 h-16 absolute left-auto -top-8 border-4 border-white' />
                            <div className='w-max h-max'>
                                <p className='text-sm font-medium whitespace-nowrap'>{capitalizeWord(user.firstname)} {capitalizeWord(user.lastname)}</p>
                                <p className='text-xs text-gray-700 whitespace-nowrap'>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className='flex flex-col w-full h-full justify-between py-3 items-center'>
                            <div className=''>
                                <p className='text-sm font-medium'>125</p>
                                <p className='text-xs whitespace-nowrap'>projects</p>
                            </div>
                            <Smallbutton name={'View Profile'} type={'button'} />
                        </div>
                        <div className='flex flex-col w-full h-full justify-between py-3 items-center'>
                            <div className=''>
                                <p className='text-sm font-medium'>$1245</p>
                                <p className='text-xs whitespace-nowrap'>Revenue</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full bg-white rounded col-span-3 lg:col-span-2 row-span-2 p-4 px-4 lg:px-10 flex justify-between'>
                    <div className='flex flex-col w-max h-full justify-between'>

                        <p className='text-xs  text-gray-500'>orders</p>
                        <p className='text-base font-medium'>1235</p>
                    </div>
                    <div className='flex w-max h-max p-3 rounded-full bg-blue-700'>
                        <HiMiniClipboardDocumentList className='text-white w-6 h-6' />
                    </div>
                </div>
                <div className='w-full h-full bg-white rounded col-span-3 lg:col-span-2 row-span-2 p-4 px-4 lg:px-10 flex justify-between'>
                    <div className='flex flex-col w-max h-full justify-between'>

                        <p className='text-xs  text-gray-500'>Revenue</p>
                        <p className='text-base font-medium'>$35723</p>
                    </div>
                    <div className='flex w-max h-max p-3 rounded-full bg-blue-700'>
                        <ImBoxAdd className='text-white w-6 h-6' />
                    </div>
                </div>
                <div className='w-full h-full bg-white rounded col-span-3 lg:col-span-2 row-span-2 p-4 px-4 lg:px-10 flex justify-between'>
                    <div className='flex flex-col w-max h-full justify-between'>

                        <p className='text-xs  text-gray-500'>Average Price</p>
                        <p className='text-base font-medium'>16.2</p>
                    </div>
                    <div className='flex w-max h-max p-3 rounded-full bg-blue-700'>
                        <BiPurchaseTagAlt className='text-white w-6 h-6' />
                    </div>
                </div>
                <div className='w-full h-full bg-white rounded col-span-full lg:col-span-6 row-span-8'>
                    {
                       charts && charts.length > 0 ?
                            <Barchart chartdata={charts} />
                            :
                            <Barchart />
                    }
                </div>
                <div className='w-full h-full bg-white rounded col-span-full lg:col-span-3 row-span-5 flex justify-evenly'>
                    <div className='w-max h-full flex flex-col p-8'>
                        <p className='text-sm font-semibold mb-4'>Monthly Earning</p>
                        <p className='text-xs text-gray-500 font-medium mb-3'>This Month</p>
                        <p className='text-lg font-medium'>$34,252</p>
                        <p className='text-xs text-gray-500 font-medium mb-4'><span className='text-green-500'>12%</span> + from previous period</p>
                        <Smallbutton name={'View More'} type={'button'} />
                    </div>
                    <div className='w-max h-full flex items-center justify-center'>
                        <div className='w-2/4 h-2/4'>
                            <Circularprogressbar score={80} />
                        </div>
                    </div>
                </div>
                <div className='w-full h-full bg-white rounded col-span-full lg:col-span-3 row-span-8'></div>
                <div className='w-full h-full bg-white rounded col-span-full lg:col-span-3 row-span-8'></div>
                <div className='w-full h-full bg-white rounded col-span-full lg:col-span-3 row-span-8'></div>
            </div>
        </div>
    )
}

export default Dashboard