import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyDs8p3VPfIhfSzTBZGdKGCw5Ds5ByWZmN0',
  authDomain: 'sst-sjolog-2019.firebaseapp.com',
  databaseURL: 'https://sst-sjolog-2019.firebaseio.com',
  projectId: 'sst-sjolog-2019',
  storageBucket: 'sst-sjolog-2019.appspot.com',
  messagingSenderId: '771908910805',
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
