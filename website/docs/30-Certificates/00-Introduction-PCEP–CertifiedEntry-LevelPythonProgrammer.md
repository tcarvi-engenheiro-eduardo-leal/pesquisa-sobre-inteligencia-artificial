# projeto-de-terraplenagem/objetivos-do-projetoduction - PCEP™ – Certified Entry-Level Python Programmer
  
## Functions
- A function is a block of code which only runs when it is called.
    - To call a function, use the function name followed by parenthesis.
- A parameter is the variable listed inside the parentheses in the function definition.
    - We use the term parameter when we describe a function.
    - We think about a "parameter of a function assignment".
- An argument is the value that is passed to the function when it is called.
    - So we say: "I've passed argument "3" to the function print()."
    - Information is passed into functions as arguments.
    - You pass as many arguments as you want, just separate them with a comma.
    - Arguments are often shortened to args in Python documentations.
- But these two words: "arguments" or "parameters" may be used to represent the idea of `information that are passed into a function`.
- A function may return data as a result.
- By default, a function must be called with the correct number of arguments. Meaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.
- If you don't want to define how many arguments that will be passed into your function; add a * before the parameter name in the function definition. This way the function will receive a ***tuple of arguments***, and can access the items accordingly. In mathematics, a tuple is an ordered sequence of values.  
```python title="tuple as function call argument"
def my_function(*kids):
    print("The youngest child is " + kids[2])
my_function("Emil", "Tobias", "Linus")
``` 
- Arbitrary Arguments are often shortened to *args in Python documentations.  
- You can also send arguments with the key = value syntax. (keyword arguments).
    - This way the order of the arguments does not matter.
    ```python title="Keyword arguments"
    def my_function(child3, child2, child1):
        print("The youngest child is " + child3)
    my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")  
    ```  
- The phrase Keyword Arguments are often shortened to kwargs in Python documentations.
- Arbitrary Keyword Arguments is presented by **kwargs in the documentation.
- If you don't want to define how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition. This way the function will receive a ***dictionary of arguments***, and can access the items accordingly:
```python title="Arbitrary Keyword Arguments"
def my_function(**kid):
    print("His last name is " + kid["lname"])
my_function(fname = "Tobias", lname = "Refsnes")  
```  
- Arbitrary Kword Arguments are often shortened to **kwargs in Python documentations.
- If we call the function without argument, it uses the "Default Parameter Value".
```python title="Default Parameter Value"
def my_function(country = "Norway"):
    print("I am from " + country)
    
my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")  
```  
- You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.
- To let a function return a value, use the return statement
```python title="Return values"
def my_function(x):
    return 5 * x
    
print(my_function(3))
print(my_function(5))
print(my_function(9))  
```  
- The pass Statement
    - Function definitions cannot be empty, but if you use the pass statement, you avoid getting an error.  
    ```python title="Pass statement"
    def myfunction():
        pass
    ```  
- Python also accepts function recursion, which means a defined function can call itself.  
    - Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.
    - The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.
    = In this example, tri_recursion() is a function that we have defined to call itself ("recurse"). We use the k variable as the data, which decrements (-1) every time we recurse. The recursion ends when the condition is not greater than 0 (i.e. when it is 0).
```python title="Recursion"
def tri_recursion(k):
    if(k > 0):
        result = k + tri_recursion(k - 1)
        print(result)
    else:
        result = 0
    return result
    
print("\n\nRecursion Example Results")
tri_recursion(6)  
```  
### Types of Functions:
- There are built-in functions that come together with the Python Environemnt.
    - For example: function `print()`
- There are module funtions that come together with Python Modules that must be imported to your script.
- There are user-defined functions

### Processamento de functions pelo interpretador de Python:
1. Python checks if the name specified is legal (it browses its internal data in order to find an existing function of the name; if this search fails, Python aborts the code);
2. Python checks if the function's requirements for the number of arguments allows you to invoke the function in this way (e.g., if a specific function demands exactly two arguments, any invocation delivering only one argument will be considered erroneous, and will abort the code's execution);
3. Python leaves your code for a moment and jumps into the function you want to invoke; of course, it takes your argument(s) too and passes it/them to the function;
fourth, the function executes its code, causes the desired effect (if any), evaluates the desired result(s) (if any) and finishes its task;  
4. Finally, Python returns to your code (to the place just after the invocation) and resumes its execution.  
  
## Conditions
- Python supports the usual logical conditions from mathematics:
    - Equals: `a == b`
    - Not Equals: `a != b`
    - Less than: `a < b`
    - Less than or equal to: `a <= b`
    - Greater than: `a > b`
    - Greater than or equal to: `a >= b`
    - These conditions can be used in several ways, most commonly in "if statements" and loops.
- An "if statement" is written by using the if keyword.
```python title="if statement"
a = 33
b = 200
if b > a:
    print("b is greater than a")
```  
- elif keyword
    - The elif keyword is Python's way of saying "if the previous conditions were not true, then try this condition".
    ```python title="elif keyword"
    a = 33
    b = 33
    if b > a:
        print("b is greater than a")
    elif a == b:
        print("a and b are equal")
    ```  
- else keyword
    - The else keyword catches anything which isn't caught by the preceding conditions.
    ```python title="else keyword"
    a = 200
    b = 33
    if b > a:
        print("b is greater than a")
    elif a == b:
        print("a and b are equal")
    else:
        print("a is greater than b")
    ```  
- If you have only one statement to execute, you can put it on the same line as the if statement.
```python title="short if statement"
if a > b: print("a is greater than b")
```  
- If you have only one statement to execute, one for if, and one for else, you can put it all on the same line:  
```python title="short if-else statement"
a = 2
b = 330
print("A") if a > b else print("B")
```  
- Technique known as Ternary Operators, or Conditional Expressions:
    - One line if else statement, with 3 conditions.
    - Instruction code is written before the loginal operator.
    ```python title="Ternary Operators, or Conditional Expressions"
    a = 330
    b = 330
    print("A") if a > b else print("=") if a == b else print("B")
    ```  
- And keyword
    - The and keyword is a logical operator, and is used to combine conditional statements:
    ```python title="and kwyword"
    a = 200
    b = 33
    c = 500
    if a > b and c > a:
        print("Both conditions are True")
    ```  
- Or keyword
    - The or keyword is a logical operator, and is used to combine conditional statements:
    ```python title="or keyword"
    a = 200
    b = 33
    c = 500
    if a > b or c > a:
        print("At least one of the conditions is True")
    ```  
- Not keyword
    - The not keyword is a logical operator, and is used to reverse the result of the conditional statement:
    ```python title="or keyword"
    a = 33
    b = 200
    if not a > b:
        print("a is NOT greater than b")
    ```  
- Nested If
    - You can have if statements inside if statements, this is called nested if statements.
    ```python title="Nested if"
    x = 41
    if x > 10:
        print("Above ten,")
        if x > 20:
            print("and also above 20!")
        else:
            print("but not above 20.")
    ```  
- The pass Statement
    - if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error.  
    ```python title="pass statement"
    a = 33
    b = 200
    if b > a:
        pass
    ```  
  
## Loops
- Python has two primitive loop commands:
    - while loops
        - With the while loop we can execute a set of statements as long as a condition is true.
        ```python title="while loop"
        i = 1
        while i < 6:
            print(i)
            i += 1
        ```  
        - With the break statement we can stop the loop even if the while condition is true:
        ```python title="while loop with break statement"
        i = 1
        while i < 6:
            print(i)
            if i == 3:
                break
            i += 1
        ```  
    - for loops
        - A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
        - This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.
        - With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.
        ```python title="for loop"
        fruits = ["apple", "banana", "cherry"]
        for x in fruits:
            print(x)
        ```  
        - The for loop does not require an indexing variable to set beforehand.
        - Even strings are iterable objects, they contain a sequence of characters
        - With the break statement we can stop the loop before it has looped through all the items:
        ```python title="for loop with break statement"
        for x in "bananaZ":
            if x == "Z":
                break
            print(x)
            ```  
  
## syntax
- Python uses **new lines to complete a command**, as opposed to other programming languages which often use semicolons or parentheses.
- Python Indentation
    - Python **relies on indentation, using whitespace, to define scope, such as the scope of loops, functions and classes**. Other programming languages often use curly-brackets for this purpose.
    - Indentation refers to the spaces at the beginning of a code line.
    - Python uses indentation to indicate a block of code.
    - The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.
    - You have to use the same number of spaces in the same block of code, otherwise Python will give you an error.
- Python Variables
    - In Python, variables are created when you assign a value to it.
    - Python has no command for declaring a variable.
- Comments
    - Python has commenting capability for the purpose of in-code documentation.
    - Comments start with a #, and Python will render the rest of the line as a comment:
  
## semantics
  
## runtime environment
  