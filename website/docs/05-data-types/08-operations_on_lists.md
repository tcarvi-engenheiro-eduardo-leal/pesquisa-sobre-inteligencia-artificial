# Operations on lists

```python
list_name = ["apple", "banana", "cherry"]
len(list_name)
list_name.append("novo_item")
list_name.remove("novo_item")
list_name.insert(0, "novo_item2")
item_inserido_em_posicao_zero = variable_name[0]
if item_inserido_em_posicao_zero in list_name:
    list_name.remove(item_inserido_em_posicao_zero)
for item in list_name:
    print(item)
list_name.clear()
list_name2 = [21, 22, 23]
list_name3 = list_name2.extend([24, 25])
## Aplicação de transformação em lista
list_name4 = [(idade+1) for idade in lista_name2] # [22, 23, 24, 25, 26 ]
## Aplicação de filtro em lista
list_name5 = [(idade) for idade in lista_name2 if idade < 24] # [21, 22, 23]

def metodo_para_somar_1(valor):
    return valor + 1
## Aplicação de filtro em lista, com transformação indicada anteriormente
list_name6 = [metodo_para_somar_1(idade) for idade in lista_name2 if idade < 24] # [21, 22, 23]

def metodo_com_alteracao_de_cacheamento(lista = []):
    # Script faz cacheamento de dado lista e atualiza este cacheamento
    print(len(lista))
    lista.append(33)
    return lista

def metodo_com_boa_pratica_para_evitar_mudanca_no_cacheamento(lista = None):
    if lista == None:
        lista = list()
    # Script não fará e não usará cacheamento de dado lista
    print(len(lista))
    lista.append(33)
    return lista


class NomeDaClasse
    
    def __init__(self, paramentro_usuario1):
        self.paramentro_usuario1 = paramentro_usuario1
        self.paramentro_usuario2 = 0

    def altera_parametro(self, valor):
        self.paramentro_usuario2 = valor

    def __str__(self):
        return "[Novo texto impresso para instância da classe. Variaveis: {} e {}]".format(self.paramentro_usuario1, self.paramentro_usuario2)

```  

- append()
- clear()
- copy()
- count()
- extend()
- insert()
- pop()
- remove()
- reverse()
- sort() # para lista de apenas números ou de apenas strings.