
class Auto{

  constructor()
  {
    Auto.posy = 0;
    Auto.posx = 0;
    Auto.direccion ='N';
  }

  mover(mov) 
  {
    for(let i=0; i<mov.length; i++)
    {
      if(mov[i] == "A")
      {
        Auto.posy +=1;
      }
      if(mov[i] == "D")
      {
        Auto.direccion = "E";
      }
      if(mov[i] == "I")
      {
        Auto.direccion = "O";
      }
    }
    
    return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.direccion
  }
}
export default Auto;
