# Print

## Padrões para print de textos:
```python  
var_string = 'test1'
var_int = 9
var_float = 8.9
var_boolean = True
var_character = 'c'

# Print com f-string
print(f'primeira: {var_string}')
print(f'primeira: {var_string} segunda: {var_int} terceira: {var_float} quarta: {var_boolean}')
# Pode-se forçar a conversão com:
# '!s' que chama str() para converter para string.
# '!r' que chama repr()
# '!a' que chama ascii()
print(f'primeira: {var_string!s}')

# Print com Operador de Formatação
print('primeira: %s' % var_string)
print('primeira: %s' %(var_string))
print('primeira: %s' %str(var_boolean))
print('primeira: %s segunda: %d terceira: %.2f quarta: %s quinta: %c' %(var_string, var_int, var_float, var_boolean, var_character))

# Print com método format()
print('primeira: {}'.format(var_string))
print('primeira: {} segunda: {} terceira: {} quarta: {} quinta: {}'.format(var_string, var_int, var_float, var_boolean, var_character))
``` 

## Print de classes
### Implementação
1. Defina método str(self) na classe
    - Obrigatoriamente indique o parâmetro self pois haverá automaticamente chamada para parâmetro self=instancia.
2. Retorne algum texto no método `__str__(self)`
3. Passe uma instância desta classe para algum método de impressão.

```python
class Conta:
    def __init__(self, codigo):
        self._codigo = codigo
        self._outra_variavel = 0

    def __str__(self):
        return "{} and {}".format(self._codigo, self._outra_variavel)
```  

### Exemplo de Print de classes
```python  
class ContaCorrente:

    def __init__(self, codigo):
        self._codigo = codigo

    def __str__(self):
        return str(self._codigo)

conta1 = ContaCorrente(37)
conta2 = ContaCorrente(38)
lista_de_contas = [conta1, conta2]
for conta in lista_de_contas:
    print(conta)
``` 
