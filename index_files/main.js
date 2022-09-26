import * as THREE from "three"
import HALO from "vanta.halo.min.js"
import "./style.css"

const section = document.getElementsByTagName("section")[0]
var i = 0;
var txt = 'RavenB++';
var speed = 50; 


HALO({
  el: "#app",
  THREE,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0xca00d4,
  midtoneColor: 0xff0000,
  lowlightColor: 0xffed00,
  baseColor: 0x1c0036,
  blurFactor: 0.8,
  speed: 1.5,
})

$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});