<h3>Application Stories</h3>

User Stories

      1. I want customers to be able to buy insurance
      
      2. I want customers to be able to monitor the status of the insurance
      
      3. I want customers to make less action as possible for their purchase
      
      4. where customer purchase insurance. I want website to lightweight and responsive

Company Stories

      1. Company want to sale insurance
      
      2. Company want to expand business to other country
      
      3. Company want an abblity to manage and add insurance
      
      4. Manager and Executive want to monitor status on Realtime Operation

<h3>Application Stories</h3>

In order to archieve the user and company stories above i need to plan more on website Architecure and my solution is
seperate stack in 4 Individual part and have ablity to deploy it with CI/CD Pipeline to different Server

1. International Static Website for Company to show capability and Product (Fronted REACT
   JS+ANTD)[Repository](https://github.com/son1122/Customer-P4)
2. Localization web with ability to sell Insurance and has account to monitor it (Fronted REACT
   JS) [Repository](https://github.com/son1122/Main-P4)
3. Admin Portal for employee to manage and monitor Insurance (Fronted REACT
   JS) [Repository](https://github.com/son1122/Admin-P4)
4. Backend(Data Server) With RESTful API to feed json to Fronted Website (Express
   JS) [Repository](https://github.com/son1122/Backend-P4)

<h1 style="font-size:300%;"><img width="100" alt="Screenshot 2565-11-16 at 14 05 55" src="https://fact-link.com/home/dhipaya/logo.png"> Dhipaya</h1>


This Backend Server is use for CRUD Query to Postgres SQL Data base and provide Restful API

<h3>Feature</h3>

      1. Authentication for Customer and Admin
      2. Full CRUD
      3. RESTful API
      4. Deploy on bit.io and cyclic.sh

<h2>My Planing Step</h2>

<h3>1. List All requirement</h3>

<h3>2. make a List of technical difficulties and study all of them</h3>

    2.1 What API Need for Fronted at each website

<h3>3. make a simple step plan</h3>

    3.1 initial project
    
    3.2 Setup Enviroment variable / add simple API / add Migrate file
    
    3.3 Test package and run on Local Machine
    
    3.4 Deploy on bit.io and cyclic.sh with CI/CD Pipeline
    
    3.5 Test on deploy Environment
    
    3.6 Add More Function
    
    3.7 Deply New Change

<h2>Code Explain</h2>
<img width="833" alt="Screenshot 2566-01-23 at 08 41 43" src="https://user-images.githubusercontent.com/76699506/213953015-e600ed66-0229-451e-ae77-03cd5259ba34.png">

Path and Method of API

      GET /dashboard/getinsurancetype
      GET /dashboard/getinsuranceid
      GET /dashboard/getcarmodel
      GET /admin/getinsurancetype
      GET /admin/getinsuranceid
      GET /admin/getcarmodel/:year
      GET /admin/getcarmodel
      GET /admin/getcustomerinsurance
      GET /admin/getcarclaim
      GET /admin/getlocation
      GET /admin/getcustomer
      GET /admin
      POST /admin/signup
      POST /admin/login
      GET /admin/verify
      PUT /admin/edit
      DELETE /admin/user
      GET /admin/getcaryear
      GET /admin/dashboarddata
      GET /admin/claim
      POST /admin/addcar
      POST /admin/claim
      PUT /admin/insure
      POST /admin/geteditinsure
      GET /customer/getinsurancetype
      GET /customer/getinsuranceid
      GET /customer/getcarmodel/:year
      GET /customer/getcarmodel/:year/:brand
      GET /customer/getcustomerinsurance
      GET /customer/getcarclaim
      GET /customer/getlocation
      GET /customer/getcustomer
      GET /customer
      POST /customer/signup
      POST /customer/login
      GET /customer/verify
      PUT /customer/edit
      DELETE /customer/user
      GET /customer/getcaryear
      POST /customer/newinsure
      GET /customer/dashboarddata
      GET /customer/claim

## GA Question

What would you do differently?

    1.Prepare more on Plan
    
    2.Redesign all Database Model and association
    
    3.Consider NonSQl For faster development

What are you most proud of?

    1. Make It Work

What would you do next?

    1. Add More Fundtion on API

What did you learn?

    1. Sequelize
