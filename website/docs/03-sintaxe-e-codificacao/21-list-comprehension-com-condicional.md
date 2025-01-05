# List comprehension com condicional

- Condicional no final do código
```python
list_name = ["apple", "banana", "cherry"]
# List comprehension
# new_list = [expression for item in iterable if truth_testing_value == True]
new_list = [x for x in list_name if "a" in x] # List comprehension
# expression that may cause modification: x
# connector: for
# item in iterable: x in list_name
# optional condition: if "a" in x

print(new_list)
# new_list = ["apple", "banana"]
```  

- Obs. Iterable pode se `tuple` ou `set` ou `list`. Até mesmo o `dict_name.items()` pode ser usado como iterable.