import React, { Component } from 'react'

export default class PhoneCard extends Component {
    render() {
        const { item, buttonClick } = this.props;
        return (
            <div className='card'>
                <img src={item.hinhAnh} alt="vsphone" />
                <div className='card-body'>
                    <h3>{item.tenSP}</h3>
                    <p>{item.giaBan}</p>
                    <button className='btn btn-dark' onClick={() => {
                        buttonClick(item);
                        // console.log(viewDetail)
                    }}>View detail</button>
                </div>
            </div>
        )
    }
}
