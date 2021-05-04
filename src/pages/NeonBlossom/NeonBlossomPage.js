import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NeonBlossomPage.css';

import originalBlossom from '../../assets/images/cherry-blossom-cropped.jpg';
import editedBlossom from '../../assets/images/cherry-blossom-phytoblue-cropped.jpg'

function NeonBlossomPage() {
        return (
            <div className='container' id="moz-reflect">
                <div className='neon-btn-container'>
                    <Link clasname='neon-button' to='/' >
                        ENTER
                    </Link>

                </div>
                <img classname='reflect-left'src={editedBlossom}/>
            </ div>
        )
};

export default NeonBlossomPage;