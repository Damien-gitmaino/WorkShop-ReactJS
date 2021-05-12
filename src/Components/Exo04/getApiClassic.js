import React, {useState} from "react";
import {Grid, Paper, TextField, Button} from "@material-ui/core";
import axios from 'axios'
import AlertClient from "../Tools/AlertClient";

/*function ParsMeteo(data, checkMode, codeCountry) {
    meteo.push({feels_like: Number(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: Number(data.main.temp),
        city: data.name,
        description: data.weather[0].main,
        "unity":"Kelvin",
        "unitlogo":"°K",
        "countryCode":codeCountry.toLocaleLowerCase(),
        "checkbox": checkMode,
        country: codeCountry})
}*/



export default function GetApiClassic({}) {
    const [alertMode, setAlertMode] = useState("");
    const [cityName, setCityName] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [data, setData] = useState({});

    async function requestMeteo() {
        if (!countryCode) {
            setAlertMode("Missing argument Country Code")
            return;
        }
        if (!cityName) {
            setAlertMode("Missing argument City Name")
            return;
        }
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=6ca54e2480f70a210fb1b76e24f5ca3f`);

            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return <Grid container item xs={12} justify={'center'}>
        <Grid container item xs={7} justify={'center'}>
        <Paper elevation={5} style={{margin: 20, padding: 20}}>
            <Grid container item xs={12} justify={'space-around'}>
                <Grid container item xs={4}>
                    <TextField style={{width: '100%'}} label="City Name" variant="outlined" onChange={(event) => setCityName(event.target.value)}/>
                </Grid>
                <Grid container item xs={4}>
                    <TextField style={{width: '100%'}} label="Country Code" variant="outlined" onChange={(event) => setCountryCode(event.target.value)}/>
                </Grid>
                <Grid container item xs={2}>
                    <Button style={{width: '100%'}} variant="contained" color="primary" onClick={requestMeteo}>
                        GO
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </Grid>
        <Grid container item xs={12}>
            {JSON.stringify(data)}
        </Grid>
        <AlertClient alert={alertMode} setAlert={setAlertMode}/>
    </Grid>
}