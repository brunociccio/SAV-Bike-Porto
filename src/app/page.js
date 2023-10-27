"use client";
import { LogoHeader } from "./components/components-group/logo-header";
import React from "react";
import MeuBotao from "./components/meu-botao";
import ParagrafoHome2 from "./components/components-group/paragrafo-home-2";
import Footer from "./components/footer";
import CaixaPesquisa from "./components/caixa-pesquisa";
import FotoHome from "./components/foto-home";
import MeuParagrafo from "./components/meu-paragrafo";
import { SubtituloFotoIA } from "./components/sub-titulo-ia";
import Carrossel from "./components/carrossel";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
            <CaixaPesquisa></CaixaPesquisa>
        </div>
        <div>
            <FotoHome></FotoHome>
        </div>
        <div>
            <MeuParagrafo text="Com o Sistema Automatizado de Vistorias da Porto, você assegura sua bicicleta de maneira rápida e eficaz,
                tudo online e sem sair de casa."/>
        </div>
        <div>
            <SubtituloFotoIA text="As suas pedaladas agora ficarão mais tranquilas e seguras!"/>
        </div>

        <div>
            <MeuBotao text="Começar sua Vistoria Online" href="/vistoria-home" />  
        </div>
        <div>
            <ParagrafoHome2 text="Biciletas com valores a partir de R$2000,00"/>
        </div>

        <div>
            <Carrossel/>
        </div>

        <Footer />
    </main>
    );
}


