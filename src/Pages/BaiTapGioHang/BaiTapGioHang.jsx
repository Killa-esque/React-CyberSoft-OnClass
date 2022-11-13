import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {
    state = {
        gioHang: [
            { maSP: 1, tenSP: 'iPhone X', giaBan: 2000, hinhAnh: './img/sp_iphoneX.png', soLuong: 10 }
        ]
    }

    xoaGioHang = (maSP) => {
        console.log(maSP);
        let gioHang = this.state.gioHang;
        // Xét spClick có trong giỏ hàng hay chưa
        // Cách1
        let index = gioHang.findIndex(sp => sp.maSP === maSP);
        if (index !== -1){
            gioHang.splice(index,1);
        }
        // Cách 2
        // gioHang = gioHang.filter(sp => sp.maSP !== maSP);
        // Set state
        this.setState({
            gioHang: gioHang
        })
    }

    themGioHang = (spClick) => {
        spClick = {...spClick, soLuong:1}
        console.log(spClick)
        let gioHang = this.state.gioHang;
        // Xét spClick có trong giỏ hàng hay chưa
        let spGioHang = gioHang.find(sp => sp.maSP === spClick.maSP);
        if (spGioHang){
            spGioHang.soLuong++;
        }
        else{
            gioHang.push(spClick);
        }


        // Set state
        this.setState({
            gioHang: gioHang
        })
    }
    render() {
        /*
            - Chia component khi nào ?
                + Yếu tố 1: Component đó có khả năng tái sử dụng nhiều lần trên nhiều nơi (page, template, project khác, ....)
                + Yếu tố 2: ví dụ Component có nội dung html quá dài > 1000 dòng trên 1 file thì chúng ta sẽ chia (nhưng component chỉ sử dụng cho file này thôi không có khả năng tái sử dụng). Không chia component quá nhỏ cho trường hợp này tối đa 3 cấp.
        */
        return (
            <div className='container'>
                <h3 className='text-center mt-2'>Bài tập giỏ hàng</h3>
                <GioHang xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <DanhSachSanPham themGioHang={this.themGioHang}/>
            </div>
        )
    }
}
