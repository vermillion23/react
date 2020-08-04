import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Simple Form</h2>
            <SimpleForm onSubmit={showResults} />
            {/*<Values form="simple" />*/}
        </div>
    </Provider>,
    rootEl
);
