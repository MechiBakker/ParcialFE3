import React from "react";

const Card = ({petName, petLastname, userName, selectAge }) =>{
  return (
    <div>
      <h3>Nombre de su mascota: {petName} </h3>
      <h3>Apellido de su mascota: {petLastname} </h3>
      <h3>Nombre de usuario: {userName} </h3>
      <h3>Edad de su mascota: {selectAge} </h3>
    </div>
  );
};

export default Card;
