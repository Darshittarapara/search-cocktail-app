import React from 'react';
import Navbar from '../Navbar';
import './MainHeader.css';
import logo from '../../asset/image/logo.svg';

export const MainHeader = (props) => {
    return (
        <div className='container-fluid header'>
            <div className='row'>
                <div className='col-8'>
                    <img src={logo} alt="app-logo" />
                </div>
                <div className='col-4'>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}