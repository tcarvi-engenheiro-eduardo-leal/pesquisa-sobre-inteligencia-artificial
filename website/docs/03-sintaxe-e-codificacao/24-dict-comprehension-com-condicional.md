# Dict comprehension com condicional

- Condicional no final do código
```python
# dict comprehension
dict_name = {'jack': 23, 'otherjack': 40}
# new_dict = [expression for item in iterable if truth_testing_value == True]
new_dict = {k:v for (k,v) in dict_name.items() if "t" in k} # Dict comprehension
# expression: k: v
# connector: for
# item in iterable: (k,v) in dict_name
# optional condition: if "t" in k

print(new_dict)
# new_dict = {'otherjack': 40}
```  
