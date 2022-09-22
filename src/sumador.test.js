import mover from "./sumador.js";

describe("mover auto", () => {
  it("deberia mostrar posicion inicial 0,0N", () => {
    expect(mover()).toEqual("0,0N");
  });
});
