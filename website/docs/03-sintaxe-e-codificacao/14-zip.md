# zip(iterator1, iterator2, iterator3, ...)
- Gera uma combinação de elementos extraídos dos iteradores, considerando a mesma posição dos índices dos elementos.
- O objeto retornado é um iterador de tuples.
- Cada elemento do iterador gerado é uma tuple.
- Pode-se converter o o zip em uma tuple de tuples.
    - `tuple(zip-object)`
    - ou `((zip-object))`
- Mas não se pode usar `list` ou `dict` ou `set` para tal conversão.
    - Só se consegue obter estas estruturas de saída se:
        - um processamento de unpacking, dentro de um loop, for usado
        - com gravação seguinte destas estruturas.
        - Se necessário, tal procedimento pode ser executado com:
            - `list-comprehension`, 
            - `set-comprehension` ou com 
            - `dict-comprehension`. 
- Se os iteradores passados possuem tamanhos diferentes, o iterador de menor tamanho define o tamanho do objeto zip.
- `zip(iterator1, iterator2, iterator3, ...)`

```python
list1 = ["key1", "key2", "key3"]
list2 = [1, 2, 3]
list3 = ['A', 'B', 'C']
for item in zip(list1, list2, list3):
    print(item)
for item in tuple(zip(list1, list2, list3)):
    print(item)
for item in (zip(list1, list2, list3)):
    print(item)
```  