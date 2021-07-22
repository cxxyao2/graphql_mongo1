# GraphQL Turorial

> ![graphQL](https://unsplash.com/photos/0DJHJcpwN9Q)

# Install Pacakges

> npm i

# Run Server

> nodemon server.js

# In Browser Address Bar

> localhost:5000/graphql

# Query Data

case 1:

```

query{
  books {
    id
    name
    authorId
  }
}
```

case2 (shorthand):

```
{
  books {
    id
    name
    authorId
  }
}
```

case3: id is a parameter

```
query{
  book(id:1){
    name
	}
}

```

case4: id is a parameter, concat author name

```
query{
  book(id:1){
    name,
    author {
      name
    }
	}
}

```

# mutation( add, delete, update)

case1: add

```
mutation {
  addBook(name:"Great Gasby",authorId:1){
    name
	}
}

```
# GraphQL API vs  RESTful API
|             GraphQL   API        |        RESTful  API        |
| -------------------------------  | ---------------------------|
| a query language                 | an architectural concept   |
| a specification                  | 
| 
| opertaor over a single endpoint
| use HTTP
| performance and flexibility      | simplicity
| each entity: from multiply objects
down to specific fileds,
| get exactly what you need        | get a complete data set    |
