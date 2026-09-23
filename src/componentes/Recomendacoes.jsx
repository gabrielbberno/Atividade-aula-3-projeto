import React from "react";
import JogoCard from "./JogoCard";

function Recomendacoes() {
    const jogos = [
        {
            nome: "Horizonte Perdido",
            historia:
                "Uma aventura fictícia sobre explorar terras desconhecidas em busca de respostas.",
            estilo: "exploração e narrativa.",
            preco: "R$ 29,90",
            categoria: "Aventura",
            idade: "12 anos",
            imagemClasse: "jogo-imagem-um"
        },
        {
            nome: "Pixel Jump",
            historia:
                "Um personagem precisa atravessar diferentes mundos enfrentando desafios e obstáculos.",
            estilo: "plataforma e desafios.",
            preco: "R$ 19,90",
            categoria: "Plataforma",
            idade: "Livre",
            imagemClasse: "jogo-imagem-dois"
        },
        {
            nome: "Sombras da Noite",
            historia:
                "Uma investigação misteriosa leva o jogador a descobrir acontecimentos escondidos no passado.",
            estilo: "suspense e investigação.",
            preco: "R$ 39,90",
            categoria: "Suspense",
            idade: "16 anos",
            imagemClasse: "jogo-imagem-tres"
        }
    ];

    return (
        <section
            className="recomendacoes secao secao-animada"
            id="recomendacoes"
        >
            <div className="container">

                <div className="secao-cabecalho">
                    <p className="secao-etiqueta">
                        Sugestões
                    </p>

                    <h2>
                        Jogos que podem combinar com você
                    </h2>

                    <p>
                        Conheça opções organizadas por estilo,
                        classificação etária e preço.
                    </p>
                </div>

                <div className="jogos-grade">
                    {jogos.map((jogo) => (
                        <JogoCard
                            key={jogo.nome}
                            nome={jogo.nome}
                            historia={jogo.historia}
                            estilo={jogo.estilo}
                            preco={jogo.preco}
                            categoria={jogo.categoria}
                            idade={jogo.idade}
                            imagemClasse={jogo.imagemClasse}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Recomendacoes;