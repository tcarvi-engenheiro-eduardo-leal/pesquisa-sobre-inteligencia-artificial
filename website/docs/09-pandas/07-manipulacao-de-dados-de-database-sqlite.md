# Manipulação de Dados de database sqlite
- Executar operações simples de consulta e criação de nova tabela com funções do pandas e sqlalchemy
    - pd.read_sql_table([parameters])
    - pd.to_sql([parameters])
- Executar manipulação de dados CRUD com uso de ORM de sqlalchemy
    - ORM é uma técnica de MAPEAMENTO OBJETO RELACIONAL que permite a execução do CRUD em banco de dados relacional, através de comandos enviados para objetos criados no código.
    - Biblioteca ORM para CRUD: sqlalchemy
        - CREATE
        - READ
        - UPDATE
        - DELETE

# Criar Engine para as conexões com o banco de dados local sqlite

```python
from sqlalchemy import create_engine
# sqlalchemy pode fazer conexão com:
# - sqlite
# - mysql/mariaDB
# - postgresql
# - oracle

# define a conexão co o banco de daados sqlite
engine = create_engine('sqlite:///:memory:')
```  

## Manipulação de Dados apenas com Pandas e sqlalchemy
```python
from sqlalchemy import create_engine
engine = create_engine('sqlite:///:memory:')

import pandas as pd

# sem limitar a consulta por colunas
pd.read_sql_table('user_account', engine)
```

## READ de Banco de Dados sqlite com pandas e com limitação das colunas a serem mostradas
```python
from sqlalchemy import create_engine
engine = create_engine('sqlite:///:memory:')

import pandas as pd

# limitando a consulta para colunas escolhidas
pd.read_sql_table('user_account', engine, columns=['id', 'fullname'])
```  

## Importar dados csv da internet, e criar nova tabela no banco de dados
```python
from sqlalchemy import create_engine
engine = create_engine('sqlite:///:memory:')

import pandas as pd
url = 'https://XXXX'

# gravar dados importados, em uma nova table de nome "clientes"
pd.to_sql('clientes', engine, index=False)

# Verifica se houve gravação
inspector = inspect(engine)
print(inspector.get_table_name()) # ['clientes'] 
```  

## Manipulação de dados apenas com estrutura de dados ORM e sqlalchemy

### Declaração de Modelo de Dados, para estrutura dos Objetos ORM do banco de dados.
```python
from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from typing import List, Optional

# Classe da base para o modelo
class Base(DeclarativeBase)
    pass

# Classes que representam os dados do Banco de Dados devem importar da classe de base.
# A mapped class typically refers to single particular database table, the name of which is indicated by using the __tablename__ class-level attribute.
class User(Base):
    __tablename__ = "user_account"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(30))
    fullname: Mapped[Optional[str]]
    address: Mapped[List['Address']] = relationship(
        back_populates = "user", cascade="all, delete-orphan"
    )
    def __repr__(self) -> str: # "-> str" é apenas uma "Annotation Function".
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"

class Address(Base):
    __tablename__ = "address"
    id: Mapped[int] = mapped_column(primary_key=True)
    email_address: Mapped[str]
    user_id: Mapped[int] = mapped_column(ForeignKey("user_account.id"))
    user: Mapped["User"] = relationship(
        back_populates = "address"
    )
    def __repr__(self) -> str: # "-> str" é apenas uma "Annotation Function".
        return f"Address(id={self.id!r}, email_address={self.email_address!r})"
```  

### Gravar dados iniciais no Banco de Dados
```python
Base.metadata.create_all(engine)
```  

### CREATE objeto de dados (ORM) no script para persistência no banco de dados
```python
import sqlalchemy
from sqlalchemy.orm import Session

with Session(engine) as session:
    spongebob = User(
        name="spongebob",
        fullname="Spongebob Squarepants",
        address=[Address(email_address="spongebob@sqlalchemy.org")],
    )
    sandy = User(
        name="Sandy",
        fullname="Sandy Cheeks",
        address=[
            Address(email_address="sandy@sqlalchemy.org")],
            Address(email_address="sandy@squirrelpower.org")
        ],
    )
    patrick = User(name="patrick", fullname="Patrick Star")
    session.add_all([spongebob, sandy, patrick])
    session.commit()
```  


### READ com select, já tendo rows em database local sqlite
```python
from sqlalchemy import select

session = Session(engine)
stmt = select(User).where(User.name.in_(["spongebob", "sandy"]))
for user in session.scalars(stmt):
    print(user)
```  

### READ com select, usando join
```python
from sqlalchemy import select

session = Session(engine)
stmt = (
    select(Address)
        .join(Address.user)
        .where(User.name == "sandy")
        .where(Address.email_address == "sandy@sqlalchemy.org")
)
sandy_address = session.scalars(stmt).one()
sandy_address
```  

###  Update dos dados, usando join
```python
from sqlalchemy import select

stmt = select(User).where(User.name == "patrick")
patrick = session.scalars(stmt).one()
patrick.address.append(Address(email_address="patrickstart@sqlalchemy.org"))
sandy_adress.email_address = "sandy_cheeks@sqlalchemy.org"

session.commit()
```  