import React, { Component } from 'react';
import './SideHeader.css';
import { ReactComponent as Logo } from './../../assets/images/Logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';


// you'd put all valid values that can come from the backend here
const myIcons = {
    progress: solid('bars-progress'),
    user: solid('user'),
    'clipboard-list': solid('clipboard-list'),
    chart: solid('chart-pie'),
    envelope: solid('envelope'),
    gear: solid('gear'),
    'magnifying-glass': solid('magnifying-glass'),
}


const headerList = [{
    name: 'Projects',
    icon: 'progress',
    link: 'projects',
},{
    name: 'analytics',
    icon: 'chart',
    link: 'analytics',
},{
    name: 'Interview',
    icon: 'clipboard-list',
    link: 'interview',
},{
    name: 'Mail',
    icon: 'envelope',
    link: 'mail',
}];
const optionList = [{
    name: 'Settings',
    icon: 'gear',
    link: 'settings',
},{
    name: 'Find',
    icon: 'magnifying-glass',
    link: 'find',
}];
export default class SideHeader extends Component {
    render() {
        return(
            <header className="App-header">
                <Logo style={{margin: 'auto'}} />
                <div className="main">
                    {headerList.map(({ name, icon, link }) => (
                        <NavLink to={link} className={`header-link ${({ isActive }) => (isActive && 'active')}`} key={name}>
                            <FontAwesomeIcon icon={myIcons[icon]} className='fa-2x' />
                        </NavLink>
                    ))}
                </div>
                <div className="option">
                    {optionList.map(({ name, icon, link }) => (
                        <NavLink to={link} className={`header-link ${({ isActive }) => (isActive && 'active')}`} key={name}>
                            <FontAwesomeIcon icon={myIcons[icon]} className='fa-xl' />
                        </NavLink>
                    ))}
                </div>
            </header>
        )
    }
}