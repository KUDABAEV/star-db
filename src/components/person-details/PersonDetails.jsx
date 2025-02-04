import React from "react";
import './person-details.css';

export default class PersonDetails extends React.Component {

    render() {
        return (
            <div className='person-details card'>
                <img className='person-image' src="" alt=""/>
                <div className='card-body'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Gender</span>
                            <span>male</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Eye Color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}