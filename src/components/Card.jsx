import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteCharacter } from "../redux/actions";
const Tarjeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 10px;
`;
const Card = ({ name, status, species, gender, image, id }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(deleteCharacter(id));
  };
  return (
    <Tarjeta>
      <button onClick={handleClose}>X</button>
      <h4>Name: {name}</h4>
      <img src={image} alt={name} />
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </Tarjeta>
  );
};

export default Card;
