import * as React from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './CreateProjectDialog.css'


export default function CreateProjectDialog (props) {
    const start = Date.now();
    const [value, setValue] = React.useState(dayjs(start));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

        return (
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <DialogTitle>Создать проект</DialogTitle>
                <DialogContent className="CreateProjectDialog">
                    <TextField id="name" label="Имя проекта" variant="outlined" />
                    <Button
                        variant="contained"
                        component="label"
                        color="secondary"
                    >
                        Лого проекта
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                    <TextField
                        margin="dense"
                        id="description"
                        label="Описание проекта"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={props.onClose}>Отмена</Button>
                    <Button variant="contained" onClick={props.onClose}>Создать</Button>
                </DialogActions>
            </Dialog>
        )
}