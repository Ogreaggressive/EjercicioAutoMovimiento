
var auto = {
  posx : 0,
  posy : 0,
  direccion: "N"
}

function mover(mov) {
  
  if(mov == "A")
  {
    auto.posy +=1;
  }
  if(mov == "D")
  {
    auto.direccion = "E";
  }

  return auto.posx.toString() + ',' + auto.posy.toString() + auto.direccion
}

export default mover;
