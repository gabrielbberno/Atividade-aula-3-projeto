import React from "react";
import { useEffect } from "react";

function Hero() {
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            typeof window.Rellax === "function"
        ) {
            const rellax = new window.Rellax(".rellax");

            return () => {
                if (rellax && typeof rellax.destroy === "function") {
                    rellax.destroy();
                }
            };
        }
    }, []);

    return (
        <section className="hero secao-animada" id="inicio">
            <div className="container hero-container">

                <div className="hero-conteudo">
                    <p className="hero-subtitulo">
                        Encontre jogos do seu jeito
                    </p>

                    <h1>
                        Seu próximo jogo começa no <span>GameOn</span>
                    </h1>

                    <p className="hero-descricao">
                        Descubra jogos por categorias, estilos, preço e
                        classificação etária. Se não encontrar exatamente
                        o que procura, receba sugestões de jogos e gêneros
                        semelhantes.
                    </p>

                    <a
                        href="#busca"
                        className="botao botao-principal"
                    >
                        Procurar um jogo
                    </a>
                </div>

                <div
                    className="hero-arte rellax"
                    data-rellax-speed="-2"
                >
                    <svg
                        className="celular-svg"
                        viewBox="0 0 300 600"
                    >
                        <rect
                            className="celular-corpo"
                            x="25"
                            y="10"
                            width="250"
                            height="580"
                            rx="35"
                        />

                        <rect
                            className="celular-tela"
                            x="40"
                            y="45"
                            width="220"
                            height="500"
                            rx="20"
                        />

                        <rect
                            className="tela-topo"
                            x="40"
                            y="45"
                            width="220"
                            height="70"
                            rx="20"
                        />

                        <circle
                            className="camera-celular"
                            cx="150"
                            cy="28"
                            r="6"
                        />

                        <text
                            className="logo-svg"
                            x="150"
                            y="90"
                            textAnchor="middle"
                        >
                            GAMEON
                        </text>

                        <rect
                            className="busca-svg"
                            x="60"
                            y="135"
                            width="180"
                            height="35"
                            rx="10"
                        />

                        <text
                            className="texto-busca-svg"
                            x="75"
                            y="157"
                        >
                            Qual jogo você procura?
                        </text>

                        <rect
                            className="card-jogo-svg"
                            x="60"
                            y="195"
                            width="85"
                            height="120"
                            rx="12"
                        />

                        <rect
                            className="card-jogo-svg"
                            x="155"
                            y="195"
                            width="85"
                            height="120"
                            rx="12"
                        />

                        <rect
                            className="card-jogo-svg"
                            x="60"
                            y="335"
                            width="180"
                            height="80"
                            rx="12"
                        />

                        <circle
                            className="icone-svg"
                            cx="82"
                            cy="225"
                            r="18"
                        />

                        <circle
                            className="ia-icone-svg"
                            cx="90"
                            cy="375"
                            r="20"
                        />

                        <text
                            className="texto-ia-svg"
                            x="125"
                            y="365"
                        >
                            Sugestão inteligente
                        </text>

                        <text
                            className="texto-ia-svg"
                            x="125"
                            y="390"
                        >
                            para você
                        </text>

                        <rect
                            className="botao-svg"
                            x="85"
                            y="450"
                            width="130"
                            height="40"
                            rx="15"
                        />

                        <text
                            className="texto-botao-svg"
                            x="150"
                            y="475"
                            textAnchor="middle"
                        >
                            EXPLORAR
                        </text>
                    </svg>
                </div>

            </div>
        </section>
    );
}

export default Hero;