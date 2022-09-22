import mover from "./sumador.js";

describe("mover auto", () => {
  it("deberia mostrar posicion inicial 0,0N", () => {
    expect(mover()).toEqual("0,0N");
  });
  it("deberia moverse hacia el norte", () => {
    expect(mover("N")).toEqual("0,1N");
  });
});
