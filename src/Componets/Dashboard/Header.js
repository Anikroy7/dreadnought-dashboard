import React from 'react';

const Header = () => {
    return (
        <div class="navbar text-white lg:px-10">

            <h3 class="normal-case text-2xl text-indigo-50 font-bold">Welcome To Dashboard</h3>



            <div className="navbar-end">
                <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div >
    );
};

export default Header;