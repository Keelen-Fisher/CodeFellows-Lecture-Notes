
# SQL (Structured Query Language) Practice

## Relational Databases

- Before learning the SQL syntax, it's important to have a model for what a relational database actually is. A relational database represents a collection of related (two-dimensional) tables. Each of the tables are similar to an Excel spreadsheet, with a fixed number of named columns (the attributes or properties of the table) and any number of rows of data.

- For example, if the Department of Motor Vehicles had a database, you might find a table containing all the known vehicles that people in the state are driving. This table might need to store the model name, type, number of wheels, and number of doors of each vehicle for example.

## Basic SQL Concepts

- SQL is s a search language for you to instruct a database about what information you’d like retrieved from it. Just think of it as an advanced, really structured google search.

- Databases organize data in different tables. It has columns with names of fields, and then rows holding the actual data.

- Even though the data in a database may be unique, the results of any particular query may not be – take our Movies table for example, many different movies can be released the same year. In such cases, SQL provides a convenient way to discard rows that have a duplicate column value by using the `DISTINCT` keyword.

- `ASC`: to sort the data in ascending order. `DESC`: to sort the data in descending order.

- The `ORDER BY` keyword is used to sort the result-set in ascending or descending order. The `ORDER BY` keyword sorts the records in ascending order by default. To sort the records in descending order, use the `DESC` keyword.

- Multi-table queries with JOINs: Tables that share information about a single entity need to have a primary key that identifies that entity uniquely across the database. One common primary key type is an auto-incrementing integer (because they are space efficient), but it can also be a string, hashed value, so long as it is unique.

- Using the JOIN clause in a query, we can combine row data across two separate tables using this unique key. The first of the joins that we will introduce is the INNER JOIN. The INNER JOIN is a process that matches rows from the first table and the second table which have the same key (as defined by the ON constraint) to create a result row with the combined columns from both tables. After the tables are joined, the other clauses we learned previously are then applied.

- `OUTER JOINs`: If the two tables have asymmetric data, which can easily happen when data is entered in different stages, then we would have to use a `LEFT JOIN`, `RIGHT JOIN` or `FULL JOIN` instead to ensure that the data you need is not left out of the results.

## Mid-Level SQL Concepts

- What is a Schema? With the columns being the properties and the rows being instances of the entity in the table. In SQL, the `database schema` is what describes the structure of each table, and the datatypes that each column of the table can contain.

- Inserting new data: When inserting data into a database, we need to use an `INSERT` statement, which declares which table to write into, the columns of data that we are filling, and one or more rows of data to insert. In general, each row of data you insert should contain values for every corresponding column in the table. You can insert multiple rows at a time by just listing them sequentially. You use `INSERT INTO` with your choice of `VALUES`

- Updating rows: In addition to adding new data, a common task is to update existing data, which can be done using an `UPDATE` statement. Similar to the `INSERT` statement, you have to specify exactly which table, columns, and rows to update. In addition, the data you are updating has to match the data type of the columns in the table schema.

- Deleting rows: When you need to delete data from a table in the database, you can use a `DELETE` statement, which describes the table to act on, and the rows of the table to delete through the   clause.

- When you have new entities and relationships to store in your database, you can create a new database table using the `CREATE TABLE` statement.

      - Example of creating a table: 

      CREATE TABLE Database (
      Name TEXT,
      Version FLOAT,
      Download_count INTEGER
      );

- Altering tables: As your data changes over time, SQL provides a way for you to update your corresponding tables and database schemas by using the `ALTER TABLE` statement to add, remove, or modify columns and table constraints.

- Dropping tables: In some rare cases, you may want to remove an entire table including all of its data and metadata, and to do so, you can use the `DROP TABLE` statement, which differs from the `DELETE` statement in that it also removes the table schema from the database entirely.

- Lesson Exercise Images (for confirmation of completion):

- Complete all up to lesson 6:![Lesson 6](Images/Exercise%206%20Confirm%20complete.png)

- Start of Lesson 7 ![Lesson 7](Images/Exercises%201-6%20done%20confirmation.png)

- Lesson 14 Complete: ![lesson 14](Images/Exercise%2014%20completed.png)

- Lesson 15 Complete: ![Lesson 15](Images/Exercise%2015%20complete.png)

- Lesson 16 Complete: ![Lesson 16](Images/Exercise%2016%20Complete.png)

- Lesson 17 Complete: ![Lesson 17](Images/Exercise%2017%20Completed.png)

- Lesson 18 Complete: Issues with importating last image, this is the answer for both tasks:

  - DROP TABLE Movies;

  - DROP TABLE BoxOffice;

[Home](https://keelen-fisher.github.io/new-repository/)
