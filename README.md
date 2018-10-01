# simple-ecommerce-backend
Requirements:
- Composer
- MySQL
- Elasticsearch
- Redis

please make sure these all are available on your system.

Installation:
1. First you should clone the repository to your local machine. use
` git clone https://github.com/rastemoh/simple-ecommerce-backend `. You may run this command in a directory that your 
web server (e.g. apache) serves it.

2. Go to the created directory and run `composer install`. composer would fetch all required packages for you
3. Then run `composer run-script post-root-package-install` and a `.env` file is created in the root of project. 
4. Alter the content of the file according to the configuration of your system. (Database connection, elastic, redis)
5. For creating tables you can run `php migrations/tables.php`. if no error printed, it means table are created.
6. Open the link in a browser with respect to the prefix that your web server adds. 
(e.g. http://localhost/simple-commerce-backend/public/index.php/products). Or you can use PHP development server by 
running this command in root of the of project `php -S localhost:[port] -t public/ public/index.php` and then check 
`curl localhost:[port]/index.html`

# About Structure of the APP
The backend created using PHP relying on following components:
- symfony/http-foundation
- symfony/routing
- symfony/http-kernel
- illuminate/database for using Eloquent ORM
- symfony/dotenv
- elasticsearch/elasticsearch for connection to elastic
- predis/predis for connection to redis

Elastic is used for searching in products and variants and Redis is used for caching the search results.

The frontend is built using Angular v6 and uses the PHP provided API. Data transmission is done in JSON format.
The source of frontend could be found [here](https://github.com/rastemoh/simple-ecommerce-front)
## Remaining Works:
- Elasic indices are not updated with all product manipulations. it should be updated on product/variant update/delete.
- Redis cache should be set as dirty when product is manipulated (e.g. update or delete)
- API key should be used to authorize administrative tasks (e.g. add/edit products)
