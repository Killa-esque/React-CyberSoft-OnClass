//rcc (react class component)
import React, { Component } from 'react'

export default class Card extends Component { // Tên class sẽ là tên thẻ
    render() { // Nội dung methods render sẽ là giao diện của thẻ (Giao diện của component sẽ chứa trong return)
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src="https://i.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        )
    }
}
