import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Probando componente <AddCategory />", () => {
  const setCategories = jest.fn();

  let wraper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wraper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe mostrarse correctamente", () => {
    expect(wraper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wraper.find("input");
    const value = "Hola mundo";

    input.simulate("change", { target: { value } });

    expect(wraper.find("p").text().trim()).toBe(value);
  });

  test("No debe postear la informacion con Submit", () => {
    wraper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe llamar el setCategories y limpiar la caja de texto ", () => {
    const input = wraper.find("input");
    const value = "hola";
    input.simulate("change", { target: { value } });
    expect(wraper.find("p").text().trim()).toBe(value);

    wraper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
