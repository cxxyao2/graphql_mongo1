- start app in terminal: node server.js
- in browser address bar: http://localhost:5000/graphql
- GraphQL server on Node.js
- React front-end (with Apollo)
- MongoDB to store data
- ![graphQL](assets/graphQL.png)
- mutation (change data )
- ![graphQL](assets/mutation.png)
- query ( = select data from one or multiple tables)
- ![graphQL](assets/query.png)
- query with parameters
- ![query](assets/query_with_para.png)
- mutation with parameters
- ![mutation](assets/mutation-variable.png)

prerequisites:
1, install mongoDB locally or remotely

2, graphQL

```
mutation{
  addAuthor(
    name:"Helen",
    age:12
  ){
   id, name,age
  }
}

query{
  books {
    id,
    name
  }
}
```
