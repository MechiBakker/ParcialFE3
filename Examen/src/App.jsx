import { useState } from "react";
import "./App.css";
import Card from "./Card";


export function App() {
  const [petName, setPetName] = useState("");
  const [petLastname, setPetLastname] = useState("");
  const [userName, setUserName] = useState("");
  const [selectAge, setSelectAge] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangePetName = (event) => {
    setPetName(event.target.value);
  };
  const onChangePetLastname = (event) => {
    setPetLastname(event.target.value);
  };
  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeSelectAge = (event) => {
    setSelectAge(event.target.value);
  };

  const validPetName = (petName) => {
    const withoutSpace = petName.trim();

    if (withoutSpace.length >= 4) {
      return true;
    } else {
      setErrorSelect("El nombre de tu mascota no es válido");
      return false;
    }
  };

  const validPetLastname = (petLastname) => {
    const withoutSpace = petLastname.trim();

    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setErrorSelect("El apellido de tu mascota no es válido");
      return false;
    }
  };

  const validUserName = (userName) => {
    const withoutSpace = userName.trim();

    if (withoutSpace.length >= 6) {
      return true;
    } else {
      setErrorSelect("El usuario de tu mascota no es válido");
      return false;
    }
  };

  const completeInput = (petName, petLastname, userName) => {
    if (petName === "" || petLastname === "" || userName === "") {
      setErrorSelect("Por favor chequea que la información sea correcta");
      setSend(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isPetNameValid = validPetName(petName);

    const isPetLastnameValid = validPetLastname(petLastname);
    
    const isUserNameValid = validPetName(userName);

    const isCompleteInput = completeInput(petName, petLastname, userName);

    if (selectAge === "") {
      setErrorSelect("seleccionar la edad de su mascota");

      return;
    }

    if (isPetNameValid && isPetLastnameValid && isUserNameValid && isCompleteInput) {
      setSend(true);
      setErrorSelect("");
    }
  };

  return (
    <div className="App">
      <h1>Conociendo a tu mascota</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Nombre de la mascota"
          value={petName}
          onChange={onChangePetName}
        />
        <input
          type="text"
          placeholder="Apellido de la mascota"
          value={petLastname}
          onChange={onChangePetLastname}
        />
        <input
          type="text"
          placeholder="Usuario"
          value={userName}
          onChange={onChangeUserName}
        />

        <select
          placeholder="¿Cuál es la edad de tu mascota?"
          value={selectAge}
          onChange={onChangeSelectAge}
        >
          <option value=""disabled default>
            Edad
          </option>
          <option value="Cachorro">Cahorro</option>
          <option value="Adulto">Adulto</option>
          <option value="Anciano">Anciano</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
      <div className="Error">{errorSelect}</div>
      {send && (
        <Card
          petName={petName}
          petLastname={petLastname}
          userName={userName}
          selectAge={selectAge}
        />
      )}
    </div>
  );
}

export default App;
