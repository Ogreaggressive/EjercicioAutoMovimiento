import Auto from "./sumador.js";

let auto
describe("auto.mover auto", () => {
  beforeEach(() => {
    auto = new Auto();
  });
  it("deberia mostrar posicion inicial 0,0N", () => {
    expect(auto.mover("")).toEqual("0,0N");
  });
  it("deberia moverse hacia el norte", () => {
    expect(auto.mover("A")).toEqual("0,1N");
  });
  it("deberia cambiar de direccion a la derecha", () => {
    expect(auto.mover("D")).toEqual("0,0E");
  });
  it("deberia cambiar de direccion a la izquierda", () => {
    expect(auto.mover("I")).toEqual("0,0O");
  });
  it("deberia de moverse muchos pasos hacia el norte", () => {
    expect(auto.mover("AAA")).toEqual("0,3N");
  });
  it("deberia de moverse muchos pasos hacia el este", () => {
    expect(auto.mover("ADAA")).toEqual("2,1E");
  });
});
