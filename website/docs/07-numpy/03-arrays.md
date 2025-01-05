# Arrays

## Escalar 0-d
```python
import numpy as np
## Array 0 dimensional
## A lógica de construção é: "uma lista de valores sem estar em um array". (0 sucessões de arrays)
## Neste caso, não há um array de algo. Apenas um valor sem dimensão de array.
dado_teste = np.array(42)  # Gera 42, mas no formato array de 0 dimensão.
print(dado_teste) # 42
print(dado_teste.ndim) # 0 # Quantidade de dimensões do dado
print(dado_teste.size) # 1 # Quantidade de dados
print(dado_teste.shape) # () # Quantidade de linhas e colunas
```  

## Array Unidimensional 1-d
```python
import numpy as np
## Array unidimensional
## A lógica de construção é: "Array de uma lista de valores". (1 array)
## Não importa a quantidade dos valores. A dimensão é 1: "array de lista de valores".
dado_teste = np.array([4, 5, 67, 89, 9])  # Gera [4, 5, 67, 89, 9], no formato array de 1 dimensão.
print(dado_teste) # [4, 5, 67, 89, 9]
print(dado_teste.ndim) # 1 # Quantidade de dimensões do dado
print(dado_teste.size) # 5 # Quantidade de dados
print(dado_teste.shape) # (5,) # Quantidade do primeiro array = 5, Quantidade do segundo array = 0
```  

## Array Bidimensional 2-d
```python
import numpy as np
## Array bidimensional
## A lógica de construção é: "Array de arrays de uma lista de valores". (2 sucessões de arrays)
## Não importa a quantidade dos valores da lista. A dimensão é 2: "array de array de lista de valores".
dado_teste = np.array([
                       [4, 5, 9, 6],
                       [9, 8, 7, 5],
                       [4, 7, 0, 3]
                      ])
print(dado_teste)
print(dado_teste.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.size) # 24 # Quantidade de dados
print(dado_teste.shape) # (3, 4) # Quantidade do primeiro array = 3, Quantidade do segundo array = 4
```  

## Array Tridimensional 3-d
- Uma lista de arrays bidimensionais.
```python
import numpy as np
## Array tridimensional
## A lógica de construção é: "Array de arrays de arrays de uma lista de valores". (3 sucessões de arrays)
## O Array final definido representa 
dado_teste = np.array([
                       [
                        [4, 5, 9, 4],
                        [9, 8, 7, 4],
                        [4, 7, 0, 5]
                       ],
                       [
                        [6, 6, 6, 5],
                        [9, 5, 7, 1],
                        [9, 9, 9, 3]
                       ]
                      ])
print(dado_teste)
print(dado_teste.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.size) # 48 # Quantidade de dados
print(dado_teste.shape) # (2, 3, 4) # Quantidade do primeiro array = 2, Quantidade do segundo array = 3, Qauntidade do terceiro array = 4 
```  

## Array Multidimensional n-d
- As operações de criação de array não são limitadas a 0, 1, 2 e 3 dimensões. 
- Pode-se criar n dimensões desde que os objetos do mesmo nível tenham o mesmo formato.
- Podemos interpretar uma matriz de ordem superior como um objeto que contém informações sobre outros objetos matemáticos.
```python
import numpy as np

np.array(
    [
        [
         [4, 5, 9],
         [9, 8, 7],
         [4, 7, 0]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
        ],
        [
         [4, 5, 9],
         [9, 8, 7],
         [4, 7, 0]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
         ]
    ])
```  