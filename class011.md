# Mongo and Mongoose

## SQL vs NoSQL

| SQL                                                                    | NoSQL                                                                                        |
|:-----------------------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| SQL databases are primarily called as Relational Databases (RDBMS)     | NoSQL database are primarily called as non-relational or distributed database.               |
| SQL databases are table based databases and in number of rows          | NoSQL databases are document based, key-value pairs, graph databases or wide-column stores.  |
| SQL databases have predefined schema                                   | NoSQL databases have dynamic schema for unstructured data.                                   |
| SQL databases are vertically scalable                                  | NoSQL databases are horizontally scalable.                                                   |

- Fixed-point data types are perfect for number schemas that don't change like currency where you know you'll always have two digits to the right of the decimal point. Two fixed-point data types exist in SQL called decimal (DEC) and numeric (NUM).

- SQL.js provides support for executing single SQL strings that contain multiple statements, as seen below:

sqlstr = "CREATE TABLE tableName(colA, colB);";
sqlstr += "INSERT INTO hello VALUES (0, 'hello');"

- What kind of data is a good fit a NoSQL database?
Semi-structured or Unstructured data / flexible schema. Limited pre-defined access paths and query patterns. No complex queries, stored procedures, or views. High velocity transactions
- Give a real world example.

- Which type of database is best for hierarchical data storage?
`NoSQL`

- Which type of database is best for scalability?
`SQL`

## Video Notes over the Same Topic

- What does SQL stand for?
Structure Query Language:
This is not a database, but another style of language that has different syntax and keywords.

Example: Bolded and all caps are SQL Keywords:
**SELECT** *id, name, price* **FROM** *products*

- What is a relational database?
This work with some structures and supports the SQL Language.

- What type of structure does a relational database work with?
Database Structure.

- What is a ‘schema’?
A Schema in SQL is a collection of database objects associated with a database. The username of a database is called a Schema owner (owner of logically grouped structures of data). Schema always belong to a single database whereas a database can have single or multiple schemas

- What is a NoSQL/MongoDB database?
Otherwise known as "humongous"

- How does it work?

- What is inside of a Mongo database?

- Which is more flexible - SQL or MongoDB? and why.
This depends on what your data consists of. If you want more accessibility in a new language with little to a moderate amount of code, then SQL is the way to go. NoSQL is made for larger amounts of code. NoSQL is more flexible if you have troubles with formating your data. There is also scaling your data, SQL has horizontal as being diffcult but vertical being very possible. Which could be good so that you can add more servers. NoSQL is good in vertical and horizontal scaling.

- What is the disadvantage of a NoSQL database?
It is Schema-less
No-very few relations

[Video on SQL vs. NoSQL:](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
