"use client";
import { LogoHeader } from "../components/components-group/logo-header";
import { TituloTracoAzul } from "../components/components-group/titulo-traco-azul-ia";
import React, { useEffect, useState } from "react";
import MeuBotao from "../components/meu-botao";
import { BlocoFotoIAGeral } from "../components/components-group/bloco-foto-ia-geral";
import Footer from "../components/footer";

import { models} from '../const/teachableModels'
import EnviarFotosButton from "../components/botao-validacao-ia";

export default function Vistoria() {

      const predictImage = async (image, model) => {
        try {
            if (!model) return;
            const img = document.createElement("img");
            img.src = image?.url;
            await img.decode();
        
            const predictions = await model.predict(img);
        
            const maxFloatValue = Math.max(
              ...predictions.map((obj) => obj.probability)
            );
        
            const predictionData= predictions.map((p) => ({
              className: p.className,
              probability: p.probability === maxFloatValue ? p.probability : 0,
            }));
            console.log('predictionData', predictionData)

            return predictionData[0].probability > 0.6 

    
        } catch (error) {
            console.log('ERROR', error)
        }
        
      };


   

    return (
        <main>
            <div>
                <LogoHeader
                    srcPorto="images/logoporto (2).png"
                    altPorto="Logo do Porto"
                    srcSav="images/logosavfinal.png"
                    altSav="Logo do Sav"
                />
            </div>
            <div>
                <TituloTracoAzul
                    tituloText="Vamos lá: chegou a hora das fotos!"
                    tracoSrc="/images/pincelada azul.png"
                    tracoAlt="Descrição da Imagem"
                    paragrafoText="Para finalizar a primeira etapa do seu processo de vistoria, precisamos de 6 fotos específicas da sua Bike:"
                />
            </div>
            <div>
                <BlocoFotoIAGeral
                    subtitulo="FOTO 1"
                    texto="Uma foto do CHASSI da sua bike (o número de série geralmente está em uma das partes sinalizadas em azul ao lado)"
                    linkTexto="Tirar Foto"
                    imagemSrc="/images/ai-chassi.png"
                    imagemAlt="Imagem Chassi"
                    predictImage={predictImage}
                    modelToLoad={models.chassi}
                />  
            </div>
            <div>
                <BlocoFotoIAGeral
                    subtitulo="FOTO 2"
                    texto="Uma foto do SELIM da sua bike (banco)"
                    linkTexto="Tirar Foto"
                    imagemSrc="/images/ai-banco.png"
                    imagemAlt="Imagem Selim"
                    predictImage={predictImage}
                    modelToLoad={models.selim}

                />
            </div>
            <div>
                <BlocoFotoIAGeral
                    subtitulo="FOTO 3"
                    texto="Uma foto do GUIDÃO da sua bike"
                    linkTexto="Tirar Foto"
                    imagemSrc="/images/ai-guidao.png"
                    imagemAlt="Imagem Dianteiro"
                    predictImage={predictImage}
                    modelToLoad={models.guidao}

                />
            </div>
            <div>
                <BlocoFotoIAGeral
                    subtitulo="FOTO 4"
                    texto="Uma foto do PNEU DIANTEIRO da sua bike"
                    linkTexto="Tirar Foto"
                    imagemSrc="/images/ai-pneu-dianteiro.png"
                    imagemAlt="Imagem Selim"
                    predictImage={predictImage}
                    modelToLoad={models.pdianteiro}

                />
            </div>
            <div>
                <BlocoFotoIAGeral
                    subtitulo="FOTO 5"
                    texto="Uma foto do QUADRO da sua bike"
                    linkTexto="Tirar Foto"
                    imagemSrc="/images/ai-quadro.png"
                    imagemAlt="Imagem Quadro da Bicicleta"
                    predictImage={predictImage}
                    modelToLoad={models.quadro}

                />
            </div>
            <div>
                <BlocoFotoIAGeral
                    subtitulo="FOTO 6"
                    texto="Uma foto do SISTEMA DE TRANSMISSÃO e do PNEU TRASEIRO da sua bike"
                    linkTexto="Tirar Foto"
                    imagemSrc="/images/ai-traseiro.png"
                    imagemAlt="Imagem Quadro da Bicicleta"
                    predictImage={predictImage}
                    modelToLoad={models.ptraseiro}

                />
            </div>
            <MeuBotao text="Enviar Fotos" href="vistoria-cobertura-auto"/>
            <EnviarFotosButton href="vistoria-cobertura-auto"/>
            <Footer />

        </main>
    );
}
