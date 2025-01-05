# Operations on ranges


- **The advantage of the range type over a regular list or tuple is that a range object will always take the same (small) amount of memory, no matter the size of the range it represents (as it only stores the start, stop and step values, calculating individual items and subranges as needed).**
- Range objects implement the collections.abc.Sequence ABC, and provide features such as containment tests, element index lookup, slicing and support for negative indices (see Sequence Types — list, tuple, range):
```python
variable_range_name = range(0, 20, 2)  
print(variable_range_name)  # it prints: range(0, 20, 2)
for seq in variable_range_name:
    print(seq)
    # it print many lines, each with a seq: 0 2 4 6 8 10 12 14 16 18
variable_bool_name1 = 11 in variable_range_name
print(variable_bool_name1) # it prints: False
variable_bool_name2 = 10 in variable_range_name
print(variable_bool_name2) # it prints: True
number_to_be_found = 14
# Index of the first ocurrence of a number_to_be_found inside que range
index_found1 = variable_range_name.index(number_to_be_found)
print(index_found1) # It prints 7
# Selecting a number by index
variable_number2 = variable_range_name[7] # Number found: 14
# Generating a new range
variable_new_range1 = variable_range_name[:3] # range(0, 6, 2)
variable_new_range2 = variable_range_name[:-1] # range(0, 18, 2)
```  