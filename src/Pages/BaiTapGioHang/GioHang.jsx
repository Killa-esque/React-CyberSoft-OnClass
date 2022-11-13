import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const { gioHang, xoaGioHang } = this.props;
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.maSP}</td>
                            <td>{item.tenSP}</td>
                            <td>
                                <img src={item.hinhAnh} width={50} height={50} alt="Iphone X" />
                            </td>
                            <td>{item.soLuong}</td>
                            <td>{item.giaBan}</td>
                            <td>{item.soLuong * item.giaBan}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => {
                                    xoaGioHang(item.maSP);
                                }}>
                                    <i className='fa fa-trash'></i>
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}
