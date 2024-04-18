import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc,getDocs,query, orderBy, startAt,endAt,limit,writeBatch,doc,where } from "firebase/firestore";
import {geohashForLocation,geohashQueryBounds,distanceBetween} from 'geofire-common';
const firebaseConfig = {
  apiKey: "AIzaSyBPdrlaHEUypbmCH75-eyNPbRwsD-HNJM4",
  authDomain: "foodtruck-84ff0.firebaseapp.com",
  projectId: "foodtruck-84ff0",
  storageBucket: "foodtruck-84ff0.appspot.com",
  messagingSenderId: "766313935152",
  appId: "1:766313935152:web:652618a6e0cf646a7658f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function doQueryByGeo(la=37.7749295,ln=-122.4194155,dis=5*100) {
  const center = [la, ln];
  const bounds = geohashQueryBounds(center, dis);
  const promises = [];
  for (const b of bounds) {
    const q = query(
      collection(db, 'foodTrucks'),
      where("Status", "==", 'APPROVED'),
      orderBy('geohash'),

      startAt(b[0]),
      endAt(b[1]));

    promises.push(getDocs(q));
  }

  const snapshots = await Promise.all(promises);

  console.log(snapshots)
  const matchingDocs = [];
  const points = [];
  for (const snap of snapshots) {
    for (const doc of snap.docs) {
      const lat = doc.get('Latitude');
      const lng = doc.get('Longitude');
      const distanceInKm = distanceBetween([lat, lng], center);
      const distanceInM = distanceInKm * 100;
      if (distanceInM <= dis ) {
        matchingDocs.push(doc);
        points.push([lng,lat])
      }
    }
  }
  console.log(matchingDocs)
  return [matchingDocs,points]
}
