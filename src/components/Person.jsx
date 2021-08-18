import placeholder from "../assets/placeholder-person.png";

const Person = ({ details }) => {
  const imgSrc = details.profile_path ? `${process.env.REACT_APP_IMAGE_BASEURL}/${details.profile_path}` : placeholder;

  console.log(placeholder);
  console.log(details);
  return (
    <div className="person-container">
      <img src={imgSrc || placeholder} className="person-img" />
      <h3>{details.name}</h3>
      <h5>{details.character}</h5>
    </div>
  );
};

export default Person;
