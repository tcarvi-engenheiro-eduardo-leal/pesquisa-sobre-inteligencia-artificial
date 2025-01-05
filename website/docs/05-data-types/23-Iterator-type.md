### Iterator Type
- Python supports a concept of iteration over containers.
- This is implemented using two distinct methods; these are used to allow user-defined classes to support iteration.
- Sequences always support the iteration methods.
- Python defines several iterator objects to support iteration over general and specific sequence types, dictionaries, and other more specialized forms.
- The specific types are not important beyond their implementation of the iterator protocol.
- Once an iterator’s __next__() method raises StopIteration, it must continue to do so on subsequent calls.
- Implementations that do not obey this property are deemed broken.