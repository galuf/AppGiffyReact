import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Probando componente <GifGrid />", () => {
  const category = "pandas";

  test("Debe de mostrar el componente correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wraper = shallow(<GifGrid category={category} />);
    expect(wraper).toMatchSnapshot();
  });

  test("debe mostrar item cuando se carga imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://alex/alex.jpg",
        title: "alex",
      },
      {
        id: "ABCDE",
        url: "https://alex/alex.jpg",
        title: "alex",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wraper = shallow(<GifGrid category={category} />);

    expect(wraper).toMatchSnapshot();
    expect(wraper.find("p").exists()).toBe(false);
    expect(wraper.find("GridGifItem").length).toBe(gifs.length);
  });
});
