Na raiz do projeto, execute o comando abaixo para construir a imagem Docker:

    bash
    docker build -t api-typescript .

Para iniciar o contêiner, execute o comando abaixo:

    bash
    docker run -p 3000:3000 api-typescript