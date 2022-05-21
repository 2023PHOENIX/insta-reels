// npm i firebase 
// src->firebase.js create

import { initializeApp } from '@firebase/app';
import {getAuth} from 'firebase/auth';
import secret from './secret';


let app = initializeApp(secret)

// from these lines we can include the firebase in reactApp.

export let auth = getAuth(app);
