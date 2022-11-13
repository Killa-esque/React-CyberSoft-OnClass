import React, { Component } from 'react'
import Article from './Article'
import CardProduct from './CardProduct'

export default class DemoProps extends Component {
    data = {
        title: 'Quách Khải dạy cách làm giàu',
        content: 'Sinh ra vạch đích'
    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Product list</h3>
                <div className='row'>
                    <div className='col-4'>
                        <CardProduct name="Iphone X" price="1000" id="1" />
                    </div>
                    <div className='col-4'>
                        <CardProduct name="Iphone 14" price="3000" id="2" />
                    </div>
                </div>
                <hr />
                <h3>Blog</h3>
                <Article data={this.data} button={<button>Detail</button>}/>
            </div>
        )
    }
}
