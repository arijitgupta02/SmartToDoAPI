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
```

Postman API Collection
----------------------


Import the file below into Postman to test the API:
`docs/SmartToDoAPI.postman_collection.json`

Steps:
1. SignUp → Get new user created
2. Login → copy returned token
3. In Postman set variable `token = returned_jwt_token`
4. Use Create Task / Get Tasks / Delete Task

