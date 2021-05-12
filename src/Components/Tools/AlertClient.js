import React from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

export default function AlertClient({alert, setAlert}) {
    return <Snackbar open={alert} autoHideDuration={3000} onClose={() => setAlert("")}>
        <Alert onClose={() => setAlert("")} severity="error">
            {alert}
        </Alert>
    </Snackbar>
}