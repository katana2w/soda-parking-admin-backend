## SODA PARKING BACKEND

##### First step:
`npm install`

##### Before run application you should run migrations:
``migrate-mongo up``

##### For run project on local machine:
``npm run start``

### AWS config - simple solution (not recommend for production):

#### Step 1:
- create EC2 instance with Linux
- configure EC2 instance Security Groups - be sure EC2 is available from outer (Internet)
#### Step 2:
- install NodeJs 12.20.1
- install MongoDB 4.2.11
- install and configure NGNIX (example config you can find below)
- install pm2 (from npm)
#### Step 3:
- git configuration - need for clone projects from github
- create a folder, go in this folder and clone projects from git repos
#### Step 4 - install and build frontend:
- go to frontend folder and run: `npm install && npm run build`
#### Step 5 - add environment parameter:
- in console run: `echo 'export MONGO_URI=mongodb://localhost:27017/soda-parking-line' >> ~/.bashrc`
#### Step 6 - install and run backend:
- go to backend folder and run: `npm install && pm2 start bin/www`

##### IMPORTANT! You should configure NGINX server:
<pre><code>server {  
listen 80 default_server;  
listen [::]:80 default_server; 
        root /PATH_TO_FRONTEND_BUILD; 
        server_name front_end;
        location / {
                try_files $uri /index.html;
        }
        location /api {
                proxy_pass http://API_ADDRESS:API_PORT;
        }
}</code></pre>

### AWS config - recommended production solution:
- CodeBuild - CI/CD
- S3 bucket - For store user data and static files, also we can use s3 backer for storing FE build
- EC2 - for backend side (setup from Elastic Beanstalk)
- Elastic Beanstalk
- CloudFront - CDN for frontend build
- Certificate Manager - if needed SSL certificate
- Load balancer
