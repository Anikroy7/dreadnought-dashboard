import React from 'react';
import Cards from '../Cards/Cards';
import OrdersTable from '../OrdersTable/OrdersTable';
import Header from './Header';
import Users from './Users';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Cards></Cards>
            <OrdersTable></OrdersTable>
        </div>
    );
};

export default Main;