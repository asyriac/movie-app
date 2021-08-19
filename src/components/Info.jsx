import placeholder from "../assets/placeholder.png";

const Info = ({ name, job, character, img_path }) => {
  const imgSrc = img_path ? `${process.env.REACT_APP_IMAGE_BASEURL}/${img_path}` : placeholder;
  return (
    <div className="image-container">
      <img src={imgSrc || placeholder} className="circular-img" alt={name} />
      <h3>{name}</h3>
      {character && <h5>{character}</h5>}
      {job && <h5>{job}</h5>}
    </div>
  );
};

export default Info;
