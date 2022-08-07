import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader, faCreditCard, faDashboard, faGear, faMessage, faSignOut, faUsers } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-gradient-to-b from-gray-500 to-gray-900 bg-gradient-to-r">

                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r p-4 overflow-y-auto w-64  text-base-content">
                    <h3 className='text-3xl font-bold text-gray-200'>Dreadnought</h3>
                    <li className='mt-9 text-white font-semibold rounded-2xl'><NavLink to='/' className={({ isActive }) => isActive ? 'bg-primary ' : ''
                    } > <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>Dashboard </NavLink></li>
                    <li className='mt-5  text-white font-semibold rounded-2xl'><NavLink to='/users' className={({ isActive }) => isActive ? 'bg-primary ' : ''}><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Users </NavLink></li>
                    <li className='mt-5  text-white font-semibold rounded-2xl'><NavLink to='/payment' className={({ isActive }) =>
                        isActive ? 'bg-primary ' : ''
                    }><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> Payment Details</NavLink></li>
                    <li className='mt-5  text-white font-semibold rounded-2xl'><NavLink to='/learning' className={({ isActive }) =>
                        isActive ? 'bg-primary ' : ''
                    }><FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon> Learning Centers </NavLink></li>
                    <li className='mt-5  text-white font-semibold rounded-2xl'><NavLink to='/faqs' className={({ isActive }) =>
                        isActive ? 'bg-primary ' : ''
                    }><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> FAQs </NavLink></li>
                    <li className='mt-5  text-white font-semibold rounded-2xl'><NavLink to='/settings' className={({ isActive }) =>
                        isActive ? 'bg-primary ' : ''
                    }><FontAwesomeIcon icon={faGear}></FontAwesomeIcon> Settings</NavLink></li>

                    <li className='mt-28 bg-green-900 text-white font-semibold rounded-2xl'> <NavLink to='/logout' className={({ isActive }) =>
                        isActive ? 'bg-primary ' : ''
                    }><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>  Logout</NavLink></li>
                </ul>
            </div>
        </div >
    );
};

export default Dashboard;