# Comparação de Instâncias sem functools

## Comparação com \_\_eq\_\_ e \_\_lt\_\_, sem biblioteca functools

### Implementação para comparação com `==` ou com `!=`:
1. Defina método `__eq__(self, qualquer_outro_nome)` na classe
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
2. Retorne True ou False devido comparações, no método `__eq__(self, qualquer_outro_nome)`
3. Compare instâncias desta classe com `==` ou com `!=`
  - **Não compare, com este design, a opção `<=` ou `>=`.** 
    - Estas comparações adicionais precisam da biblioteca `functools`.

### Implementação para comparação com `<` ou com `>`:
1. Defina método `__eq__(self, qualquer_outro_nome)` na classe
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
2. Retorne True ou False devido comparações, no método `__lt__(self, qualquer_outro_nome)`
3. Compare instâncias desta classe com `<` ou com `>`
  - **Não compare, com este design, a opção `<=` ou `>=`.** 
    - Estas comparações adicionais precisam da biblioteca `functools`.

```python
class Conta:

    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0

    def deposita(self, valor):
        self._saldo += valor

    def __eq__(self, outro):
        if type(outro) != Conta:
            return False
        return self._codigo == outro._codigo and self._saldo == outro._saldo

    def __lt__(self, outro):
        return self._saldo < outro._saldo

    def __str__(self):
        return "[>>Codigo {} Saldo {}<<]".format(self._codigo, self._saldo)
```  

## Exemplo de comparações
```python  
# 
# Comparação de __eq__ e __lq__
#   devido implementação destes métodos,
# Sem a necessidade de bibliotecas especializadas.
# Mas não pode comparar <= e >=.
#   <= e >= exigem união do processamento mediante biblioteca functools
#
class Conta:

    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0

    def deposita(self, valor):
        self._saldo += valor

    def __eq__(self, outro):
        if type(outro) != Conta:
            return False
        return self._codigo == outro._codigo and self._saldo == outro._saldo

    def __lt__(self, outro):
        return self._saldo < outro._saldo

    def __str__(self):
        return "[>>Codigo {} Saldo {}<<]".format(self._codigo, self._saldo)
# Testes:
conta1 = Conta(36)
conta2 = Conta(37)
print(conta1 == conta1) # True
print(conta2 == conta2) # True
print(conta1 == conta2) # False
print(conta1 != conta2) # True
print(conta1 > conta2) # False pois saldo de ambas é 0
print(conta1 < conta2) # False pois saldo de ambas é 0
conta1.deposita(100)
conta2.deposita(200)
print(conta1 < conta2) # True
print(conta1 > conta2) # False
conta3 = Conta(38)
conta3.deposita(200)
lista_de_contas = [conta1, conta2, conta3]
for conta in sorted(lista_de_contas):
    # Ordenação funciona devido implementação de __eq__ e __lt__
    print(conta)
```  

```python
# 
# Comparação usando valor retornado por função externa
#     que processa campo de objeto Conta.
#
def extrai_saldo(conta):
  return conta._saldo
for conta in sorted(contas, key=extrai_saldo):
  print(conta)
```  
  
```python
# 
# Comparação com attrgetter que consulta,
#     em seu processo interno, campo interno privado.
#
from operator import attrgetter

for conta in sorted(contas, key=attrgetter("_saldo")):
  print(conta)
```  
