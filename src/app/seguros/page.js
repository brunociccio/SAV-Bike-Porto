"use client";
import React, { useState } from 'react';
import { LogoHeader } from '../components/components-group/logo-header';
import SugestaoSeguro from '../components/components-group/sugestao-seguro';
import SegurosPorto from '../components/bloco-seguros-porto';
import { useEffect } from 'react';

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
        <br />
        <SugestaoSeguro numCoberturas={numCoberturas} />
      </div>
      <br /> <br />
      <div>
        <SegurosPorto handleClick={handleButtonClick} />
      </div>
    </main>
  );
}
