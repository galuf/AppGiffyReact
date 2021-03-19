import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Probando componente <GidExpertApp />", () => {
  let wraper = shallow(<GifExpertApp />);

  test("debe mostrarse correctamente", () => {
    expect(wraper).toMatchSnapshot();
  });

  test("debe tener una lista de categorias", () => {
    const categories = ["One Punch", "pandas"];

    const wraper = shallow(<GifExpertApp defaulCategories={categories} />);

    expect(wraper).toMatchSnapshot();
    expect(wraper.find("GifGrid").length).toBe(categories.length);
  });
});
