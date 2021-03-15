const GridGifItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GridGifItem;
