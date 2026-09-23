import React from "react";
import { useState } from "react";

function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    function alternarMenu() {
        setMenuAberto(!menuAberto);
    }

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <header className="cabecalho">
            <div className="container cabecalho-container">

                <a
                    href="#inicio"
                    className="logo"
                    onClick={fecharMenu}
                >
                    Game<span>On</span>
                </a>

                <button
                    className="menu-botao"
                    type="button"
                    aria-label="Abrir menu"
                    aria-expanded={menuAberto}
                    aria-controls="menu-navegacao"
                    onClick={alternarMenu}
                >
                    <span className="menu-icone"></span>
                    <span className="menu-icone"></span>
                    <span className="menu-icone"></span>
                </button>

                <nav
                    className={`navegacao ${
                        menuAberto ? "ativo" : ""
                    }`}
                    id="menu-navegacao"
                >
                    <ul className="menu-lista">
                        <li>
                            <a
                                href="#inicio"
                                className="menu-link"
                                onClick={fecharMenu}
                            >
                                Início
                            </a>
                        </li>

                        <li>
                            <a
                                href="#tipos"
                                className="menu-link"
                                onClick={fecharMenu}
                            >
                                Tipos
                            </a>
                        </li>

                        <li>
                            <a
                                href="#busca"
                                className="menu-link"
                                onClick={fecharMenu}
                            >
                                Buscar
                            </a>
                        </li>

                        <li>
                            <a
                                href="#recomendacoes"
                                className="menu-link"
                                onClick={fecharMenu}
                            >
                                Recomendações
                            </a>
                        </li>

                        <li>
                            <a
                                href="#sobre"
                                className="menu-link"
                                onClick={fecharMenu}
                            >
                                Sobre
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Cabecalho;