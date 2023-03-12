import React, { useState, useEffect } from 'react';
import RecipeReviewCard from "../card/Card";
import Fab from '@mui/material/Fab';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Projects.css';
import CreateProjectDialog from "../project/CreateProjectDialog";
import {TalentAcquisitionApi} from "../../api";

const myIcons = {
    plus: solid('plus'),
}


export default function Projects () {
    const [ProjectsArray, setProjectsArray] = useState(null);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:4000/api/project')
            .then(response => response.json())
            .then(data => setProjectsArray(data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    console.debug(ProjectsArray)

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Projects">
            <div className="Projects-grid">
                {ProjectsArray?.map(({id, name, tags, description, logo, dateEnd, participants}) => (
                    <RecipeReviewCard
                        className="Projects-card"
                        key={id}
                        logo={logo}
                        title={name}
                        tags={tags}
                        description={description}
                        date={dateEnd}
                        users={participants}
                    />
                ))}
            </div>
            <CreateProjectDialog onClose={handleClose} open={open}/>
            <Fab color="primary" aria-label="add" className="Projects-Add-Button" onClick={handleClickOpen}>
                <FontAwesomeIcon icon={myIcons['plus']} className='fa-2x'/>
            </Fab>
        </div>
    )
}