"use client";
import React, { useState } from 'react';
import { LogoHeader } from '../components/components-group/logo-header';
import SegurosPorto from '../components/bloco-seguros-porto';
import TituloSeguros from '../components/components-group/titulo-seguro';
import Footer from '../components/footer';

export default function Seguros({ numCoberturas }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = (selectedOption) => {
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== selectedOption));
    } else {
      setSelectedOptions([...selectedOptions, selectedOption]);
    }
  };

  const isButtonEnabled = selectedOptions.length >= 5;

  return (
    <main className="coberturas-2">
      <div>
        <LogoHeader
          srcPorto="images/logoporto (2).png"
          altPorto="Logo do Porto"
          srcSav="images/logosavfinal.png"
          altSav="Logo do Sav"
        />
      </div>  
      <br></br>

      <TituloSeguros
          titulo="Escolha seu seguro!"
          imagemSrc="/images/pincelada azul.png"
          texto="Você pode selecionar o seguro sugerido ou escolher um dos outros seguros abaixo. Clique no nome do seguro para ver mais informações, coberturas e valor."
          
        />
      <div>
        <SegurosPorto handleClick={handleButtonClick} />
      </div>
      <Footer />
    </main>
  );
}
