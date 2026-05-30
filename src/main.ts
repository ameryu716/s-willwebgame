// import "./app.css";
import "halfmoon/css/halfmoon.min.css";

import "./sass/main.scss";
import "./sass/common.scss";
import { mount } from "svelte";
import App from "./App.svelte";

const target = document.getElementById("app");
if (target) {
    mount(App, {
        target,
    });
}
