# Comparação de Instâncias com functools

## Implementação para comparação completa, inclusive com `>=` e `<=`:
1. `from functools import total_ordering`
2. Indique, na definição do método, o decorator `@total_ordering`
3. Defina método `__eq__(self, qualquer_outro_nome)` na classe
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
4. Defina método __lt__(self, qualquer_outro_nome) na classe
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
5. Retorne True ou False devido comparações nestes 2 métodos.

  
- Já pode testar a comparação de instâncias desta classe com `<` ou com `>`.
  - E já pode testar a comparação de instâncias com `>=` e `<=`.

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
conta_do_guilherme = ContaSalario(1700)
conta_do_guilherme.deposita(500)
conta_da_daniela = ContaSalario(3)
conta_da_daniela.deposita(1000)
conta_do_paulo = ContaSalario(133)
conta_do_paulo.deposita(500)
# A comparação conjunta de __eq__ e __lt__
#   exige biblioteca incluída na classe acima.
conta_do_guilherme <= conta_da_daniela
conta_do_guilherme <= conta_do_paulo
conta_do_guilherme >= conta_da_daniela
conta_do_guilherme >= conta_do_paulo
```  
