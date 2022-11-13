import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        const { phone, themGioHang } = this.props;
        return (
            <div className='card'>
                <img src={phone.hinhAnh} alt="..." height={450} style={{ objectFit: 'cover' }} />
                <div className='card-body'>
                    <p>{phone.tenSP}</p>
                    <p>{phone.giaBan.toLocaleString()}</p>
                    <button className='btn btn-danger' onClick={() => {
                        themGioHang(phone);
                    }}>
                        Thêm vào giỏ hàng
                        <i className='fa fa-cart-plus mx-2'></i>
                    </button>
                </div>
            </div>
        )
    }
}
