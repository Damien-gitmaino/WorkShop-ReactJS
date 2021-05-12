import React, {useState} from "react";
import {BrowserRoute as Router, Route, useHistory} from 'react-router-dom';
import LoginPage from "../Exo1/LoginPage";
import SignInPage from "./SignInPage";

export default function CoreExo2({}) {
    const [dataClient, setDataClient] = useState([{username: 'admin', password: 'admin'}]);

    return <>
        <Route path={"/Exo1-3"} exact>
            <LoginPage dataClient={dataClient}/>
        </Route>
        <Route path={"/Exo1-3/sigin"}>
            <SignInPage dataClient={dataClient} setDataClient={setDataClient}/>
        </Route>
    </>
}