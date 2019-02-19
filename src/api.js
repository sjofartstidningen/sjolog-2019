import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const db = firebase.firestore();

const scoreCollectionName =
  process.env.NODE_ENV !== 'production' ? 'score-dev' : 'score';
const scoreCollection = db.collection(scoreCollectionName);

const addScore = async score => {
  await scoreCollection.add({ score });
};

const getScores = onUpdate => {
  const unsubscribe = scoreCollection.onSnapshot(snaps => {
    const scores = [];
    snaps.forEach(snap => scores.push(snap.data()));
    onUpdate(scores);
  });

  return () => unsubscribe();
};

export { db, addScore, getScores };
