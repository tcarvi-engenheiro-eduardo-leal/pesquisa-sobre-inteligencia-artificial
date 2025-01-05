# Função enumerate(iteravel)
- Gera tuples a partir de iterável.
- Cada tuple terá como primeiro elemento o index do item da iteração.
    - E terá como segundo elemento o próprio item da iteração. 

```python
idades = (15, 87, 32, 45, 67, 37)
for i in enumerate(idades):
    print(i)
    # Retorna as tuples:
    # (0, 15)
    # (1, 87)
    # (2, 32)
    # (3, 45)
    # (4, 67)
    # (5, 37)
``` 

```python
idades = [15, 87, 32, 45, 67, 37] # O iteravel pode ser também uma lista.
for i in enumerate(idades):
    print(i)
    # Retorna as tuples:
    # (0, 15)
    # (1, 87)
    # (2, 32)
    # (3, 45)
    # (4, 67)
    # (5, 37)
``` 

- Obs.:
    - Não aconselhamos usar set() como iteravel pois set() não mantém sempre a mesma ordem.
