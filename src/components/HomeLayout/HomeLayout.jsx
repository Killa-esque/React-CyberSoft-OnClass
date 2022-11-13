import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import Content from './Content'

export default class HomeLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='d-flex'>
                    <div className='w-25 h-50'>
                        <Navigation/>
                    </div>
                    <div className='w-75 h-50'>
                        <Content />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
