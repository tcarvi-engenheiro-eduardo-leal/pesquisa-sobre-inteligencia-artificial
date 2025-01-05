# Exception

## Tipos
- 2 tipos de erros:
    - Erros de sintaxe
    - Exceptions
- SyntaxError
    - O erro é identificado pelo parser (analisador).
- NameError
    - Erro ocorre quando tentamos utilizar um nome de algum elemento/nome inexistente no código.
- IndexError
    - O erro ocorre quando tentamos acessar um index inexistente.
- TypeError
    - O erro ocorre quando um operador ou função são aplicados a um objeto cujo tipo é inapropriado.
- KeyError
    - O erro ocorre quando tentamos acessar uma chave que não está em um dicionário.
- ValueError
    - O erro ocorre quando um argumento passado para uma função ou método não é do tipo esperado ou tem um valor inválido.
- Warning
    - O erro ocorre para casos que podem ser ignorados.


## Tratamento de exceptions:
```python
try:
    # codigo
    print("Código em execução")
    raise ValueError()
except:
    print("tratamento de exception")
else:
    print("Código executado apenas se não houver exception")
```  

```python
try:
    # codigo
    print("Código em execução")
    raise ValueError("ValeuError levantado")
except Exception as e:
    print(e)
else:
    print("Código executado se não houver exception")
finally:
    print("Código 'finally' sempre executado")
```  

```python
try:
    # codigo
    print("Código em execução")
    raise ValueError("ValeuError levantado")
except ValueError as e:
    print(e)
except KeyError as e:
    print(e)
else:
    print("Código executado apenas se não houver exception")
finally:
    print("Código 'finally' sempre executado")
```  

## Lançamento de exceptions:
```python
raise KeyError("Descrição da sua exception de KeyError")
```  
 