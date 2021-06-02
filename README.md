# Servers list and filtering
App shows listing of servers, also filters can be applied to minimize the results.

### Technologies used

- PHP 7.4+
- Symfony 5.3
- MySQL 5.7+
- VueJS 2.5
- Doctrine ORM

### Prerequisite
- PHP 7.4
- composer
- nginx/apache server
- node 13+

### How to setup

- Take pull of the code
- Check env file and set up database credentials
  ```
    php bin/console doctrine:database:create
    php app/console doctrine:migrations:migrate -n
  ```
- To build front end assets
  ```
    yarn install
    yarn encore dev --watch
  ```
- Run the application on local machines http://localhost
