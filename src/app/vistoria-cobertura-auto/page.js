"use client";
import React, { useState, useEffect } from "react";
import { LogoHeader } from "../components/components-group/logo-header";
import SelecaoOpcoes from "../components/components-group/caixa-cobertura";

export default function CoberturasAutomatizadas() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(false); 
  }, []);

  const handleButtonClick = () => {
    if (isButtonEnabled) {
      window.location.href = "/seguros";
    }
  };

  return (
    <main className="coberturas">
      <div>
        <LogoHeader
          srcPorto="images/logoporto (2).png"
          altPorto="Logo do Porto"
          srcSav="images/logosavfinal.png"
          altSav="Logo do Sav"
        />
        <br></br>
      </div>

      <div>
        <SelecaoOpcoes />
      </div>

    </main>
  );
}


    