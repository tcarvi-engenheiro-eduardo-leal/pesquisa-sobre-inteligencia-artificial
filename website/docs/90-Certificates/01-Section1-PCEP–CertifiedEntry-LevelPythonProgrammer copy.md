# Section 1 - PCEP™ – Certified Entry-Level Python Programmer

## Section 1: Computer Programming and Python Fundamentals
- 18% of exam value
- 7 exam items
- Python Data Types:
    - Text Type:
        - str
            - `x = "text"`
    - Numeric Types:
        - int
            - `x = 20`
        - float
            - `x = 20.5`
        - complex
            -  `x = 6 + 4j`
            ```python title="complex number"
            # importing "cmath" for complex number operations
            import cmath
            # Initializing real numbers
            x = 5
            y = 3
            # converting x and y into complex number
            z = complex(x,y);
            print ("The real part of complex number is : ",end="")
            print (z.real)
            print ("The imaginary part of complex number is : ",end="")
            print (z.imag)
            ```  
    - Sequence Types: (container types)
        - list 
            - `x = ["apple", "banana", "cherry"]`
        - tuple
            -  `x = ("apple", "banana", "cherry")`
        - range
            - `x = range(6)`
    - Mapping Type: (container type)
        - dict
            -  `x = {"name" : "John", "age" : 36}`
    - Set Types: (container types)
        - set
            - `x = {"apple", "banana", "cherry"}`
        - frozenset
            - `x = frozenset({"apple", "banana", "cherry"})`
    - Boolean Type:
        - bool
            - `x = True`
    - Binary Types:
        - bytes
            - `x = b"Hello"`
        - bytearray
            - `x = bytearray(5)`
        - memoryview
            - `x = memoryview(bytes(5))`
    - None Type:
        - NoneType
            - `x = None`  
- Variables  
    - Variables are containers for storing data values.
    - String variables can be declared either by using single or double quotes.
    - Variable names are case-sensitive.
    - If you want to specify the data type of a variable, this can be done with casting.
    ```python
    x = str(3)    # x will be '3'
    y = int(3)    # y will be 3
    z = float(3)  # z will be 3.0
    print(type(x)) # type(x) will be 'str'
    print(type(y)) # type(y) will be 'int'
    print(type(z)) # type(z) will be 'float'
    ```  
- basic input-output operations:
    - File handling is an important part of any web application.
    - Python has several functions for creating, reading, updating, and deleting files.
    - File Handling:
        - The key function for working with files in Python is the open() function.
        - The open() function takes two parameters; filename, and mode.
        - There are four different methods (modes) for opening a file:
            - "r" - Read - Default value. Opens a file for reading, error if the file does not exist
            - "a" - Append - Opens a file for appending, creates the file if it does not exist
            - "w" - Write - Opens a file for writing, creates the file if it does not exist
            - "x" - Create - Creates the specified file, returns an error if the file exists
        - In addition you can specify if the file should be handled as binary or text mode
            - "t" - Text - Default value. Text mode
            - "b" - Binary - Binary mode (e.g. images)
            ```python 
            f = open("demofile.txt", "rt")
            ```  
            
- basic operators
    - 
##### PCEP-30-02 1.1 – Understand fundamental terms and definitions
- Computers have their own language, called machine language, which is very rudimentary.
    - **Instruction List (IL)**
        - A complete set of known commands of a computer system is called an **instruction list**, sometimes abbreviated to **IL**. Different types of computers may vary depending on the size of their ILs, and the instructions could be completely different in different models.
    - Machines have many different languages.
    - Computer programming is the act of composing the selected programming language's elements in the order that will cause the desired effect.
        - The effect could be different in every specific case – it's up to the programmer's imagination, knowledge and experience.
        - Such a composition has to be correct in many senses:
            - alphabetically – a program needs to be written in a recognizable script, such as Roman, Cyrillic, etc.
            - lexically – each programming language has its dictionary and you need to master it; thankfully, it's much simpler and smaller than the dictionary of any natural language;
            - syntactically – each language has its rules and they must be obeyed;
            - semantically – the program has to make sense.
            - Unfortunately, a programmer can also make mistakes with each of the above four senses. Each of them can cause the program to become completely useless.
            - Let's assume that you've successfully written a program. How do we persuade the computer to execute it? You have to render your program into machine language. Luckily, the translation can be done by a computer itself, making the whole process fast and efficient. 
    - We can say that each language (machine or natural, it doesn't matter) consists of the following elements:
        - an **alphabet**: a set of symbols used to build words of a certain language (e.g., the Latin alphabet for English, the Cyrillic alphabet for Russian, Kanji for Japanese, and so on).
        - a **lexis**: (aka a dictionary) a set of words the language offers its users (e.g., the word "computer" comes from the English language dictionary, while "cmoptrue" doesn't; the word "chat" is present both in English and French dictionaries, but their meanings are different).
        - a **syntax**: a set of rules (formal or informal, written or felt intuitively) used to determine if a certain string of words forms a valid sentence (e.g., "I am a python" is a syntactically correct phrase, while "I a python am" isn't).
        - **semantics**: a set of rules determining if a certain phrase makes sense (e.g., "I ate a doughnut" makes sense, but "A doughnut ate me" doesn't)
        - **The IL is, in fact, the alphabet of a machine language**. This is the simplest and most primary set of symbols we can use to give commands to a computer.
        - Computers and humans need a common language for communication, or a bridge between their two linguistic contexts.
        - We need a language in which humans can write their programs and a language that computers may use to execute the programs, one that is far more complex than machine language and yet far simpler than natural language.
        - Such languages are often called **high-level programming languages**. They are at least somewhat similar to natural ones in that they use symbols, words and conventions readable to humans. These languages enable humans to express commands to computers that are much more complex than those offered by ILs.
        - **A program written in a high-level programming language is called a source code** (in contrast to the machine code executed by computers). Similarly, **the file containing the source code is called the source file**.
        - There are two ways of transforming a program from a high-level programming language into machine language:
            - **COMPILATION**
                - **The source program is translated once by generating a file containing the machine code**.
                - **The program that performs this translation is called a compiler or translator**.
            - **INTERPRETATION**
                - **The source program is translated each time it has to be run**.
                - **The program that performs this kind of transformation is called an interpreter, as it interprets the code every time it is intended to be executed**.
                - **The end-user always needs the interpreter to execute the source program. There isn't the generation of a machine code that can be distributed without the interpreter.**
            - There are very few languages that can be both compiled and interpreted. Usually, a programming language is projected with this factor in its constructors' minds - will it be compiled or interpreted?
- Interpretation
    - What does the interpreter actually do?
    - Let's assume you have written a source program (source code of a program). Now it exists as one or more source files, in a computer. The source code is usually placed in text files (source files).
        - Note: it has to be pure text, without any decorations like different fonts, colors, embedded images or other media. Now you have to invoke the interpreter and let it read your source file.
    - The interpreter reads the source code in a way that is common in Western culture: from top to bottom and from left to right. There are some exceptions to this rule.
    - First of all, the interpreter checks if all subsequent lines are correct: from top to bottom and from left to right
    - If the interpreter finds an error, it finishes its work immediately.
        - The only result in this case is an error message.
    - The interpreter will inform you where the error is located and what caused it. However, these messages may be misleading, as the interpreter isn't able to follow your exact intentions, and may detect errors at some distance from their real causes.
        - For example, if you try to use an entity of an unknown name, it will cause an error, but the error will be discovered in the place where it tries to use the entity, not where the new entity's name was projeto-de-terraplenagem/objetivos-do-projetoduced.
        - In other words, the actual reason is usually located a little earlier in the code, for example, in the place where you had to inform the interpreter that you were going to use the entity of the name.
    - If the line looks good, the interpreter tries to execute it (note: each line is usually executed separately, so the trio "**read-check-execute**" can be repeated many times - more times than the actual number of lines in the source file, as some parts of the code may be executed more than once).
    - It is also possible that a significant part of the code may be executed successfully before the interpreter finds an error. This is normal behavior in this execution model.
    - Due to historical reasons, languages designed to be utilized in the interpretation manner are often called **scripting languages**, while the source programs encoded using them are called **scripts**.
- You may ask now: which is better?
    - The "compiling" model or the "interpreting" model? There is no obvious answer. If there had been, one of these models would have ceased to exist a long time ago. Both of them have their advantages and their disadvantages.
- **Advantages of interpretation** against the compilation form of translation
    - You can run the code as soon as you complete writing it - there are no additional phases of translation;
    - The code is stored using programming language, not machine language - this means that it can be run on computers using different machine languages.
    - You don't compile your code separately for each different architecture.
- **Disadvantages of interpretation** against the compilation form of translation
    - Don't expect interpretation to ramp up your code to high speed - your code will share the computer's power with the interpreter, so it can't be really fast;
    - Both you and the end user have to have the interpreter to run your code.
- **Advantages of compilation** against the interpretation form of translation:
    - The execution of the translated code (compiled code) is usually faster.
    - Only the developer has to have the compiler.
    - The end-user may use the compiled code without the compiler.
    - The translated code is stored using machine language - as it is very hard to understand it, your own inventions and programming tricks are likely to remain your secret.
- **Disadvantages of compilation** against the interpretation form of translation
    - The process of compilation (generation of compiled code) may be a very time-consuming process - you may not be able to run your code immediately after making an amendment.
    - You have to have as many compilers as hardware platforms you want your code to be run on.
- **Python is an interpreted language**.
    - This means that it inherits all the described advantages and disadvantages of interpretation.
    - If you want to program in Python, you'll need the **Python interpreter**.
    - You won't be able to run your source code without a **Python interpreter**.
    - Fortunately, **Python interpreter** is free. This is one of its most important advantages.
- Python is a **widely-used**, **interpreted**, **object-oriented**, and **high-level programming language** with **dynamic semantics**, used for **general-purpose programming**.
- **dynamic semantics** ?
- One of the amazing features of Python is the fact that it is actually one person's work.
    - Usually, new programming languages are developed and published by large companies employing lots of professionals, and due to copyright rules, it is very hard to name any of the people involved in the project. Python is an exception.
    - There are not many languages whose authors are known by name.
    - Python was created by Guido van Rossum, born in 1956 in Haarlem, the Netherlands. Of course, Guido van Rossum did not develop and evolve all the Python components himself.
    - The speed with which Python has spread around the world is a result of the continuous work of thousands (very often anonymous) programmers, testers, users (many of them aren't IT specialists) and enthusiasts, but it must be said that the very first idea (the seed from which Python sprouted) came to one head - Guido's.
    - In 1999, Guido van Rossum defined his goals for Python:
        - an easy and intuitive language just as powerful as those of the major competitors;
        - open source, so anyone can contribute to its development;
        - code that is as understandable as plain English;
        - suitable for everyday tasks, allowing for short development times.
- Python isn't a young language anymore. It is mature and trustworthy. It's not a one-hit wonder. It's a bright star in the programming firmament, and time spent learning Python is a very good investment.
- What makes Python special?
    - How did it happen that large companies adopted Python and implemented their flagship products using it?
    - There are many reasons – we've listed some of them already, but let's enumerate them again in a more practical manner:
        - it's easy to learn – the time needed to learn Python is shorter than for many other languages; this means that it's possible to start the actual programming faster;
        - it's easy to teach – the teaching workload is smaller than that needed by other languages; this means that the teacher can put more emphasis on general (language-independent) programming techniques, not wasting energy on exotic tricks, strange exceptions and incomprehensible rules;
        - it's easy to use for writing new software – it's often possible to write code faster when using Python;
        - it's easy to understand - it's also often easier to understand someone else's code faster if it is written in Python;
        - it's easy to obtain, install and deploy – Python is free, open and multiplatform; not all languages can boast that.
    - Of course, Python has its drawbacks, too:
        - it's not a speed demon – Python does not deliver exceptional performance;
        - in some cases it may be resistant to some simpler testing techniques – this may mean that debugging Python code can be more difficult than with other languages.
- It should also be stated that Python is not the only solution of its kind available on the IT market.
    - Python has two direct competitors, with comparable properties and predispositions. These are:
        - Perl – a scripting language originally authored by Larry Wall;
            - more traditional and more conservative than Python, and resembles some of the old languages derived from the classic C programming language.
        - Ruby – a scripting language originally authored by Yukihiro Matsumoto.
            - more innovative and more full of fresh ideas than Python.
    - Python itself lies somewhere between these two creations.
- We see it every day and almost everywhere. It's used extensively to implement complex Internet services like search engines, cloud storage and tools, social media and so on. Whenever you use any of these services, you are actually very close to Python, although you wouldn't know it.
- Many developing tools are implemented in Python. 
- More and more everyday-use applications are being written in Python. Lots of scientists have abandoned expensive proprietary tools and switched to Python. Lots of IT project testers have started using Python to carry out repeatable test procedures. The list is long.
- Despite Python's growing popularity, there are still some niches where Python is absent, or is rarely seen:
    - low-level programming (sometimes called "close to metal" programming): if you want to implement an extremely effective driver or graphical engine, you wouldn't use Python;
    - applications for mobile devices: although this territory is still waiting to be conquered by Python, it will most likely happen someday.
- There are two main kinds of Python, called Python 2 and Python 3.
- Python 2 is an older version of the original Python.
    - Its development has since been intentionally stalled, although that doesn't mean that there are no updates to it. On the contrary, the updates are issued on a regular basis, but they are not intended to modify the language in any significant way. They rather fix any freshly discovered bugs and security holes. Python 2's development path has reached a dead end already, but Python 2 itself is still very much alive.
- Python 3 is the newer (or to be more precise, the current) version of the language. It's going through its own evolutionary path, creating its own standards and habits.
- These two versions of Python aren't compatible with each other. Python 2 scripts won't run in a Python 3 environment and vice versa, so if you want the old Python 2 code to be run by a Python 3 interpreter, the only possible solution is to rewrite it, not from scratch, of course, as large parts of the code may remain untouched, but you do have to revise all the code to find all possible incompatibilities. Unfortunately, this process cannot be fully automatized.
- It's too hard, too time-consuming, too expensive, and too risky to migrate an old Python 2 application to a new platform, and it's even possible that rewriting the code will projeto-de-terraplenagem/objetivos-do-projetoduce new bugs into it. It's easier, and more sensible, to leave these systems alone and to improve the existing interpreter, instead of trying to work inside the already functioning source code.
- Python 3 isn't just a better version of Python 2 – it is a completely different language, although it's very similar to its predecessor. When you look at them from a distance, they appear to be the same, but when you look closely, though, you notice a lot of differences. 
- If you're modifying an old existing Python solution, then it's highly likely that it was coded in Python 2. This is the reason why Python 2 is still in use. There are too many existing Python 2 applications to discard it altogether.
- If you're going to start a new Python project, you should use Python 3, and this is the version of Python that will be used during this course.
- It is important to remember that there may be smaller or bigger differences between subsequent Python 3 releases (e.g., Python 3.6 projeto-de-terraplenagem/objetivos-do-projetoduced ordered dictionary keys by default under the CPython implementation) – the good news, though, is that all the newer versions of Python 3 are backward compatible with the previous versions of Python 3. Whenever meaningful and important, we will always try to highlight those differences in the course.
- All the code samples you will find during the course have been tested against Python 3.4, Python 3.6, Python 3.7, and Python 3.8.
- The PSF's president is Guido von Rossum himself, and for this reason, the Pythons implementation developed by PSF are called canonical. They are also considered to be reference Pythons, as any other implementation of the language should follow all standards established by the PSF.
- Guido van Rossum used the "C" programming language to implement the very first version of his language and this decision is still in force. All Pythons coming from the PSF are written in the "C" language. There are many reasons for this approach. One of them (probably the most important) is that thanks to it, Python may be easily ported and migrated to all platforms with the ability to compile and run "C" language programs (virtually all platforms have this feature, which opens up many expansion opportunities for Python).
- This is why the PSF implementation is often referred to as CPython. This is the most influential Python among all the Pythons in the world.
- Another Python family member is Cython.
    - Cython is one of a possible number of solutions to the most painful of Python's traits – the lack of efficiency.
    - Large and complex mathematical calculations may be easily coded in Python (much easier than in "C" or any other traditional language), but the resulting code execution may be extremely time-consuming.
    - How are these two contradictions reconciled? One solution is to write your mathematical ideas using Python, and when you're absolutely sure that your code is correct and produces valid results, you can translate it into "C". Certainly, "C" will run much faster than pure Python.
    - This is what Cython is intended to do – to automatically translate the Python code (clean and clear, but not too swift) into "C" code (complicated and talkative, but agile).
- Another version of Python is called Jython.
    - "J" is for "Java". Imagine a Python written in Java instead of C. This is useful, for example, if you develop large and complex systems written entirely in Java and want to add some Python flexibility to them. The traditional CPython may be difficult to integrate into such an environment, as C and Java live in completely different worlds and don't share many common ideas.
    - Jython can communicate with existing Java infrastructure more effectively. This is why some projects find it useful and necessary.
    - Note: the current Jython implementation follows Python 2 standards. There is no Jython conforming to Python 3, so far.
- PyPy - a Python within a Python.
    - In other words, it represents a Python environment written in Python-like language named RPython (Restricted Python).
    - It is actually a subset of Python. 
    - The source code of PyPy is not run in the interpretation manner, but is instead translated into the C programming language and then executed separately.
    - This is useful because if you want to test any new feature that may be (but doesn't have to be) projeto-de-terraplenagem/objetivos-do-projetoduced into mainstream Python implementation, it's easier to check it with PyPy than with CPython. This is why PyPy is rather a tool for people developing Python than for the rest of the users.
    - This doesn't make PyPy any less important or less serious than CPython, of course.
    - In addition, PyPy is compatible with the Python 3 language.
    - There are many more different Pythons in the world. You'll find them if you look, but this course will focus on CPython.
- How to get Python and how to get to use it?
    - There are several ways to get your own copy of Python 3, depending on the operating system you use.
    - Linux users most probably have Python already installed - this is the most likely scenario, as Python's infrastructure is intensively used by many Linux OS components.
    - For example, some distributors may couple their specific tools together with the system and many of these tools, like package managers, are often written in Python. Some parts of graphical environments available in the Linux world may use Python, too.
    - If you're a Linux user, open the terminal/console, and type:
    ```console title="Execute python instruction"
    python3
    ```  
    - Besides its many useful components, the Python 3 standard installation contains a very simple but extremely useful application named IDLE. IDLE is an acronym: Integrated Development and Learning Environment.
    - Errors in the IDLE:
        - the traceback (which is the path that the code traverses through different parts of the program)
    - the location of the error (the name of the file containing the error, line number and module name); note: the number may be misleading, as Python usually shows the place where it first notices the effects of the error, not necessarily the error itself;
    - the content of the erroneous line; note: IDLE’s editor window doesn’t show line numbers, but it displays the current cursor location at the bottom-right corner; use it to locate the erroneous line in a long source code;
    - the name of the error and a short explanation.
- lexis, syntax, and semantics
##### PCEP-30-02 1.2 – Understand Python’s logic and structure
- keywords
- instructions
- indentation
- comments
##### PCEP-30-02 1.3 – projeto-de-terraplenagem/objetivos-do-projetoduce literals and variables into code and use different numeral systems
- Data Types:
    - Python Literals
    - strings
    - numbers, 
    - characters,
    - logical values,
    - objects 

- Boolean, integers, floating-point numbers
- scientific notation
- strings
- binary, octal, decimal, and hexadecimal numeral systems
- variables
- naming conventions
- implementing PEP-8 recommendations
##### PCEP-30-02 1.4 – Choose operators and data types adequate to the problem
- Operators:
    - Python operators
- Expressions:
    - Python expressions
- Python Variables:
    - rules governing variables
- numeric operators: `** * / % // + –`
- string operators: `* +`
- assignment and shortcut operators
- unary and binary operators
- priorities and binding
- bitwise operators: `~ & ^ | << >>`
- Boolean operators: `not, and, or`
- Boolean expressions
- relational operators ` == != > >= < <= `
- the accuracy of floating-point numbers
- type casting
##### PCEP-30-02 1.5 – Perform Input/Output console operations
- the print() and input() functions
- the sep= and end= keyword parameters
- the int() and float() functions
