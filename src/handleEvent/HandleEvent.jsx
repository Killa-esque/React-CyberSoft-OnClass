import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (event) => {
        console.log(event.target);
        let tag = event.target;
        tag.innerHTML = 'Clicked';
        tag.style.color = 'red';
        alert('Hello Cybersoft')
    }
    sayHello = (name) => {
        alert('hello ' + name)
    }
    render() {
        return (
            <div className='container'>
                <button className='btn btn-success' onClick={(event) => {
                    // Lấy ra thẻ từ biến Event: event.target sẽ là thẻ xảy ra sự kiện
                    console.log(event.target);
                    let tag = event.target;
                    tag.innerHTML = 'Clicked';
                    tag.style.color = 'red';
                    // alert('Hello Cybersoft')
                    this.sayHello('Quách Sang !!')
                }}>Click me!!!</button>
                <button className='btn btn-danger' onClick={this.handleClick.bind()}>Click Me!!</button>
            </div>
        )
    }
}
