const ApiKey = "wwAFAC9GwkVhHlgHumtmrG2T4tqSQ5Qv";

const getGifs = async (busqueda = "pandas") => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${busqueda}&limit=10`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGifs;
