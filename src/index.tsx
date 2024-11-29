/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'
import "@fortawesome/fontawesome-free/css/all.css";


const root = document.getElementById('root')

render(() => <App />, root!)
