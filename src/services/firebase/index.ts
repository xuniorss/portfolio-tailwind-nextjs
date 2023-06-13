import 'firebase/app'
import { initializeApp } from 'firebase/app'

import 'firebase/storage'
import { getStorage } from 'firebase/storage'

const firebaseConfig = initializeApp({
   apiKey: process.env.API_KEY,
   authDomain: process.env.AUTH_DOMAIN,
   projectId: process.env.PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
   appId: process.env.APP_ID,
})

const storage = getStorage(firebaseConfig)

export default storage
