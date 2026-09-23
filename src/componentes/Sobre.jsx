import React from "react";
function Sobre() {
    return (
        <section
            className="sobre secao secao-animada"
            id="sobre"
        >
            <div className="container sobre-container">

                <div className="sobre-conteudo">

                    <p className="secao-etiqueta">
                        Sobre o GameOn
                    </p>

                    <h2>
                        Uma forma mais simples de encontrar jogos
                    </h2>

                    <p>
                        O GameOn foi pensado para facilitar a procura por
                        jogos, permitindo que o usuário considere diferentes
                        informações antes de escolher o que deseja jogar.
                    </p>

                    <p>
                        Quando um jogo específico não é encontrado, a proposta
                        é apresentar alternativas com características e gêneros
                        semelhantes.
                    </p>

                </div>

                <div className="sobre-destaques">

                    <article className="destaque-item">
                        <h3>Tipos e estilos</h3>
                        <p>
                            Explore diferentes formas de jogar.
                        </p>
                    </article>

                    <article className="destaque-item">
                        <h3>Preço acessível</h3>
                        <p>
                            Encontre opções de acordo com o seu orçamento.
                        </p>
                    </article>

                    <article className="destaque-item">
                        <h3>Sugestões inteligentes</h3>
                        <p>
                            Descubra alternativas semelhantes ao que procura.
                        </p>
                    </article>

                </div>

            </div>
        </section>
    );
}

export default Sobre;