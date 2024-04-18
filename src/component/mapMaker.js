const centerPoint = [-122.4194155,37.7749295]
export function initMap(){
  window.map = new window.BMapGL.Map("allmap");
  window.map.centerAndZoom(new window.BMapGL.Point(...centerPoint), 15);
  window.map.enableScrollWheelZoom(true);
}

export function infoMarker() {

  var marker = new window.BMapGL.Marker(new window.BMapGL.Point(...centerPoint));
  window.map.addOverlay(marker);
  // 创建图文信息窗口
  var sContent = `<h4 style='margin:0 0 5px 0;'>Title</h4>
      <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
      Contents...Contents...Contents...
      </p></div>`;
  var infoWindow = new window.BMapGL.InfoWindow(sContent);
  // marker添加点击事件
  marker.addEventListener('click', function () {
      this.openInfoWindow(infoWindow);
  });
  marker.addEventListener('ontouchstart', function () {
      this.openInfoWindow(infoWindow);
  });
}
