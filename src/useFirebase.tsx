import '@firebase/auth';
import * as firebase from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { child, getDatabase, onValue, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCFJkvEMUpk4GfwMb2UHGkc-fbRJnk7Z5s',
  authDomain: 'myilha.firebaseapp.com',
  projectId: 'myilha',
  storageBucket: 'myilha.appspot.com',
  messagingSenderId: '320725689136',
  appId: '1:320725689136:web:79c0a4f8fe52e977d7def5',
  measurementId: 'G-0CC5TKFG3M',
};

const useFirebase = () => {
  const app = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const spotsDataBaseRef = ref(database, '/spots');
  const chatsDataBaseRef = ref(database, '/chats');

  const registerApp = async () => {
    const res = await signInAnonymously(auth);
    return res.user.uid;
  };

  const syncSpot = (id: string, onUpdate: (i: TCurrentSpotReducer) => void) => {
    onValue(child(spotsDataBaseRef, id), async snapshot => {
      const data = (await snapshot.val()) as TCurrentSpotReducer;
      onUpdate(data);
    });
  };

  return { registerApp, syncSpot, app, chatsDataBaseRef };
};

export { useFirebase };
