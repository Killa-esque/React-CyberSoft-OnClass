import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
        <p>Trang tìm kiếm không tồn tại</p>
        <NavLink to='home' className={'btn btn-warning'}>Bấm vào đây để về trang chủ</NavLink>
      </div>
    )
  }
}
