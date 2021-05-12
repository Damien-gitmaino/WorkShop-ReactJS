import React, {useState} from "react";
import {
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField, Typography
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AlertClient from "../Tools/AlertClient";
import {BrowserRoute as Router, Route, useHistory} from 'react-router-dom';

export default function SignInPage({dataClient, setDataClient}) {
    const history = useHistory();
    const [alertMode, setAlertMode] = useState("");
    const [hidden, setHidden] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const handlePass = (event) => {
        setPassword(event.target.value)
    }

    const handleCPass = (event) => {
        setCPassword(event.target.value)
    }

    const handleUser = (event) => {
        setUsername(event.target.value)
    }

    const handleSignIn  = () => {
        if (!username) {
            setAlertMode("No username set");
            return;
        }
        if (!password) {
            setAlertMode("No password set");
            return;
        }
        if (!cPassword || password !== cPassword) {
            setAlertMode("Confirm Wrong");
            return;
        }
        dataClient.push({username: username, password: password});
        setDataClient([...dataClient])
        history.push('/Exo1-3')
    }
    return <Grid container item xs={12} style={{height: '100vh'}} alignItems={'center'} justify={'center'}>
        <Grid container item xs={11} md={4} lg={4} style={{height: '100%'}} alignItems={'center'}>
            <Paper elevation={5} style={{width: '100%', padding: 20}}>
                <Grid container item xs={12} justify={'center'}>
                    <Typography variant="h6">Sign in</Typography>
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
                    <Grid container item xs={12} style={{marginBottom: 20}}>
                        <FormControl variant="outlined" style={{width: '100%'}}>
                            <InputLabel htmlFor="outlined-adornment-password-confirm">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-confirm"
                                type={hidden ? 'text' : 'password'}
                                value={cPassword}
                                onChange={handleCPass}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
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
                    <Grid container item xs={12} style={{marginTop: 10}}>
                        <Button variant="contained" color="secondary" style={{width: '100%'}} onClick={handleSignIn}>SIG-IN</Button>
                    </Grid>
                    <Grid container item xs={12} style={{marginTop: 10}}>
                        <Button variant="contained" color="primary" style={{width: '100%'}} onClick={() => history.push('/Exo1-3')}>BACK</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        <AlertClient alert={alertMode} setAlert={setAlertMode}/>
    </Grid>
}