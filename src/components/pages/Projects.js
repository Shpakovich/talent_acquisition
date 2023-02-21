import React, { Component } from 'react';
import RecipeReviewCard from "../card/Card";
import Fab from '@mui/material/Fab';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Projects.css';

const myIcons = {
    plus: solid('plus'),
}

const ProjectsArray = [{
    title: 'Sberseasons',
    logo: 'https://free-png.ru/wp-content/uploads/2020/09/icon_sber-01-340x340.png',
    tags: [
        'Social media strategy',
        'Social media branding'
    ],
    date: "23.03.2022",
    users: [{
        username: 'User1',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    },{
        username: 'User2',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    }]
}];

export default class Projects extends Component {
    render() {
        return (
            <div className="Profile">
                {ProjectsArray.map(({title, logo, tags, date, users})=> (
                    <RecipeReviewCard logo={logo} title={title} tags={tags} date={date} users={users} />
                ))}
                <Fab color="primary" aria-label="add" className="Project-Add-Button">
                    <FontAwesomeIcon icon={myIcons['plus']} className='fa-2x' />
                </Fab>
            </div>
        )
    }
}