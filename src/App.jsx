import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Hero from "./componentes/Hero";
import Tipos from "./componentes/Tipos";
import Busca from "./componentes/Busca";
import Recomendacoes from "./componentes/Recomendacoes";
import Sobre from "./componentes/Sobre";
import Rodape from "./componentes/Rodape";
function App() {
    return (
        <>
            <Cabecalho />

            <main>
                <Hero />
                <Tipos />
                <Busca />
                <Recomendacoes />
                <Sobre />
            </main>

            <Rodape />
        </>
    );
}

export default App;