# dict
- https://docs.python.org/3/library/stdtypes.html#dict
- dict is a Mapping Type
- A mapping object maps hashable values to arbitrary objects. 
- Mappings are mutable objects. There is currently only one standard mapping type, the dictionary. (For other containers see the built-in list, set, and tuple classes, and the collections module.)
- A dictionary’s keys are almost arbitrary values. Values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys.
- Values that compare equal (such as 1, 1.0, and True) can be used interchangeably to index the same dictionary entry.

- Class Initializers:
    - class dict(**kwargs)
    - class dict(mapping, **kwargs)
    - class dict(iterable, **kwargs)
- Return a new dictionary initialized from an optional positional argument and a possibly empty set of keyword arguments.

- Dictionaries can be created by several means:
    - a comma-separated list of key: 
        - value pairs within braces: `{'jack': 4098, 'sjoerd': 4127}` or 
        - `{4098: 'jack', 4127: 'sjoerd'}`
    - a dict comprehension: `{}`, `{x: x ** 2 for x in range(10)}`
    - the type constructor: `dict()`, `dict([('foo', 100)`, `('bar', 200)])`, `dict(foo=100, bar=200)`
        - If no positional argument is given, an empty dictionary is created.
        - If a positional argument is given and it is a mapping object, a dictionary is created with the same key-value pairs as the mapping object.
        - Otherwise, the positional argument must be an iterable object. Each item in the iterable must itself be an iterable with exactly two objects. The first object of each item becomes a key in the new dictionary, and the second object the corresponding value. If a key occurs more than once, the last value for that key becomes the corresponding value in the new dictionary.
        - If keyword arguments are given, the keyword arguments and their values are added to the dictionary created from the positional argument. If a key being added is already present, the value from the keyword argument replaces the value from the positional argument.
- To illustrate, the following examples all return a dictionary equal to `{"one": 1, "two": 2, "three": 3}`:
```python
a = dict(one=1, two=2, three=3)
b = {'one': 1, 'two': 2, 'three': 3}
c = dict(zip(['one', 'two', 'three'], [1, 2, 3]))
d = dict([('two', 2), ('one', 1), ('three', 3)])
e = dict({'three': 3, 'one': 1, 'two': 2})
f = dict({'one': 1, 'three': 3}, two=2)
a == b == c == d == e == f
True
```  
- Providing keyword arguments as in the first example only works for keys that are valid Python identifiers. Otherwise, any valid keys can be used.
- These are the operations that dictionaries support (and therefore, custom mapping types should support too):
    - list(d)
        - Return a list of all the keys used in the dictionary d.
    - len(d)
        - Return the number of items in the dictionary d.
    - d[key]
        - Return the item of d with key key. Raises a KeyError if key is not in the map.
        - If a subclass of dict defines a method __missing__() and key is not present, the d[key] operation calls that method with the key key as argument.
        - The d[key] operation then returns or raises whatever is returned or raised by the __missing__(key) call. 
        - No other operations or methods invoke __missing__(). If __missing__() is not defined, KeyError is raised. __missing__() must be a method; it cannot be an instance variable:
            - class Counter(dict):
                - def __missing__(self, key):
                    return 0
            - c = Counter()
            - c['red']
            - # 0
            - c['red'] += 1
            - c['red']
            - # 1
            - The example above shows part of the implementation of collections.Counter. A different __missing__ method is used by collections.defaultdict.
    - ...
- ...





