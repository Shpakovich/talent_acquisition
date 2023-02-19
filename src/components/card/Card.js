import * as React from 'react';
import { styled } from '@mui/material/styles';
import './Card.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LinearProgressWithLabel from './LinearProgressWithLabel';
import {Box} from "@mui/material";
import CustomizedMenus from "./CustomizedMenus";

export default function RecipeReviewCard() {
    return (
        <Card className="Card" sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <CardMedia
                        component="img"
                        height="36"
                        image="https://free-png.ru/wp-content/uploads/2020/09/icon_sber-01-340x340.png"
                        alt="Paella dish"
                    />
                }
                action={
                    <CustomizedMenus />
                }
            />
            <CardContent>
                <Typography variant="h6" color="black" className="Project-title">
                    Sberseasons
                </Typography>
                <ul>
                    <li>Social media strategy</li>
                    <li>Social media branding</li>
                </ul>
                <LinearProgressWithLabel value='70%' />
            </CardContent>
            <CardContent className="Card-footer">
                <Typography variant="body2" color="text.second" className="Card-date">
                    23.03.2022
                </Typography>
                <Box className="Card-avatar-wrap">
                    <CardMedia
                        component="img"
                        height="36"
                        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                        alt="User1 name"
                    />
                    <CardMedia
                        component="img"
                        height="36"
                        image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="User2 name"
                    />
                </Box>
            </CardContent>
        </Card>
    );
}