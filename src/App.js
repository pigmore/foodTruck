import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { initMap,genInfoMarker } from "./component/mapMaker";
import { db,doQueryByGeo } from "./component/firebase";

function App() {
  let points = []
  useEffect(() => {
    initMap()
    async function init() {
      if (points.length == 0) {
        points = await doQueryByGeo()
        genInfoMarker(points)
      }else{
        genInfoMarker(points)
      }
    }
    init()
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
