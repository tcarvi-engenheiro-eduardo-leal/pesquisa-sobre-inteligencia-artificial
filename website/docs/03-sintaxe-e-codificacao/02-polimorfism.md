# Polimorfismo
  
## Implementação:
1. Indique o nome da ClassePai como parâmetro, na definição da ClasseFilho
    - Ex.:
        - class ContaPoupanca(Conta)
        - class ContaCorrente(Conta)
        - class ContaSalario(Conta)
2. Diferencie as classes filhas definindo, para cada, um método que tenha mesmo nome/assinatura mas comportamentos diferentes.

```python
class ClassePai:

    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0

    def deposita(self, valor):
        self._saldo += valor

    def __str__(self):
        return "Conta: {}. Saldo: {}.".format(self._codigo, self._saldo)
```  
  
```python
class ClasseFilho1(ClassePai):

    def passa_o_mes(self):
        self._saldo -= 2
```  
  
```python
class ClasseFilho2(ClassePai):

    def passa_o_mes(self):
        self._saldo -= 3
```  

## Exemplo de Polimorfismo
```python  
conta1 = ClasseFilho1(27509)
conta1.deposita(100)
conta2 = ClasseFilho2(27508)
conta2.deposita(200)
lista_de_contas = [conta1, conta2]
for conta in lista_de_contas:
    # Tanto ContaCorrente quanto ContaPoupanca implementa passa_o_mes.
    # Mas o comportamento de cada implementação é diferente.
    # Poly formas diferentes para mesmo método.
    conta.passa_o_mes() # polimorfismo
    print(conta)
``` 
