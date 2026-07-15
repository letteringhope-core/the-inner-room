import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCeJnvPBD7QCBfU4w7qdlkPCfm0kbQD1r4',
  authDomain: 'the-inner-room-ed60f.firebaseapp.com',
  projectId: 'the-inner-room-ed60f',
  storageBucket: 'the-inner-room-ed60f.firebasestorage.app',
  messagingSenderId: '551650016368',
  appId: '1:551650016368:web:d2d53b56333e275633c8b5',
  measurementId: 'G-TGXC3HBLES'
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
