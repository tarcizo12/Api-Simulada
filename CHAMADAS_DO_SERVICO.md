# Documentação da API

## Serviços da Aplicação

### 1. Retornar Hora do Dia

**Método:** `GET`  
**Endpoint:** `http://localhost:3000/servico`

**Descrição:**  
Retorna a hora do dia em que foi solicitada a requisição no serviço.

**Exemplo de Resposta:**
```json
{
  "hora": "14:30:15"
}
```

---

### 2. Mudar Estado da Configuração da Aplicação

**Método:** `GET`  
**Endpoint:** `http://localhost:3000/mudarEstado?code={codigo}`

**Parâmetros:**

- **code**: Inteiro que determina o estado a ser mudado.
  - **Domínio:** `{ 1, 2 }`
  - **Descrição:** Utilizado para alterar a configuração atual da aplicação.

**Exemplo de Uso:**
```plaintext
http://localhost:3000/mudarEstado?code=2
```

**Exemplo de Resposta:**
```json
{
  "status": "sucesso",
  "mensagem": "Estado alterado com sucesso."
}
```

---

## Observações
- Certifique-se de que o servidor está em execução no `localhost` na porta `3000` antes de fazer as requisições.
- Para testes, você pode usar ferramentas como Postman ou cURL.
