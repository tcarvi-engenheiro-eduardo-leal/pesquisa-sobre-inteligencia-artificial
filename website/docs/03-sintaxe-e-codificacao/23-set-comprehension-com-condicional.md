# Set comprehension com condicional

- Condicional no final do código
```python
# Set comprehension
# new_set = [expression for item in iterable if truth_testing_value == True]
set_name = {"a", "b", "c", "r"}
new_set = {x for x in set_name if x not in 'abc'} # set comprehension
# expression that may cause modification: x
# connector: for
# item in iterable: x in set_name
# optional condition: if x not in 'abc'

print(new_set)
# new_set = {"r"}
```  

- Obs. Iterable pode se `tuple` ou `set` ou `list`. Até mesmo o `dict.items()` pode ser usado como iterable.