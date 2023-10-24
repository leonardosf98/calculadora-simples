# Calculadora JS, HMTL e CSS

Este é um código programado em JavaScript que implementa uma calculadora simples que pode realizar operações de adição, subtração, multiplicação e divisão. O código utiliza eventos do DOM para interagir com os elementos HTML e atualizar o visor da calculadora.

## Instruções

Visor da Calculadora: O visor da calculadora é representado pelo elemento de input com o ID "input\_\_calculadora". Os números e operadores são inseridos e exibidos neste visor.

Botões de Números: Clique nos botões numéricos para inserir números no visor. Apenas números são permitidos no visor.

Operadores: Clique nos botões de operadores (+, -, \*, /) para selecionar a operação desejada. Você pode realizar apenas uma operação por vez.

Igual (=): Clique no botão "Igual" para calcular o resultado da operação.

Apagar (C): Clique no botão "Apagar" para limpar o visor da calculadora e recomeçar.

## Funcionalidades

O código utiliza o evento "DOMContentLoaded" para garantir que o JavaScript seja executado apenas quando a página estiver completamente carregada.

Ele define variáveis para armazenar o primeiro número, o segundo número, o operador selecionado e uma variável booleana para controlar se o resultado está sendo exibido.

Eventos são atribuídos aos botões de números, operadores, igual e apagar para responder às interações do usuário.

A função onlyNumbers garante que apenas números sejam inseridos no visor, prevenindo entrada inválida.

A função operatorHandle é usada para lidar com a seleção de operadores e a atualização dos números.

A função resultado realiza os cálculos com base no operador selecionado e exibe o resultado no visor.

Lembre-se de que este é um código simples para uma calculadora básica. Você pode estendê-lo e aprimorá-lo conforme necessário para atender às suas necessidades.
