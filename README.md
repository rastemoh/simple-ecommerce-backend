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
