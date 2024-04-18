import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { initMap,infoMarker } from "./component/mapMaker";
import { db,doQueryByGeo } from "./component/firebase";

function App() {

  useEffect(() => {
    initMap()
    infoMarker()
    // doQueryByGeo()
  },[])

  return (
    <div
      id="allmap"
      style={{height:'100vh'}}
    />
  );
}

export default App;
