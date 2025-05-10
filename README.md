# 🧪 Oficina TDD – PretaLab

Este repositório contém a resolução de um desafio proposto durante a **Oficina de TDD** realizada pela **PretaLab**. O objetivo foi praticar o desenvolvimento orientado a testes (**Test-Driven Development**) com JavaScript, implementando uma **calculadora** e uma **estrutura de fila (queue)**.

## 🗂️ Estrutura do Projeto

- `soma.js` – Função simples de soma.
- `soma.test.js` – Testes da função de soma.
- `calculadora.js` – Implementação das operações básicas da calculadora.
- `calculadora.test.js` – Testes da calculadora.
- `queue.js` – Implementação da estrutura de dados Fila (Queue).
- `queue.test.js` – Testes da fila.

## ⚙️ Funcionalidades

### ➕ Soma
- Soma dois números inteiros.

### 🧮 Calculadora

- `soma(a, b)`  
  **Descrição:** Soma dois números inteiros.  
  **Retorno:** `a + b`

- `subtrai(a, b)`  
  **Descrição:** Subtrai o segundo número do primeiro.  
  **Retorno:** `a - b`

- `multiplica(a, b)`  
  **Descrição:** Multiplica dois números inteiros.  
  **Retorno:** `a * b`

- `divide(a, b)`  
  **Descrição:** Divide o primeiro número pelo segundo.  
  **Retorno:** `a / b`  
  **Tratamento de erro:** Se `b === 0`, lança um erro com a mensagem: `"Divisão por zero não permitida."`
### 📦 Queue (Fila)
- `size()` – Retorna o tamanho da fila.
- `add(item)` – Adiciona um item ao final da fila.
- `peek()` – Retorna o primeiro item da fila (sem removê-lo).
- `dequeue()` – Remove e retorna o primeiro item da fila.

## ▶️ Como Rodar os Testes

1. Instale as dependências:
   ```bash
   npm install

2. Execute os testes:
   ```bash
   npm test

🎯 Objetivo do Desafio

Aplicar os conceitos de TDD desenvolvendo funcionalidades simples, validando-as com testes automatizados e construindo código limpo, testável e de fácil manutenção.

---

