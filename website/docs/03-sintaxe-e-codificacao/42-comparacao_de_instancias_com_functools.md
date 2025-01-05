# Comparação de Instâncias com functools

## Implementação para comparação completa, inclusive com `>=` e `<=`:
1. `from functools import total_ordering`
2. Indique, na definição do método, o decorator `@total_ordering`
3. Defina método `__eq__(self, qualquer_outro_nome)` na classe.
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
4. Defina método `__lt__(self, qualquer_outro_nome)` na classe.
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
5. Os dois métodos indicados devem ter scripts com as comparações.
6. Os dois métodos indicados devem retornar True ou False, devido comparações nestes 2 métodos.

```python  
# Necessidade de importação de total_ordering
#   da biblioteca functools
from functools import total_ordering

# Necessidade de uso de decorator
@total_ordering
class ContaSalario:
  
  def __init__(self, codigo):
    self._codigo = codigo
    self._saldo = 0

  # Primeira das 2 implementações necessárias
  def __eq__(self, outro):
    if type(outro) != ContaSalario:
      return False
    return self._codigo == outro._codigo and self._saldo == outro._saldo
  
  # Segunda das 2 implementações necessárias
  def __lt__(self, outro):
    if self._saldo != outro._saldo:
      return self._saldo < outro._saldo
    return self._codigo < outro._codigo
  
  def deposita(self, valor):
    self._saldo += valor
    
  def __str__(self):
    return "[>>Codigo {} Saldo {}<<]".format(self._codigo, self._saldo)
```  
  
```python
conta_do_guilherme = ContaSalario(1)
conta_do_guilherme.deposita(100)
conta_da_daniela = ContaSalario(2)
conta_da_daniela.deposita(200)
# A comparação conjunta de __eq__ e __lt__
#   exige biblioteca incluída na classe acima.
print("Deve ser True", conta_do_guilherme <= conta_da_daniela)
print("Deve ser False", conta_do_guilherme >= conta_da_daniela)
```  
