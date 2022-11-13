import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {
    state = {
        fSize: 20,//Xác định state là number => gán giá trị mặc định
        classMode: 'light',
        imgSrc: 'https://i.pravatar.cc?u=1'
    }

    render() {
        return (
            <div className='container-fluid'>
                <h3>Bài tập tăng giảm font-size</h3>
                <p style={{ fontSize: this.state.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto consequatur a ut iure provident quae odit quisquam voluptatem dolor?</p>
                <button className='btn btn-success mx-2' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize + 5
                    })
                }}>+</button>
                <button className='btn btn-success mx-2' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize - 5
                    })
                }}>-</button>
                <hr />
                <h3>Bài tập change theme</h3>
                <select className='w-25 form-control' onChange={(e) => {
                    const tagSelect = e.target;
                    this.setState({
                        classMode: tagSelect.value
                    })
                }}>
                    <option value="dark">Dark mode</option>
                    <option value="light">Light mode</option>
                </select>
                <div className={`border border-success p-5 mt-2 ${this.state.classMode}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae esse a consectetur ipsam autem atque molestias, quia ratione illo, dolores sequi itaque nihil necessitatibus quod, assumenda corporis quam. Dignissimos, doloremque?</p>
                </div>

                <div className='w-25 card'>
                    <img src={this.state.imgSrc} alt="..." />
                    <div className='card-body'>
                        <button className='btn btn-danger ' onClick={() => {
                            this.setState({
                                imgSrc: `https://i.pravatar.cc?u=${Math.floor(Math.random() * 100)}`
                            })
                        }}>Random</button>
                    </div>
                </div>
            </div>
        )
    }
}
