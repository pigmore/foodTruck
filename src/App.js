import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { initMap,infoMarker } from "./component/mapMaker";
function App() {
  
  useEffect(() => {
    initMap()
    infoMarker()
  },[])

  return (
    <div
      id="allmap"
      style={{height:'100vh'}}
    />
  );
}

export default App;
