import { DOMAIN_NAME, PORT } from "./constants.js";
import App, { printToday } from "./App.js";

const $body = document.querySelector("body");

$body.innerHTML = $body.innerHTML + `<div>${DOMAIN_NAME}</div>`;
$body.innerHTML = $body.innerHTML + `<div>${PORT}</div>`;

printToday();
new App();
