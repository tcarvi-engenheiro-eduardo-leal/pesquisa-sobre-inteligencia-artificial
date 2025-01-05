# tuple

## Constructor:
```python  
variable_tuple_name0 = () # Não aceita mais alteração, mas pode ser usada como parâmetro em alguma função.
variable_tuple_name1 = ('jack', 'otherjack')
variable_tuple_name2 = (23, 40, 67)
variable_tuple_name3 = ('jack', 23, 55)
# Generator comprehension for tuples
# new_generator = [expression for item in iterable if truth_testing_value == True]
tuple_name = ("a", "b", "r")
new_generator = (x for x in tuple_name if x not in 'abc') # generator comprehension
# expression that may cause modification: x
# connector: for
# item in iterable: x in tuple_name
# optional condition: if x not in 'abc'
# DEFINIÇÃO DE TUPLE segue fluxo diferente do usado em list e em set pois tuplas são imutáveis.
new_tuple = tuple(new_generator) 
```  

## Ordem:
- **ordered by index**
    - "tuple" items are indexed, the first item has index [0], the second item has index [1] etc.

## Mutabilidade:
- **unchangeable**
    - A tuple is **unchangeable** because **we cannot** change, add or remove items after the tuple has been created.

## Permission of duplicate items
- The collection "tuple" **allows duplicate values**.

## Permission of diverse data types in the same collection
- The collection "tuple" may contain items of **different data types**.

## Its type, in general
- A tuple is a ***collection type***.
    - It supports: `x in var_name`, `len(var_name)`, and `for x in var_name`.
- A tuple is a ***sequence type***.
    - It supports `indexing, slicing, or other sequence-like behavior`.