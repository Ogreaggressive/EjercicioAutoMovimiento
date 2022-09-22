
class Auto{

  constructor()
  {
    Auto.posy = 0;
    Auto.posx = 0;
    Auto.direccion ='N';
  }

  elegirDireccion(mov)
  {
    let orientacion = ["O","N","E","S"]
    if(mov == "A")
    {
      if(Auto.direccion == "N")
      {
        Auto.posy +=1;
      }
      if(Auto.direccion == "S")
      {
        Auto.posy -=1;
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
      let cambio = orientacion.indexOf(Auto.direccion)
      Auto.direccion = orientacion[cambio + 1]
    }
    if(mov == "I")
    {
      let cambio = orientacion.indexOf(Auto.direccion)
      Auto.direccion = orientacion[cambio - 1]
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
