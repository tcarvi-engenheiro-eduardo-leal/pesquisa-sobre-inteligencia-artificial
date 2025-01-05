# Classe e Método Abstrato
## Implementação
1. `from abc import ABCMeta, abstractmethod`
2. Passar, na definição da classe, parâmetro `metaclass=ABCMeta`
3. Passar, na definição da classe, decorator `@abstractmethod`
4. Não implementar script no método abstrato, apenas usar comando `pass`.
5. Classes que herdam da classe abstrata devem obrigatoriamente definir sua versão do método abstrato.

```python
from abc import ABCMeta, abstractmethod

class Conta(metaclass=ABCMeta):

    def __init__(self, codigo_user):
        self.codigo_user = codigo_user
        self._saldo = 0

    @abstractmethod
    def passa_o_mes(self):
        # Todas as demais classes que herdam desta classe devem implementar este método abstrato.
        # Um erro ocorrerá no momento da instanciação da classe herdeira, se ela não tiver implementação deste método abstrato.
        pass
```  
  
```python
class ContaComPassaMes(Conta):
    def passa_o_mes(self):
        self._saldo -= 2
```  
  
```python
class ContaSemPassaMes(Conta):
    def outro_metods(self):
        print("sem passa o mês")
```  

## Execução de Método Abstrato Implementado
```python  
conta1 = ContaComPassaMes(1)
conta2 = ContaComPassaMes(2)
lista_de_contas = [conta1, conta2]
for conta in lista_de_contas:
    # Tanto ContaCorrente quanto ContaPoupanca possuem
    # o método "passa_o_mes" pois o definiram.
    conta.passa_o_mes()
# Erro em Runtime - ConstaSemPassaMes deveria ter implementado o método "passa_o_mes" mas não o fez.
# contaComRuntimeErro = ContaSemPassaMes(3) # Tirar hash de comentário para testar...
