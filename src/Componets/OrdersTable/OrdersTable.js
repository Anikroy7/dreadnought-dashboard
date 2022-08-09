import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import TableDetails from './TableDetails';

const OrdersTable = () => {

    function createData(name, trackingId, date, status, _id) {
        return { name, trackingId, date, status, _id };
    }

    const rows = [
        createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved", 1),
        createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending", 2),
        createData("Mouth Freshner", 18908424, "2 March 2022", "Approved", 3),
        createData("Cupcake", 18908421, "2 March 2022", "Delivered", 4),
    ];

    return (
        <section className='flex flex-wrap flex-initial items-center px-4 mt-10'>
            <div>
                <h3 className='text-xl font-bold mb-7 text-indigo-50'>
                    Recent Orders
                </h3>
                <table class="table ">
                    <thead>
                        <tr>
                            <th className=' bg-slate-500 text-pink-50 '>Product</th>
                            <th className=' bg-slate-500 text-pink-50'>Tracing Id</th>
                            <th className=' bg-slate-500 text-pink-50'>Date</th>
                            <th className=' bg-slate-500 text-pink-50'>Status</th>

                        </tr>
                    </thead>
                    <tbody className='text-slate-900 font-semibold'>

                        {
                            rows.map((row, i) => <TableDetails
                                key={i}
                                row={row}
                            ></TableDetails>)
                        }
                    </tbody>
                </table>
            </div>

            <aside>

                <CustomerReview></CustomerReview>
            </aside>
        </section>
    );
};

export default OrdersTable;