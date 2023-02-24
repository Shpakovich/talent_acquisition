import React, { Component } from 'react';
import './TopHeader.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import Avatar from '@mui/material/Avatar';
import {Box} from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { useLocation } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const HeaderList = ['All', 'Current', 'Finished', 'On Hold', 'Archive']

export default function RecipeReviewCard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

        return(
            <section className="Top-header">
                <h1 className="Header-title">{GetTitle()}</h1>
                <Tabs className="Button-group" value={value} onChange={handleChange} aria-label="basic tabs example">
                    {HeaderList.map((name) => (
                        <Tab label={name} />
                    ))}
                </Tabs>
                <Box component="div" sx={{ display: 'grid', gridAutoFlow: 'column', gap: '16px' }}>
                    <IconButton className="Top-header-theme-button">
                        <FontAwesomeIcon icon={solid('moon')} className='fa-xl' />
                    </IconButton>
                    <div className="Avatar-wrap">
                        <p>User Name</p>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    </div>
                </Box>
            </section>
        )
}

function GetTitle() {
    const location = useLocation();
    return location.pathname.slice(1).toUpperCase();
}