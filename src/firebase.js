// npm i firebase 
// src->firebase.js create

import { initializeApp } from '@firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import secret from './secrets';


let app = initializeApp(secret)

// from these lines we can include the firebase in reactApp.

export let auth = getAuth(app);
export let db = getFirestore(app);