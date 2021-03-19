import getGifs from "../../services/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("Debe traes 10 elementos", async () => {
    const gifs = await getGifs("one Punch");
    //console.log(gifs.length);
    expect(gifs.length).toBe(10);
  });

  test("Debe traer 0 elementos con category no encontrada", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
