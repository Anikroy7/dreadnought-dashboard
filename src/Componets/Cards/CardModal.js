
import React, { useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const CardModal = ({ modalInfo }) => {

    const { title, background, value, barValue } = modalInfo;
    console.log(modalInfo);
    // const data = modalInfo.series[0].data;
    const data = [
        {
            name: title,
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: title,
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: title,
            uv: 2000,
            pv: 9800,
            amt: 2290,
        }
    ];
    console.log(data, 'fofofoof');
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // const { title } = card;
    return (
        <div className='' style={{ backgroundColor: ' #ffee' }}>

            {/* <label for="card-modal" class="btn modal-button">open modal</label> */}


            <input type="checkbox" id="card-modal" class="modal-toggle " />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box" style={{ backgroundColor: isHovering ? '#3c9dd0' : background, }} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <h3 class="font-bold text-lg mb-9">{title}</h3>
                    <AreaChart className='text-white' width={400} height={200} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f175a9" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#cba321" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#eac784" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#b0f4f0" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                    <div class="modal-action">
                        <label for="card-modal" class="btn btn-sm btn-primary">Close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CardModal;