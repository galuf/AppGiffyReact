import PropTypes from "prop-types";

const GridGifItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

GridGifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GridGifItem;
