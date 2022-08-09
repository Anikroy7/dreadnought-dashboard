import { data } from 'autoprefixer';
import React from 'react';

const TableDetails = ({ row }) => {

    const { name, trackingId, date, status } = row;
    const makeStyle = (status) => {
        if (status === 'Approved') {
            return {
                className: 'btn btn-success'
            }
        }
        else if (status === 'Pending') {
            return {
                background: '#ffadad8f',
                color: 'red',

            }
        }
        else {
            return {
                background: '#59bfff',
                color: 'white',

            }
        }
    }

    return (
        <tr>

            <td>{name}</td>
            <td>{trackingId}</td>
            <td>{date}</td>
            <td><button className='btn btn-xs btn-success' style={makeStyle(status)}>{status}</button></td>


        </tr>
    );
};

export default TableDetails;