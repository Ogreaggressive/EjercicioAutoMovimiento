import mover from "./sumador.js";

describe("mover auto", () => {
  it("deberia mostrar posicion inicial 0,0N", () => {
    expect(mover()).toEqual("0,0N");
  });
  it("deberia moverse hacia el norte", () => {
    expect(mover("A")).toEqual("0,1N");
  });
  it("deberia cambiar de direccion a la derecha", () => {
    expect(mover("D")).toEqual("0,1E");
  });
  it("deberia cambiar de direccion a la izquierda", () => {
    expect(mover("I")).toEqual("0,1O");
  });
});
