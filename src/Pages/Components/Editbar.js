import React, { useState } from 'react'
import Barchart from './MiniComponents/Barchart'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../../Redux/UserSlice'
import { createChartsAsync } from '../../Redux/ChartSlice';

function Editbar() {
    const user = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    const [EditBar, setEditBar] = useState([{ name: 'name', pv: '1', uv: '2', cv: '3' }, { name: 'name', pv: '2', uv: '4', cv: '6' }])

    const handleChange = (e, index) => {
        const event = e;
        const i = index;
        const newState = EditBar.map((obj, index) => {
            if (index === i) {
                return { ...obj, [event.target.name]: event.target.value };
            }
            return obj;
        });
        setEditBar(newState);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {data:[...EditBar],UserId: user.id};
        dispatch(createChartsAsync(values));
        alert('chart has been saved successfully.');
    }
    return (
        <div className='w-full h-full p-2 lg:p-4 sm:p-6 overflow-y-scroll bg-gray-100'>
            <div className='w-full h-auto pb-6 flex justify-start'>
                <p className='text-sm font-medium'>Edit Bars</p>
            </div>
            <form className='flex flex-col items-center gap-6 bg-white rounded-lg w-full h-full' onSubmit={(e)=>handleSubmit(e)}>
                <div className='w-2/3 h-2/4'>
                    <Barchart chartdata={[{data:EditBar}]} />
                </div>
                <div className="rounded-lg shadow-3xl w-max p-4 mt-4 mb-12 ">
                    <label className='font-bold flex text-sm'>Custom Bars</label>
                    <div className='flex flex-col 2xl:grid 2xl:grid-cols-2 w-max h-max gap-y-4 gap-x-6 my-2'>
                        {EditBar.length > 0 &&
                            EditBar.map((friend, index) => {
                                const i = index;
                                return <div className={`w-max flex  gap-x-4 pb-2 px-2 lg:flex-wrap items-end  ${(index % 2) === 0 ? '2xl:border-r-2 2xl:border-sidebar-border 2xl:pr-6' : null}`} key={index}>
                                    <div className='w-max flex flex-col'>
                                        <label className="text-xs font-semibold leading-6 text-gray-900 mt-1" htmlFor={`EditBar.${index}.name`}>Name</label>
                                        <input required type="text" name={`name`} className='border-gray-300 placeholder-gray-400 border-2 rounded p-1 px-2 text-sm w-28 sm:max-w-30 sm:w-full' onChange={(e) => handleChange(e, i)} value={EditBar[index].name}></input>
                                    </div>
                                    <div className='w-max flex flex-col'>
                                        <label className="text-xs font-semibold leading-6 text-gray-900 mt-1" htmlFor={`EditBar.${index}.pv`}>PV</label>
                                        <input required type="number" name={`pv`} className='border-gray-300 placeholder-gray-400 border-2 rounded p-1 px-2 text-sm md:w-28 w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => handleChange(e, i)} value={EditBar[index].pv}></input>
                                    </div>
                                    <div className='w-max flex flex-col'>
                                        <label className="text-xs font-semibold leading-6 text-gray-900 mt-1" htmlFor={`EditBar.${index}.uv`}>UV</label>
                                        <input required type="number" name={`uv`} className='border-gray-300 placeholder-gray-400 border-2 rounded p-1 px-2 text-sm md:w-28 w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => handleChange(e, i)} value={EditBar[index].uv}></input>
                                    </div>
                                    <div className='w-max flex flex-col'>
                                        <label className="text-xs font-semibold leading-6 text-gray-900 mt-1" htmlFor={`EditBar.${index}.cv`}>CV</label>
                                        <input required type="number" name={`cv`} className='border-gray-300 placeholder-gray-400 border-2 rounded p-1 px-2 text-sm md:w-28 w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => handleChange(e, i)} value={EditBar[index].cv}></input>
                                    </div>


                                    <div className='w-auto'>
                                        <button
                                            type="button"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            })}
                    </div>
                    <button
                        type="button"
                        className='text-blue-500 pt-2 text-sm font-semibold'
                        onClick={() => { setEditBar(prev => ([...prev, { name: '', pv: '', uv: '', cv: '' }])) }}
                    >
                        + Add Bar
                    </button>
                </div>
                <div className='flex w-max justify-center'>
                    <button className='font-semibold p-2 px-3 bg-blue-700 hover:bg-blue-950 hover:text-white hover:font-semibold text-white text-semibold text-sm rounded-md ease-in transition-all' type='submit'>Save</button>
                </div>
            </form>

        </div>

    )
}

export default Editbar