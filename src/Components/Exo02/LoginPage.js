import React, {useState} from "react";
import {Button, Grid, Paper, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, TextField} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AlertClient from "../Tools/AlertClient";
import {BrowserRoute as Router, Route, useHistory} from 'react-router-dom';

export default function LoginPage({dataClient}) {
    const history = useHistory();
    const [alertMode, setAlertMode] = useState("");
    const [hidden, setHidden] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlePass = (event) => {
        setPassword(event.target.value)
    }

    const handleUser = (event) => {
        setUsername(event.target.value)
    }

    const handleLogIn  = () => {
        if (!username) {
            setAlertMode("No username set");
            return;
        }
        if (!password) {
            setAlertMode("No password set");
            return;
        }
        if (dataClient.findIndex(elem => elem.username === username && elem.password === password) === -1) {
            setAlertMode("No user found");
            return;
        }
        history.push('/')
    }

    const handleSignIn  = () => {
        history.push('/Exo03/sigin')
    }

    return <Grid container item xs={12} style={{height: '100vh'}} alignItems={'center'} justify={'center'}>
        <div style={{width: '100%', height: '100%', position: 'absolute', left: 0, top: 0}}>
            <img src={"./b-space.jpg"} style={{width: '100%', height: '100%'}} />
        </div>
        <Grid container item xs={11} md={4} lg={4} style={{height: '100%'}} alignItems={'center'}>
        <Paper elevation={5} style={{width: '100%', padding: 20, background: 'white', zIndex: 5}}>
            <Grid container item xs={12}>
                <img src={'./epitech-logo.png'} style={{width: '100%', marginBottom: 20}}/>
            </Grid>
            <Grid container item xs={12} style={{padding: 20}}>
                <Grid container item xs={12} style={{marginBottom: 20}}>
                    <TextField label="Username" style={{width: '100%'}} variant="outlined" value={username} onChange={handleUser} />
                </Grid>
                <Grid container item xs={12} style={{marginBottom: 20}}>
                    <FormControl variant="outlined" style={{width: '100%'}}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={hidden ? 'text' : 'password'}
                            value={password}
                            onChange={handlePass}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setHidden(!hidden)}
                                        onMouseDown={() => setHidden(!hidden)}
                                        edge="end"
                                    >
                                        {hidden ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>
                <Grid container item xs={12}>
                    <Button variant="contained" color="primary" style={{width: '100%'}} onClick={handleLogIn}>LOG-IN</Button>
                </Grid>
                {!!dataClient.length && <Grid container item xs={12} style={{marginTop: 10}}>
                    <Button variant="contained" color="secondary" style={{width: '100%'}} onClick={handleSignIn}>SIG-IN</Button>
                </Grid>}
            </Grid>
        </Paper>
        </Grid>
        <AlertClient alert={alertMode} setAlert={setAlertMode}/>
    </Grid>
}