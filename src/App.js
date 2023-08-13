import { useState } from "react";
import Banner from "./componetes/Banner/Banner";
import Formulario from "./componetes/Formulario";
import Time from "./componetes/Time";
import Colaborador from "./componetes/Colaborador";

function App() {
  const times = [
    {
      nome: "Time verde",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },


    {
      nome: "Time azul",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },

    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },

    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },

    {
      nome: "UX e Design",
      corPrimaria: "#0B6EBF",
      corSecundaria: "#FAE9F3",
    },

    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },

    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },




  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)
      }
      />
      {times.map(time => <Time
        key={time.nome} nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}

    </div>
  );
}

export default App;
