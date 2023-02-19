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

const HeaderList = ['All', 'Current', 'Finished', 'On Hold', 'Archive']

export default function RecipeReviewCard() {
        return(
            <section className="Top-header">
                <h1 className="Header-title">{GetTitle()}</h1>
                <ButtonGroup className="Button-group" variant="text" aria-label="text button group">
                    {HeaderList.map((name) => (
                        <Button className="Button-filter">{name}</Button>
                    ))}
                </ButtonGroup>
                <Box component="div" sx={{ display: 'grid', gridAutoFlow: 'column' }}>
                    <IconButton aria-label="add an alarm">
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