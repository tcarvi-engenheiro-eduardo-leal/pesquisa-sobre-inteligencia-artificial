# list
## Constructor:
```python
list_name = ["apple", "banana", "cherry"]
# List comprehension
# new_list = [expression for item in iterable if truth_testing_value == True]
new_list = [x for x in list_name if "a" in x] # List comprehension
# expression that may cause modification: x
# connector: for
# item in iterable: x in list_name
# optional condition: if "a" in x
```

## Ordem:
- **ordered by index**
    - "list" items are indexed, the first item has index [0], the second item has index [1] etc.

## Mutabilidade
- **changeable**
    - A list is changeable because its items may be **changed, added, and removed**.

## Permission of duplicate items
- The collection "list" **allows duplicate values**.

## Permission of diverse data types in the same collection
- The collection "list" may contain items of **different data types**.

## Its type, in general
- A list is a ***collection type***.
    - It supports: `x in var_name`, `len(var_name)`, and `for x in var_name`.
- A list is a ***sequence type***.
    - It supports `indexing, slicing, or other sequence-like behavior`.

