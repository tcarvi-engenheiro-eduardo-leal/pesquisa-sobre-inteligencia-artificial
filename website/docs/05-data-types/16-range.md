# range
- Sequence type
- There are three basic sequence types: lists, tuples, and range objects. 
- A range is an immutable sequence of numbers. 
- The range is commonly used for looping a specific number of times inside "for loops".
- It is:
    - **ordered** (its items have a defined order, and that order will not change)
    - **unchangeable** (this list of numbers are immutable)
    - and **doesn't allow duplicate values**.
- Constructor:
    - class range(stop)
    - class range(start, stop[, step])
    - The arguments to the range constructor must be integers (either built-in int or any object that implements the __index__() special method).
    - If the step argument is omitted, it defaults to 1.
    - If the start argument is omitted, it defaults to 0.
    - If step is zero, ValueError is raised.
- Exemplos:  
```python
list(range(10)) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list(range(1, 11)) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list(range(0, 30, 5)) # [0, 5, 10, 15, 20, 25]
list(range(0, 10, 3)) # [0, 3, 6, 9]
list(range(0, -10, -1)) # [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
list(range(0)) # []
list(range(1, 0)) # []
```  