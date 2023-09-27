    "use client";

    import { LogoHeader } from "../components/components-group/logo-header";
    import React from "react";
    import TituloCoberturas from "../components/titulo-coberturas";
    import { SubtituloCoberturas } from "../components/subtitulo-coberturas";
    import ParagrafoCobertura from "../components/paragrago-cobertura";
    import CaixaTexto from "../components/components-group/caixa-cobertura";

    export default function CoberturasAutomatizadas() {
        return (
            <main className="coberturas">
                <div>
                    <LogoHeader
                        srcPorto="images/logoporto (2).png"
                        altPorto="Logo do Porto"
                        srcSav="images/logosavfinal.png"
                        altSav="Logo do Sav"
                    />
                </div>
                <div>
                    <TituloCoberturas
                        tituloText="Chegou a hora mais importante!"
                    />
                </div>
                <div>
                    <ParagrafoCobertura
                        texto="Escolha as coberturas que mais fazem sentido para o seguro da sua Bike."
                        palavrasDestaque={[
                            { palavra: 'coberturas', cor: '#01a1fd', negrito: true },
                            { palavra: 'seguro', cor: '#0046c0', negrito: true },
                        ]}
                        corTexto="#ffffff"
                    />
                </div>
                <div>
                    <SubtituloCoberturas
                        tituloText="Selecione pelo menos 6 opções:"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Reparo de câmaras de ar"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Reparo ou troca de correntes"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Substituição ou regulagem de 
                        selim e canote de selim"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Substituição e regulagem manetes
                        de freio dianteiro e traseiro"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Substituição ou regulagem de freio
                        dianteiro e traseiro"
                    />
                </div>
                <div>
                <div>
                    <CaixaTexto
                        texto="Lubrificação de correntes e coroas"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Transporte do segurado e Bike - 
                        limite de 50km caso de acidente"
                    />
                </div>
                    <CaixaTexto
                        texto="Transporte do segurado e Bike - 
                        limite de 150km caso de acidente"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Instalação de suporte de parede 
                        e chão para a Bike"
                    />
                </div>
                <div>
                    <CaixaTexto
                        texto="Serviço de leva e traz com limite 
                        de 50km - agendamento prévio"
                    />
                </div>

            </main>
        );
    }
