"use client";
import React from 'react';
import { LogoHeader } from '../components/components-group/logo-header';
import SugestaoSeguro from '../components/components-group/sugestao-seguro';

export default function Seguros({ numCoberturas }) {
  return (
    <main className="coberturas">
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
    </main>
  );
}
