import React, { Component } from 'react'

export default class Article extends Component {
    render() {

        /**
         * Khác biệt giữa state và props
         * + Giống nhau: đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu lên giao diện
         * + Khác nhau: state sẽ quản lý giá trị thay đổi trên component và có thể set lại giá trị mới được thông qua phương thức setState. Props thì dùng để nhận dữ liệu từ component cha truyền vào và không thể gán lại giá trị mới được
         *
         *
         */
        let { title, content } = this.props.data;
        let { button } = this.props;

        return (
            <div className='card'>
                <h3 className='card-header'>Title</h3>
                <div>
                    <p className='card-body'>{content}</p>
                    {button}
                </div>
            </div>
        )
    }
}
