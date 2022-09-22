
var auto = {
  posx : 0,
  posy : 0,
  direccion: "N"
}

function mover(mov) {
  
  if(mov == "N")
  {
    auto.posy +=1;
  }
  return auto.posx.toString() + ',' + auto.posy.toString() + auto.direccion
}

export default mover;
