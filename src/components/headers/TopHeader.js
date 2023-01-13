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

const HeaderList = ['All', 'Current', 'Finished', 'On Hold', 'Archive']

export default class TopHeader extends Component {
    render() {
        return(
            <section className="Top-header">
                <h1>Home</h1>
                <ButtonGroup variant="text" aria-label="text button group">
                    {HeaderList.map((name) => (
                        <Button>{name}</Button>
                    ))}
                </ButtonGroup>
                <Box component="span" sx={{ display: 'grid', gridAutoFlow: 'column' }}>
                    <IconButton color="secondary" aria-label="add an alarm">
                        <FontAwesomeIcon icon={solid('moon')} className='fa-xl' />
                    </IconButton>
                    <p>User Name</p>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </Box>
            </section>
        )
    }
}