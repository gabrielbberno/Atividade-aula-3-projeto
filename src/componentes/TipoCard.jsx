import React from "react";
function TipoCard({ nome, descricao }) {
    return (
        <article className="tipo-card">

            <div
                className="tipo-icone"
                aria-hidden="true"
            ></div>

            <h3>{nome}</h3>

            <p>{descricao}</p>

        </article>
    );
}

export default TipoCard;