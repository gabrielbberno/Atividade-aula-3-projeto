import React from "react";
import TipoCard from "./TipoCard";

function Tipos() {
    const tipos = [
        {
            nome: "Aventura",
            descricao: "Histórias, exploração e grandes jornadas."
        },
        {
            nome: "Plataforma",
            descricao: "Desafios, fases e obstáculos para superar."
        },
        {
            nome: "Suspense",
            descricao: "Mistérios e experiências cheias de tensão."
        },
        {
            nome: "Estratégia",
            descricao: "Planejamento e decisões para alcançar a vitória."
        },
        {
            nome: "RPG",
            descricao: "Personagens, escolhas e evolução durante a jornada."
        },
        {
            nome: "Simulação",
            descricao: "Experiências inspiradas em situações e atividades diversas."
        }
    ];

    return (
        <section className="tipos secao secao-animada" id="tipos">
            <div className="container">

                <div className="secao-cabecalho">
                    <p className="secao-etiqueta">
                        Explore
                    </p>

                    <h2>
                        Encontre jogos pelo seu estilo
                    </h2>

                    <p>
                        Navegue por diferentes tipos de jogos e descubra
                        novas experiências.
                    </p>
                </div>

                <div className="tipos-grade">
                    {tipos.map((tipo) => (
                        <TipoCard
                            key={tipo.nome}
                            nome={tipo.nome}
                            descricao={tipo.descricao}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Tipos;