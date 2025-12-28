Smart ToDo API
---------------

A RESTful backend project built using **Node.js + Express + MongoDB** that allows users to manage their daily tasks easily.  
This API supports **User Authentication**, **CRUD Operations**, and **Authorization using JWT Token**.


Features
---------

- User Signup & Login with JWT
- Secure Password Hashing (bcrypt)
- Create / Read / Update / Delete ToDo tasks
- MongoDB database integration
- Authentication protected routes
- Fully testable using Postman


Tech Stack
-----------

| Technology            | Usage |
|-----------------------|--------|
| Node.js + Express     | Server & Route Handling |
| MongoDB (Mongoose)    | Database |
| JWT                   | Authentication |
| bcryptjs              | Password Hashing |
| Postman               | API Testing |


Installation & Run Locally
--------------------------

```bash
git clone https://github.com/arijitgupta02/SmartToDoAPI
cd SmartToDoAPI
npm install
npm run dev
