
class Auto{

  constructor()
  {
    Auto.posy = 0;
    Auto.posx = 0;
    Auto.direccion ='N';
  }

  elegirDireccion(mov)
  {
    if(mov == "A")
    {
      if(Auto.direccion == "N")
      {
        Auto.posy +=1;
      }
      else if (Auto.direccion == "E"){
        Auto.posx +=1;
      }
      else if (Auto.direccion == "O"){
        Auto.posx -=1;
      }
    }
    if(mov == "D")
    {
      Auto.direccion = "E";
    }
    if(mov == "I")
    {
      Auto.direccion = "O";
    }
  }

  mover(mov) 
  {
    for(let i=0; i<mov.length; i++)
    {
      this.elegirDireccion(mov[i])
    }
    
    return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.direccion
  }
}
export default Auto;
