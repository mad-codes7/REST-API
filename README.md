# User Management API

A simple REST API built with Node.js and Express for managing user data stored in JSON.

## 🚀 Quick Start

```bash
npm install
node index.js
```
Server runs on `http://localhost:8080`

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page |
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create new user |
| GET | `/api/users/:id` | Get user by ID |
| PATCH | `/api/users/:id` | Update user |

## 🧪 Testing the API

### Using Postman or Hoppscotch

**For GET requests:**
1. Set method to `GET`
2. Enter URL: `http://localhost:8080/api/users`
3. Click Send

**For POST/PATCH requests:**
1. Set method to `POST` or `PATCH`
2. Enter URL (e.g., `http://localhost:8080/api/users`)
3. Go to Body section
4. Select `x-www-form-urlencoded`
5. Add form fields:
   - `first_name`: John
   - `last_name`: Doe
   - `email`: john@example.com
   - `gender`: Male
   - `job_title`: Developer
6. Click Send

## 📖 Request Examples

**Get all users:**
```
GET http://localhost:8080/api/users
```

**Get user by ID:**
```
GET http://localhost:8080/api/users/998
```

**Create user:**
```
POST http://localhost:8080/api/users
Content-Type: application/x-www-form-urlencoded

first_name=John&last_name=Doe&email=john@example.com&gender=Male&job_title=Developer
```

**Update user:**
```
PATCH http://localhost:8080/api/users/998
Content-Type: application/x-www-form-urlencoded

first_name=UpdatedName&email=updated@example.com
```

## 📁 Project Structure

```
├── index.js              # Main app file
├── MOCK_DATA.json        # User data storage
├── package.json
└── package-lock.json
```

## 🔧 User Data Format

```json
{
  "id": 998,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "gender": "Male",
  "job_title": "Developer"
}
```

*Sample data generated from [mockaroo.com](https://mockaroo.com/)*

## 🚧 Features

- **RESTful API Design** - Clean, standard HTTP methods and endpoints
- **File-based Storage** - Uses JSON file for data persistence
- **CRUD Operations** - Create, Read, Update user data
- **Express Middleware** - URL-encoded data parsing
- **Dynamic ID Generation** - Auto-incremented user IDs
- **JSON Response Format** - Standardized API responses
