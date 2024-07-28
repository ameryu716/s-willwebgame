// import "./app.css";
import "halfmoon/css/halfmoon.min.css";

import "./sass/main.scss";
import "./sass/common.scss";
import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app"),
});

export default app;
