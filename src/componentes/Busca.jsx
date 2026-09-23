import React from "react";
import { useState } from "react";

function Busca() {
    const [textoBusca, setTextoBusca] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estilo, setEstilo] = useState("");
    const [idade, setIdade] = useState("");
    const [preco, setPreco] = useState("");

    function realizarBusca(evento) {
        evento.preventDefault();
    }

    const possuiFiltro =
        textoBusca ||
        categoria ||
        estilo ||
        idade ||
        preco;

    return (
        <section className="busca secao secao-animada" id="busca">
            <div className="container">

                <div className="secao-cabecalho">
                    <p className="secao-etiqueta">
                        Busca inteligente
                    </p>

                    <h2>
                        Conte o que você procura
                    </h2>

                    <p>
                        Use as informações sobre o jogo que deseja
                        encontrar para receber resultados e sugestões
                        semelhantes.
                    </p>
                </div>

                <form
                    className="busca-formulario"
                    onSubmit={realizarBusca}
                >
                    <div className="campo-grupo">
                        <label htmlFor="campo-busca">
                            O que você está procurando?
                        </label>

                        <input
                            type="search"
                            id="campo-busca"
                            value={textoBusca}
                            onChange={(evento) =>
                                setTextoBusca(evento.target.value)
                            }
                            placeholder="Exemplo: jogo de aventura com preço acessível"
                        />
                    </div>

                    <div className="filtros">

                        <div className="campo-grupo">
                            <label htmlFor="categoria">
                                Categoria
                            </label>

                            <select
                                id="categoria"
                                value={categoria}
                                onChange={(evento) =>
                                    setCategoria(evento.target.value)
                                }
                            >
                                <option value="">Todas</option>
                                <option value="aventura">Aventura</option>
                                <option value="plataforma">Plataforma</option>
                                <option value="suspense">Suspense</option>
                                <option value="estrategia">Estratégia</option>
                                <option value="rpg">RPG</option>
                                <option value="simulacao">Simulação</option>
                            </select>
                        </div>

                        <div className="campo-grupo">
                            <label htmlFor="estilo">
                                Estilo
                            </label>

                            <select
                                id="estilo"
                                value={estilo}
                                onChange={(evento) =>
                                    setEstilo(evento.target.value)
                                }
                            >
                                <option value="">Todos</option>
                                <option value="acao">Ação</option>
                                <option value="historia">
                                    Focado em história
                                </option>
                                <option value="cooperativo">
                                    Cooperativo
                                </option>
                                <option value="competitivo">
                                    Competitivo
                                </option>
                            </select>
                        </div>

                        <div className="campo-grupo">
                            <label htmlFor="idade">
                                Classificação etária
                            </label>

                            <select
                                id="idade"
                                value={idade}
                                onChange={(evento) =>
                                    setIdade(evento.target.value)
                                }
                            >
                                <option value="">Todas</option>
                                <option value="livre">Livre</option>
                                <option value="10">10 anos</option>
                                <option value="12">12 anos</option>
                                <option value="14">14 anos</option>
                                <option value="16">16 anos</option>
                                <option value="18">18 anos</option>
                            </select>
                        </div>

                        <div className="campo-grupo">
                            <label htmlFor="preco">
                                Faixa de preço
                            </label>

                            <select
                                id="preco"
                                value={preco}
                                onChange={(evento) =>
                                    setPreco(evento.target.value)
                                }
                            >
                                <option value="">Todas</option>
                                <option value="baixo">
                                    Preço acessível
                                </option>
                                <option value="medio">
                                    Preço médio
                                </option>
                                <option value="alto">
                                    Sem limite definido
                                </option>
                            </select>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="botao botao-busca"
                    >
                        Buscar jogo
                    </button>
                </form>

                <div
                    className="resultado-busca"
                    aria-live="polite"
                >
                    <article className="resultado-vazio">

                        {possuiFiltro ? (
                            <>
                                <h3>
                                    Informações selecionadas
                                </h3>

                                <p>
                                    Busca: {textoBusca || "Não informado"}
                                </p>

                                <p>
                                    Categoria: {categoria || "Todas"}
                                </p>

                                <p>
                                    Estilo: {estilo || "Todos"}
                                </p>

                                <p>
                                    Classificação: {idade || "Todas"}
                                </p>

                                <p>
                                    Preço: {preco || "Todas"}
                                </p>
                            </>
                        ) : (
                            <>
                                <h3>
                                    Não sabe exatamente o nome do jogo?
                                </h3>

                                <p>
                                    Descreva o tipo de experiência que
                                    você procura e receba sugestões de
                                    estilos e gêneros semelhantes.
                                </p>
                            </>
                        )}

                    </article>
                </div>

            </div>
        </section>
    );
}

export default Busca;