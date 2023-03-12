import React, { useEffect } from 'react';
import RecipeReviewCard from "../card/Card";
import Fab from '@mui/material/Fab';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Projects.css';
import CreateProjectDialog from "../project/CreateProjectDialog";
import {TalentAcquisitionApi} from "../../api";
import {useStore} from "effector-react";
import {$project, setProject} from "../../store/project";

const myIcons = {
    plus: solid('plus'),
}


export default function Projects () {
    useEffect(() => {
        TalentAcquisitionApi.project.get()
            .then(data => setProject(data))
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const projectStore = useStore($project);
    return (
        <div className="Projects">
            <div className="Projects-grid">
                {projectStore?.map(({id, name, tags, description, logo, dateEnd, participants}) => (
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