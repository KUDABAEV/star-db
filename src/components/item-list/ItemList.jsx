import React from 'react';
import './item-list.css';

export default class ItemList extends React.Component {


    render() {
        return (
            <ul className='item-list list-group'>
                <li className='list-group-item'>
                    Luke SkyWalker
                </li>
                <li className='list-group-item'>
                    Darth Vader
                </li>
                <li className='list-group-item'>
                    R2-D2
                </li>
            </ul>
        );
    }
}
