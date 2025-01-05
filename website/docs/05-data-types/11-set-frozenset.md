# set and frozenset

## Constructor
```python  
list_iterable_name = [1,2,3]
tuple_iterable_name = (1,2,3)
set_variable_name = {1, 2, 3}
dict_iterable_name = {'first': 1, 'second': 2, 'third': 3}
set_variable_name0 = set()
set_variable_name1 = set(list_iterable_name)
set_variable_name2 = set(tuple_iterable_name)
set_variable_name3 = set(dict_iterable_name) # O set será criado a partir das keys do dictionary e não dos values. Os values são desconsiderados!
frozenset_variable_name0 = frozenset()
frozenset_variable_name1 = frozenset(list_iterable_name)
frozenset_variable_name2 = frozenset(tuple_iterable_name)
frozenset_variable_name3 = frozenset(dict_iterable_name) # O frozenset será criado a partir das keys do dictionary e não dos values. Os values são desconsiderados!
#
# Set comprehension
# new_set = [expression for item in iterable if truth_testing_value == True]
set_name = {"a", "b", "r"}
new_set = {x for x in set_name if x not in 'abc'} # set comprehension
# expression that may cause modification: x
# connector: for
# item in iterable: x in set_name
# optional condition: if x not in 'abc'
```  

## Ordem:
- **unordered**
    - Its items don't have a defined order. It is an unordered collection.
    - Its items don't have an index.
    - Being an unordered collection, sets do not record element position or order of insertion.
        - Há apenas elementos dentro do set.
        - Não há ordem para apresentação.
        - Mas o set aceita iteração de loop.

## Mutabilidade:
- **partially changeable**
    - A set is **partially changeable** because new items may be ***added*** to the set. 
    - And its items may be ***removed***.
- **partially unchangeable**
    - A set is **partially unchangeable** because **we cannot change the value of its items**.
- **frozenset are completely unchangeable**

## Permission of duplicate items
- The collection "set" **does not allow duplicate values**.
- Its items are **distinct hashable objects**.

## Permission of diverse data types in the same collection
- The collection "set" may contain items with **different data types**.

## Its type, in general
- A set **IS NOT** a ***sequence type***.
    - A set type does not support `indexing, slicing, or other sequence-like behavior`.
- A set is a ***collection type***.
    - Like other collections, it supports: `x in var_name`, `len(var_name)`, and `for x in var_name`.
        
## Common Uses:
- Common Uses include membership testing, removing duplicates from a sequence, and computing mathematical operations such as intersection, union, difference, and symmetric difference.

## Two built-in set types: set and frozenset
-  The set type is mutable — the contents can be changed using methods like add() and remove(). Since it is mutable, it has no hash value and cannot be used as either a dictionary key or as an element of another set.
- The frozenset type is immutable and hashable — its contents cannot be altered after it is created; it can therefore be used as a dictionary key or as an element of another set.
- Non-empty sets (not frozensets) can be created by placing a comma-separated list of elements within braces, for example: {'jack', 'sjoerd'}, in addition to the set constructor.


### frozenset
- description