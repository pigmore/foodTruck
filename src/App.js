import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const centerPoint = [-122.4194155,37.7749295]
  function initMap(){
    window.map = new window.BMapGL.Map("allmap");
    window.map.centerAndZoom(new window.BMapGL.Point(...centerPoint), 15);
    window.map.enableScrollWheelZoom(true);
  }

  useEffect(() => {
    initMap()
  },[])

  return (
    <div
      id="allmap"
      style={{height:'100vh'}}
    />
  );
}

export default App;
