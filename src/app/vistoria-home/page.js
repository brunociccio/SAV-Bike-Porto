"use client";
import { LogoHeader } from "../components/components-group/logo-header";
import React from "react";
import MeuBotao from "../components/meu-botao";
import VideoSavIA from "../components/components-group/videosavia";
import { TituloHome } from "../components/components-group/titulo-home";
import ParagrafoHome from "../components/components-group/paragrafo-home";
import ParagrafoHome2 from "../components/components-group/paragrafo-home-2";
import Footer from "../components/footer";

export default function Home() {
    return (
    <main className="home">
        <div>
            <LogoHeader
                srcPorto="images/logoporto (2).png"
                altPorto="Logo do Porto"
                srcSav="images/logosavfinal.png"
                altSav="Logo do Sav"
            />
        </div>   
        <div>
                <TituloHome
                    tituloText="Bem-vindos!"
                    tracoSrc="/images/pincelada azul.png"
                    tracoAlt="Descrição da Imagem"
                />
        </div>
        <div>
        <ParagrafoHome
            texto="Comece agora a avaliação do Seguro ideal para a sua Bike, de maneira rápida e prática através do nosso sistema de vistoria 100% online."
            palavrasDestaque={[
                { palavra: 'Seguro', cor: '#01a1fd', negrito: true },
                { palavra: 'Porto', cor: '#01a1fd', negrito: true },
                { palavra: 'rápida', cor: '#0046c0', negrito: true },
                { palavra: 'prática', cor: '#0046c0', negrito: true },
            ]}
        />
        </div>
        <div>
            <VideoSavIA/>
        </div>
        <div>
            <MeuBotao text="Começar Vistoria" href="/vistoria" />  
        </div>
        <br></br>

        <Footer />
    </main>
    );
}
