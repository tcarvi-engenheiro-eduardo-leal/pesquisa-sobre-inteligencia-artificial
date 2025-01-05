# lambda
Define um método anônimo com:
  - 1 ou mais parâmetros de input
  - 1 expressão de saída
  - Simbolo ":" para separas o input e o outpup.
- lambda `arguments` : `expression`
```python
lambda_name = lambda x : x + 2
retorno_lambda = lambda_name(3)
print(retorno_lambda)   # retorna 5
``` 

## Uso do lambda

### Para processar input e gerar output de forma mais sintética
- Para não ter que definir uma função anteriormente, dentro do padrão normal python.
```python
x = lambda a, b : a * b
print(x(5, 6))  # retorna 30

``` 
### Para definir executores de comportamento, sem ter que criar novas classes ou novos métodos 
- Por exemplo:  
```python
def gerador_de_funcao(n):
  return lambda a : a * n # O parâmetro n torna-se um valor fixo, não variável, na função retornada.

mydoubler = gerador_de_funcao(2) # n==2 passa a ser um valor fixo, não variável, na função mydoubler
mytripler = gerador_de_funcao(3) # n==3 passa a ser um valor fixo, não variável, na função mytripler

# Lógica relevante!
## mydoubler() e mytripler() se tornaram funções, definidas sem o formalismo normal do Python.
print(mydoubler(11)) # O parâmetro passado aqui é o a, da função anônima criada por lambda
print(mytripler(11)) # O parâmetro passado aqui é o a, da função anônima criada por lambda
```  
- Neste exemplo, usa-se lambda para criar 2 funções diferentes que foram especificadas na chamada de gerador_de_funcao().
- Pode-se, com o lambda, criar novos "comportamentos" no momento da execução do script, sem precisar criar novas classes ou novos métodos.
- Esta é a `principal funcionalidade do lambda`! A outra funcionalidade indicada se refere ao perfil sintético da codificação.
