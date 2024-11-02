# Instruções de Execução do Projeto

## Execução com Node.js
Para executar o projeto utilizando Node.js, siga os passos abaixo:

1. **Instalação das Dependências:**
   Para instalar todas as dependências necessárias, execute o seguinte comando:
   ```bash
   npm install
   ```

2. **Iniciar o Servidor em Modo de Desenvolvimento:**
   Após a instalação das dependências, inicie o servidor em modo de desenvolvimento com o comando:
   ```bash
   npm run dev
   ```

---

## Execução com Docker
Para executar o projeto utilizando Docker, siga as etapas abaixo:

1. **Construir a Imagem Docker:**
   Na raiz do projeto, execute o seguinte comando para construir a imagem Docker:
   ```bash
   docker build -t api-typescript .
   ```

2. **Iniciar o Contêiner:**
   Depois de construir a imagem, você pode iniciar o contêiner com o comando:
   ```bash
   docker run -p 3000:3000 api-typescript
   ```

---

## Observações
- Certifique-se de que o Docker e o Node.js estão instalados em seu sistema antes de prosseguir com as instruções.
- O contêiner será iniciado na porta `3000`. Verifique se essa porta está disponível em sua máquina para evitar conflitos.
