import React, { Component } from 'react';
let Row = (obj)=>{

    return (
        <div
            onClick={obj.onClick}
            style={{
                padding: '0 15px',
                backgroundColor: 'white',
            }}
        >
            <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
                {obj.title}
            </div>
            <div style={{ display: 'flex', padding: '15px' }}>
                <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
                <div style={{ display: 'inline-block' }}>

                    <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}</div>
                    <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{obj.price}</span> 元/吨</div>
                    <div><span>{obj.address}</span></div>
                </div>
            </div>
        </div>
    );
};
export default Row;