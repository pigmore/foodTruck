import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { initMap,genInfoMarker } from "./component/mapMaker";
import { db,doQueryByGeo } from "./component/firebase";

function App() {
  let points = []
  let queryState = false
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

  async function redoQuery(){
    console.log('cen')
    if (queryState) {
      return
    }
    queryState = true
    var cen = window.map.getCenter();
    points = await doQueryByGeo(cen.lat,cen.lng)    
    window.map.clearOverlays();
    genInfoMarker(points)
    queryState = false
  }

  return (
    <div>
      <div id="allmap" style={{height:'100vh'}}></div>
      <div className = 'tooltip'>
        <button className = 'toolBtn'
          onClick = {redoQuery}
        >Refresh</button>
      </div>

    </div>
  );
}

export default App;
