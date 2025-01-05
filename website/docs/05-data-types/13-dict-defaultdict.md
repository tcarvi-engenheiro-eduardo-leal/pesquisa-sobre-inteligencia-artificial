# dict and defaultdict

## Constructor
```python 
variable_dict_name1 = {'jack': 23, 'otherjack': 40}
variable_dict_name2 = {23: 'jack', 40: 'otherjack'}

## class dict()
variable_dict_name1 = dict()  # Generates: {}
##
## class dict(**kwargs)
variable_dict_name2 = dict(foo1=100, foo2=200) # Generates: {'foo1': 100, 'foo2': 200}
#
## class dict(mapping, **kwargs) # Usa um objeto qualquer do tipo mapping e inclui mais uma key, com value.
variable_dict_name2 = dict( {'foo1':100, 'foo2':200}, foo3=300) # Generates: {'foo1': 100, 'foo2': 200, 'foo3': 300}
#
# class dict(iterable, **kwargs)
# This constructor needs a specific form for the iterable object. 
# It needs an iterable with key and value pairs. 
# You can generate this iterable using zip():
list_names1 = ['a', 'b', 'c']
list_values1 = [100, 200, 300]
## Using two lists
iterable_para_usar_no_construtor_de_dict1 = zip(list_names1, list_values1)
# Generates: {'a': 100, 'b': 200, 'c': 300, 'foo4': 400}
variable_dict_name1 = dict( iterable_para_usar_no_construtor_de_dict1, foo4=400)
#
# Using two tuples
tuple_names1 = ('a', 'b', 'c')
tuple_values1 = (100, 200, 300)
iterable_para_usar_no_construtor_de_dict2 = zip(tuple_names1, tuple_values1)
# Generates: {'a': 100, 'b': 200, 'c': 300, 'foo4': 400}
variable_dict_name2 = dict( iterable_para_usar_no_construtor_de_dict2, foo4=400)
#
# You can programatically, but don't zip() two sets because they are not ordered!
# You can't control the selection of key-value pair.
set_names1 = {'a', 'b', 'c'}
set_values1 ={100, 200, 300}
iterable_sem_controlle_na_ordem_key_value = zip(set_names1, set_values1)
variable_dict_name3 = dict(iterable_sem_controlle_na_ordem_key_value, foo4=400)
# Return a new dictionary initialized from an optional positional argument and a possibly empty set of keyword arguments.
variable_dict_name3 = dict([('foo', 100), ('bar', 200)]) # Lógica de construção pode ser indevida a depender do algoritmo.

# dict comprehension
# new_dict = [expression for item in iterable if truth_testing_value == True]
new_list = [k: v for (k,v) in dict_name if "a" in v] # Dict comprehension
# expression: k: v
# item: (k,v)
# iterable: dict_name
# optional condition: if "a" in v
```

### defaultdict:
- Especialização de "dict", mas:
    - retorna zero se o padrão for int e não haver o dado chamado.
- Ex:
```Python
dicionario_aceita_chamada_key_inexistente = defaultdict(int)
value = dicionario_aceita_chamada_key_inexistente["key_inexistente"]
print(dicionario_aceita_chamada_key_inexistente) # 0
```  

## Ordem:
- **ordered by index**
    - "dict" items don't have index, but have keys to localize its items.
    - In version 3.7, dicts are now ordered.

## Mutabilidade
- **changeable**
    - A dict is changeable because its items may be **changed, added, and removed**.

## Permission of duplicate items
- The collection "dict" does not **allows duplicate objects**.
- It allows duplicate values, but not duplicate objects neither duplicate keys.

## Permission of diverse data types in the same collection
- The collection "dict" may have items with **different data types**.

## Its type, in general:
- A dict is a ***collection type***.
- A dict is a Mapping type
    - A mapping object maps hashable values to arbitrary objects.
    - Mappings are mutable objects.
    - There is currently only one standard mapping type, the dictionary.
    - A dictionary’s keys are almost arbitrary values. 
    - Values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys.
    - Values that compare equal (such as 1, 1.0, and True) can be used interchangeably to index the same dictionary entry.