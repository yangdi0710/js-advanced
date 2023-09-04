import html from "../core.js";
import { connect } from "../store.js";

const connector = connect()

function App({cars}){
    return html`
        <h1>Hello World</h1>
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>

        <button onclick="dispatch('ADD', 'Audi')">Add car</button>
    `
}

export default connector(App)