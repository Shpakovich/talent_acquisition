import * as React from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import {Box} from "@mui/material";
import CustomizedMenus from "./CustomizedMenus";

export default function RecipeReviewCard(props) {
    return (
        <Card className="Card" sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <CardMedia
                        component="img"
                        height="36"
                        image={props.logo}
                        alt="Project logo"
                    />
                }
                action={
                    <CustomizedMenus />
                }
            />
            <CardContent>
                <Typography variant="h6" color="black" className="Project-title">
                    {props.title}
                </Typography>
                <ul className="Project-tags ">
                    {props.tags.map((tag)=> (
                        <li>{tag}</li>
                    ))}
                </ul>
                <LinearProgressWithLabel value='70%' />
            </CardContent>
            <CardContent className="Card-footer">
                <Typography variant="body2" color="text.secondary" className="Card-date">
                    {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                    }).format(props.date)}
                </Typography>
                <Box className="Card-avatar-wrap">
                    {props.users.map(()=> (
                        <CardMedia
                            component="img"
                            height="36"
                            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                            alt="user avatar"
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}