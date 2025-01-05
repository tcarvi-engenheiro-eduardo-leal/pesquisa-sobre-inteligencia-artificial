# Operations on sets and frozensets

## update
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name2 = {3, 4, 5}
union_variable = set_variable_name1 | set_variable_name2
print(union_variable) # {1, 2, 3, 4, 5}
set_variable_name1 |= set_variable_name2
print(set_variable_name1) # {1, 2, 3, 4, 5}
```  

## intersection
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name2 = {3, 4, 5}
intersection_variable = set_variable_name1 & set_variable_name2
print(intersection_variable) # { 3 }
print(1 in intersection_variable) # False
print(3 in intersection_variable) # True
```  

## intersection_update
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name2 = {3, 4, 5}
set_variable_name1 &= set_variable_name2
print(set_variable_name1) # { 3 }
print(1 in set_variable_name1) # False
print(3 in set_variable_name1) # True
```  

## difference
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name2 = {3, 4, 5}
subtraction_variable = set_variable_name1 - set_variable_name2
print(subtraction_variable) # { 1, 2 }
print(1 in subtraction_variable) # True
print(3 in subtraction_variable) # False
```  

## difference_update
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name2 = {3, 4, 5}
set_variable_name1 -= set_variable_name2
print(set_variable_name1) # { 1, 2 }
print(1 in subtraction_variable) # True
print(3 in subtraction_variable) # False
```  

## symmetric difference
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name2 = {3, 4, 5}
exclusive_or_variable = set_variable_name1 ^ set_variable_name2
print(exclusive_or_variable) # { 1, 2, 4, 5 }
print(1 in exclusive_or_variable) # True
print(3 in exclusive_or_variable) # False
```  

## symmetric_difference_update
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name2 = {3, 4, 5}
set_variable_name1 ^= set_variable_name2
print(set_variable_name1) # { 1, 2, 4, 5 }
print(1 in exclusive_or_variable) # True
print(3 in exclusive_or_variable) # False
```  

## Adding items
- frozenset doesn't accept new items
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name1.add(4)
print(set_variable_name1) # { 1, 2, 4 }
```  

## Discard item
```python 
set_variable_name1 = {1, 2, 3}
# If 4 is not present, nothing happens
set_variable_name1.discard(4)
set_variable_name1.discard(3)
print(set_variable_name1) # { 1, 2}
```  

## remove item
```python 
set_variable_name1 = {1, 2, 3}
# You can rnly remove exising items
set_variable_name1.remove(3) 
print(set_variable_name1) # { 1, 2}
set_variable_name1.remove(4) # Raises KeyError
```  

## pop item
```python 
set_variable_name1 = {1, 2, 3}
# You can only pop if set is not empty
set_variable_name1.pop() 
print(len(set_variable_name1)) # 2
set_variable_name1.pop() 
set_variable_name1.pop() 
set_variable_name1.pop()  # Raises KeyError because set is empty
```  

## clear all items
```python 
set_variable_name1 = {1, 2, 3}
set_variable_name1.clear() 
print(len(set_variable_name1)) # 0
```  