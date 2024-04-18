import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { initMap,infoMarker } from "./component/mapMaker";
import { db } from "./component/firebase";
import { collection, getDocs, query, limit} from "firebase/firestore";

function App() {

  async function doQuery() {
    const q = query(
      collection(db, "foodTrucks"),
      limit(20)
    );
    const querySnapshot = await getDocs(q);
    console.log('querySnapshot',querySnapshot)

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

  useEffect(() => {
    initMap()
    infoMarker()
    doQuery()
  },[])

  return (
    <div
      id="allmap"
      style={{height:'100vh'}}
    />
  );
}

export default App;
