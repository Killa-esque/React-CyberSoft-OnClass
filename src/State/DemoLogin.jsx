import React, { Component } from 'react'
import style from './DemoLogin.module.css'
export default class DemoLogin extends Component {
    state = { // là thuộc tính có sẵn của react class component, chứa các giá trị thay đổi trên giao diện
        login: false //Mặc định là chưa đăng nhập
    }
    username = 'PhuVinh';
    renderLogin = () => {
        // if (this.login){
        //     return <span className='nav-link'>Hello {this.username}</span>
        // }
        // return <a className="nav-link active" href="#" aria-current="page">Login</a>
        return this.state.login ?
            <> <span className='nav-link text-white'>Hello {this.username}</span> <a className="nav-link active" href="#" aria-current="page" onClick={() => {
                this.handleLogOut()
            }}>Log out</a> </>
            :
            <>
                <a className="nav-link active" href="#" aria-current="page" onClick={() => {
                    this.handleLogin();
                }}>Login</a>
            </>



    }
    handleLogin = /*async*/ () => {
        /*
            + Thay đổi giá trị this.state
            + Xử lí render lại giao diện với giá trị setState mới
            + Hàm setState() là 1 hàm bất đồng bộ
        */
        // await this.setState({
        //     login : true
        // })
        this.setState({
            login: true
        }, () => {
            console.log(this.state)
        })
    }
    handleLogOut = () => {
        this.setState({
            login: false
        })
    }
    render() {
        return (
            <>
                <nav className="nav bg-dark justify-content-end">
                    {this.renderLogin()}
                    {/* {this.login ?
                    <span className='nav-link'>Hello {this.username}</span>
                    :
                    <a className="nav-link active" href="#" aria-current="page">Login</a>
                } */}
                </nav>
                <p className={`${style['bg-orange']}`}>Wassup</p>
                <span style={{
                    marginTop: '15px',
                    backgroundColor: 'black',
                    fontSize: '16px',
                    color: 'white'

                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, minima.</span>
            </>

        )
    }
}
