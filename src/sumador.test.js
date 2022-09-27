import Auto from "./sumador.js";

let auto
describe("mover auto en grid", () => {
  beforeEach(() => {
    auto = new Auto();
  });
  it("deberia mostrar posicion inicial 0,0N", () => {
    expect(auto.ejecutar("")).toEqual("0,0N");
  });
  it("deberia ejecutarse hacia el norte", () => {
    expect(auto.ejecutar("A")).toEqual("0,1N");
  });
  it("deberia cambiar de direccion a la derecha", () => {
    expect(auto.ejecutar("D")).toEqual("0,0E");
  });
  it("deberia cambiar de direccion a la izquierda", () => {
    expect(auto.ejecutar("I")).toEqual("0,0O");
  });
  it("deberia de ejecutarse muchos pasos hacia el norte", () => {
    expect(auto.ejecutar("AAA")).toEqual("0,3N");
  });
  it("deberia de ejecutarse muchos pasos hacia el este", () => {
    expect(auto.ejecutar("ADAA")).toEqual("2,1E");
  });
  it("deberia de ejecutarse muchos pasos hacia el oeste", () => {
    expect(auto.ejecutar("ADAAIIAA")).toEqual("0,1O");
  });
  it("deberia de ejecutarse muchos pasos hacia el sur", () => {
    expect(auto.ejecutar("AAAAADDAAA")).toEqual("0,2S");
  });
  it("deberia de ejecutarse muchos pasos hacia el sur por distinto camino", () => {
    expect(auto.ejecutar("AAAAAIIAAA")).toEqual("0,2S");
  });
  it("deberia de ejecutarse por todo el mapa sin salir de los bordes, esta en bordes", () => {
    expect(auto.ejecutar("ADAAIADADAA")).toEqual("3,0S");
  });
  it("deberia de ejecutarse por todo el mapa sin salir de los bordes,no esta en bordes", () => {
    expect(auto.ejecutar("AIIAAA")).toEqual("se salio de bordes");
  });
});
