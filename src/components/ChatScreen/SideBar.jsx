import React from 'react';
import './SideBar.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import UserCard from './UserCard';

const SideBar = props => {

    const [chats = [
        { id: '0', name: 'Diego Jujuy', lastMsg: 'hoy 10.45' },
        { id: '1', name: 'Maty Jujuy', lastMsg: 'ayer 2.45' },
        { id: '2', name: 'LoPresti', lastMsg: 'hoy 16.28' },
        { id: '3', name: 'PipiMisterioso', lastMsg: 'mier 20.55' },
        { id: '4', name: 'Jijiji', lastMsg: 'hoy 12.00' }
    ]] = useState();

    return (
        <div id='SideBarContainer'>
            <UserCard />
            <div>
                {chats.map(item =>
                    <div id='chatTab'>
                        <p id='userName'>{item.name}</p>
                        <p>{item.lastMsg}</p>
                    </div>)}
            </div>
        </div>
    );
};

SideBar.propTypes = {

};

export default SideBar;