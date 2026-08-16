import { useState } from "react";
import styled from "styled-components";

interface BotaoProps {
    $adicionado: boolean;
}

const Card = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 12px;
    background-color: #f5f5f5;
`;

const Titulo = styled.h2`
    margin-bottom: 10px;
`;

const Preco = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;

const Botao = styled.button<BotaoProps>`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;

    background-color: ${({ $adicionado }) =>
        $adicionado ? "#198754" : "#6c757d"};
`;

export function CardProduto() {
    const [adicionado, setAdicionado] = useState(true);

    function adicionarProduto() {
        setAdicionado(false);
    }

    return (
        <Card>
            <Titulo>Notebook</Titulo>

            <Preco>R$ 2.500,00</Preco>

            <Botao
                $adicionado={adicionado}
                onClick={adicionarProduto}
            >
                Adicionar ao carrinho
            </Botao>
        </Card>
    );
}