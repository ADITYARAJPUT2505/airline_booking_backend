## project setup

->clone the project on your local
->execute `npm install` on the same path as of your root directory of the downloaded project
->create a `.env` file in the root directory and add the following environment variable

- `PORT-3000`
  ->inside the `src/config` folder create a new file `config.json` and the add the following piece of json

```
{
"development": {
"username": <your_db_login_name>,
"password": <your password>,
"database": "flight_search_db",
"host": "127.0.0.1",
"dialect": "mysql"
},
}
```

->once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight Table
- Airport Table
- City Table

- A Flight belongs to an airplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belongs to a city
- One airport can have many flights , but a flight belongs to one airport
