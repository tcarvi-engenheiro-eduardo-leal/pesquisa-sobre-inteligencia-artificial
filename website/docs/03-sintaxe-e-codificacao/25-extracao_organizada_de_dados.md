# Extração Organizada de Dados

- Seguem formas simplificadas para:
    - **Combinar dados de 2 ou mais listas**
    - Executar **loop único** nas listas de entrada
        - Com **possível manipulação dos dados das listas de entrada**
        - Com **possível filtragem dos dados das listas de entrada**

## Extração gerando list de tuples
- Extração de `list de tuples`, a partir de 2 `list`s quaisquer, usando:
    - `list comprehension`
    - `range(len(input))`
    - Funcionalidades:
        - Combinação dos elementos de 2 listas
        - Executar loop único para consultar dados de 2 listas
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1))]
print(resultado_desejado)
```  
  
---  
  
- Extração de `list de tuples`, a partir de 2 `list`s quaisquer, usando:
    - `list comprehension com condition`
    - `range(len(input))`
    - Funcionalidades:
        - Combinação dos elementos de 2 listas
        - Executar loop único para consultar dados de 2 listas
        - Filtragem dos dados, de qualquer das listas, antes de gerar a nova lista de tuples.
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1)) if dado2[i] > 7]
print(resultado_desejado)
```  

## Extração gerando dicts
  
- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension`
    - `zip(dado1, dado2)`
    - Funcionalidades:
        - Combinação dos elementos de 2 listas
        - Manipulação dos dados, no dicionário que possui os dados das listas combinados.
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor+2} for key, valor in zip(dado1, dado2)]
print(resultado_desejado)
```
   
---  
  
- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension com condition`
    - `zip(dado1, dado2)`
    - Funcionalidades:
        - Combinação dos elementos de 2 listas
        - Filtragem dos dados, de qualquer das listas, antes de gerar o novo dicionário.
        - Manipulação dos dados, no dicionário que possui os dados das listas combinados.
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor+5} for key, valor in zip(dado1, dado2) if valor > 7]
print(resultado_desejado)
```  
  
---  
  
- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension`
    - `range(len(dado))`
    - Funcionalidades:
        - Combinação dos elementos de 2 listas
        - Executar loop único para consultar dados de 2 listas
        - Manipulação dos dados, no dicionário que possui os dados das listas combinados.
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {dado1[i]: dado2[i]+1 for i in range(len(dado1))}
print(resultado_desejado)
```
  
---  

- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension com condition`
    - `range(len(dado))`
    - Funcionalidades:
        - Combinação dos elementos de 2 listas
        - Executar loop único para consultar dados de 2 listas
        - Filtragem dos dados, de qualquer das listas, antes de gerar o novo dicionário.
        - Manipulação dos dados, no dicionário que possui os dados das listas combinados.
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {dado1[i]: dado2[i]+5 for i in range(len(dado1)) if dado2[i] > 7}
print(resultado_desejado)
```

