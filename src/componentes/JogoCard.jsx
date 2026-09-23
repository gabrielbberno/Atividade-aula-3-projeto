import React from "react";
function JogoCard({
    nome,
    historia,
    estilo,
    preco,
    categoria,
    idade,
    imagemClasse
}) {
    return (
        <article className="jogo-card">

            <div
                className={`jogo-imagem ${imagemClasse}`}
                aria-hidden="true"
            >
                <span className="jogo-imagem-decoracao"></span>
            </div>

            <div className="jogo-conteudo">

                <div className="jogo-tags">
                    <span className="jogo-tag">
                        {categoria}
                    </span>

                    <span className="jogo-tag">
                        {idade}
                    </span>
                </div>

                <h3>{nome}</h3>

                <p className="jogo-historia">
                    {historia}
                </p>

                <p className="jogo-estilo">
                    <strong>Estilo:</strong> {estilo}
                </p>

                <p className="jogo-preco">
                    Preço: <strong>{preco}</strong>
                </p>

            </div>
        </article>
    );
}

export default JogoCard;