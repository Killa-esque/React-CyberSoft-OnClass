import React, { Component } from 'react'

export default class DataBinding extends Component {
    src = 'https://i.pravatar.cc?u=1';
    name = 'Quách Khải';
    renderCard = () =>{
        return <div>
                Hello {this.name}
            </div>
    }
    render() {
        const title = 'Cybersoft'
        return (
            <div className='container'>
                <p id='txt'>Title: {title}</p>
                <br />
                <img src={this.src} alt="" className='w-25' />
                {this.renderCard()}
            </div>
        )
    }
}
