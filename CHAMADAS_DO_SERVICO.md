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
  "HORA_INCIAL_DA_REQUISICAO": "21:08:26"
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
```string
  Alterado para o estado: DELAY
```

### 3. Mudar o tempo de delay em segundos da aplicação

**Método:** `GET`  
**Endpoint:** `http://localhost:3000/alterarDelay?segundos={s}`

**Parâmetros:**

- **segundos**: Inteiro que determina o tempo de delay em segundos.

**Exemplo de Uso:**
```plaintext
  http://localhost:3000/alterarDelay?segundos=10
```

**Exemplo de Resposta:**
```string
  Tempo de delay definido em: 10s
```

---

## Observações
- Certifique-se de que o servidor está em execução no `localhost` na porta `3000` antes de fazer as requisições.
- Para testes, você pode usar ferramentas como Postman ou cURL.
