# Data Modeling

## nodsql vs sql [READ:](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

- "For complex queries: SQL databases are good fit for the complex query intensive environment whereas NoSQL databases are not good fit for complex queries. On a high-level, NoSQL don’t have standard interfaces to perform complex queries, and the queries themselves in NoSQL are not as powerful as SQL query language."

- "For the type of data to be stored: SQL databases are not best fit for hierarchical data storage. But, NoSQL database fits better for the hierarchical data storage as it follows the key-value pair way of storing data similar to JSON data. NoSQL database are highly preferred for large data set (i.e for big data). Hbase is an example for this purpose."

- Describe the differences in scalability between a SQl and NoSQL database as though you were speaking to a non-technical friend.
Imagine traffic jam on your most common freeway, some of them have only one path with no other ramps to either leave the freeway or to drive onto another, just **Vertically Scalable**, and then you have all of your reroutes and ramps that can lead you to the same location just in a different way, somewhat like **Horizontally Scalable**

## sql modeling techniques [READ:](https://www.essentialsql.com/get-ready-to-learn-sql-7-simplified-data-modeling/)

- "We connect lines between tables to show relationships. In some cases an entry in one table can be related to more than one entry in another. This is called a one-to-many relationship."

- Prior to designing your relational database, it might be useful to create a diagram of the database tables and their relationships.

- Explain the difference between a primary and foreign key.

  - primary key: uniquely identify each row in a table.  A table typically has one primary key, but can have more.  When the key has more than one column, it is called a compound key.

  - foreign key: This is a column or set of columns which match a primary key in another table.

## sql vs nosql [WATCH:](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

- How do we treat keywords and parameters differently in SQL syntax?

  - In SQL syntax, keywords are beneficial for tables and column names

  - As for parameters, you can exchange data between stored functions and the applications that are called.

- Define normalization within the context of schemas and data.

  - Normalization: this is a process that promotes organization with your data within the database by enhancing data integrity and elimination.

- Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.

  - One-to-One: Picture feeding one student data, so you only one table.

  - One-to-Many: Now you have many students and you need to feed them the same data, so you build more more open spots in the table.

  - Lastly, you along with other instructors are feeding many students data, so you build more open spots in your table and relate them to the students.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
