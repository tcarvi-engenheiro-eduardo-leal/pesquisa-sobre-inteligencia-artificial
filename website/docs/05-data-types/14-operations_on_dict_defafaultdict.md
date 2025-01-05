# Operations on dict and on defaultdict

## Consultando item:
```python
aparicoes = {"Carlos":1, "Eduardo":2}
item_consultado = aparicoes['Carlos']
print(item_consultado) # 1
item_consultado = aparicoes.get('Carlos')
print(item_consultado) # 1
```  

## Alterando items
```python
aparicoes = {"Carlos":1, "Eduardo":2}
aparicoes[Carlos] = 99
item_alterado = aparicoes['Carlos']
print(item_alterado) # 99
```  

## Excluindo items
```python
aparicoes = {"Carlos":1, "Eduardo":2}
del aparicoes['Carlos']
print(aparicoes) # { "Eduardo":2 }
```  

## Verificar existência de chaves
```python
aparicoes = {"Carlos":1, "Eduardo":2}
print("Carlos" in aparicoes) # True
print("OtherName" in aparicoes) # False
```  

## Loop no dict
```python
aparicoes = {"Carlos":1, "Eduardo":2}
for key in aparicoes:
    print("key = {}".format(key))
    print("valor = {}".format(aparicoes[key]))
for key in aparicoes.keys():
    print("key = {}".format(key))
for value in aparicoes.values():
    print("valor = {}".format(aparicoes[key]))
for item in aparicoes.items():
    print("tupla = {}".format(item))
for chave, valor in aparicoes.items():
    print("tupla unpacked = ({}, {})".format(chave, valor))
## List Compreension No Loop
["chave na tupla = ({})".format(chave) for chave, _ in aparicoes.items()]
```  

- clear()
- copy()
- dict.fromkeys()
- get()
- items() # retorna lista de tuplas que representam itens do dicionário.
- keys()
- pop()
- popitem()
- setdefault()
- update()
- values()
