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
                        alt="Paella dish"
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
                    {props.date}
                </Typography>
                <Box className="Card-avatar-wrap">
                    {props.users.map(({username, avatar})=> (
                        <CardMedia
                            component="img"
                            height="36"
                            image={avatar}
                            alt={username}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}