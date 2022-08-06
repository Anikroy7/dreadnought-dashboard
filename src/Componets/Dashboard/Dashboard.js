import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader, faCreditCard, faDashboard, faGear, faMessage, faSignOut, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu h- bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200 p-4 overflow-y-auto w-64  text-base-content">
                    <h3 className='text-3xl font-bold text-slate-500'>Dreadnought</h3>
                    <li className='mt-9 bg-primary text-white font-semibold rounded-2xl'><a> <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>Dashboard </a></li>
                    <li className='mt-5 bg-primary text-white font-semibold rounded-2xl'><a><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Users </a></li>
                    <li className='mt-5 bg-primary text-white font-semibold rounded-2xl'><a><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> Payment Details</a></li>
                    <li className='mt-5 bg-primary text-white font-semibold rounded-2xl'><a><FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon> Learning Centers </a></li>
                    <li className='mt-5 bg-primary text-white font-semibold rounded-2xl'><a><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> FAQs </a></li>
                    <li className='mt-5 bg-primary text-white font-semibold rounded-2xl'><a><FontAwesomeIcon icon={faGear}></FontAwesomeIcon> Settings</a></li>

                    <li className='mt-28 bg-primary text-white font-semibold rounded-2xl'> <a><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>  Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;