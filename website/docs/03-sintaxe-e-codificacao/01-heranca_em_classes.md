# Herança em classes
## Implementação:
1. Indique o nome da ClassePai como parâmetro, na definição da ClasseFilho
    - Ex.:
        - class ContaPoupanca(Conta)
        - class ContaCorrente(Conta)
        - class ContaSalario(Conta)
2. Chame, em instância da ClasseFilho, métodos apenas definidos na ClassePai.
    - Pode-se também executar, na definição da ClasseFilho, o comando super().metodoClassePai(). Esta chamada executará, na instância da ClasseFilho, um método de ClassePai.

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

## Exemplo de Herança
```python  
conta1 = ClasseFilho1()
conta2 = ClasseFilho2()
lista_de_contas = [conta1, conta2]
for conta in lista_de_contas:
    # Tanto ContaCorrente quanto ContaPoupanca possuem
    # o método "deposita" pois herdaram este método.
    conta.deposita(1000)
    conta.passa_o_mes()
    print(conta)
``` 
