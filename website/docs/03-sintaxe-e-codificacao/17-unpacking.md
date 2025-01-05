# Unpacking

## Unpacking recebendo todos os campos

```python
idades = [15, 87, 32, 45, 67, 37]
for indice, idade in enumerate(idades): 
    # unpacking da tupla gerada recebendo indice e idade
    print(indice, idade)
``` 

## Unpacking recebendo apenas um dos campos apenas
```python
idades = [15, 87, 32, 45, 67, 37] 
for _, valor in enumerate(idades): 
    # unpacking da tupla recebendo apenas o valor
    print(valor)
``` 
  