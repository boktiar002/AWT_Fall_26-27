# Product Management API — Lab Task 1

A NestJS REST API that manages a small shop's **products** and **employees** with full CRUD, backed by **PostgreSQL** through **TypeORM**.

## Student details

| SL | Name | Student ID | Section |
|----|------|------------|---------|
| 1  | YOUR NAME | XX-XXXXX-X | X |

---

## Tech stack

- NestJS 11
- PostgreSQL
- TypeORM (`@nestjs/typeorm`)
- class-validator / class-transformer for request validation

## Project structure

```
product-management-api/
├── src/
│   ├── main.ts                     # app bootstrap + global validation
│   ├── app.module.ts               # DB connection + feature modules
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── product.entity.ts
│   │   ├── products.controller.ts
│   │   ├── products.service.ts     # all DB operations live here
│   │   └── products.module.ts
│   └── employees/
│       ├── dto/
│       │   ├── create-employee.dto.ts
│       │   └── update-employee.dto.ts
│       ├── employee.entity.ts
│       ├── employees.controller.ts
│       ├── employees.service.ts    # all DB operations live here
│       └── employees.module.ts
├── screenshots/                    # Postman evidence (01–07)
├── .env.example
├── .gitignore
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── tsconfig.build.json
```

## Database setup

1. Install PostgreSQL and make sure it is running.
2. Create the database (in psql or pgAdmin):
   ```sql
   CREATE DATABASE product_management;
   ```
3. Copy the sample env file and put in your own password:
   ```bash
   cp .env.example .env
   ```
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password_here
   DB_NAME=product_management
   ```
   Tables (`products`, `employees`) are created automatically on first run (`synchronize: true`).

## Installation and run

```bash
npm install          # install dependencies
npm run start:dev    # run in watch mode
# or
npm run build && npm run start:prod
```

The server starts at `http://localhost:3000`.

## Endpoints

### Products

| Method | Endpoint        | Description                     |
|--------|-----------------|---------------------------------|
| POST   | `/products`     | Create and save a product       |
| GET    | `/products`     | Return all saved products       |
| GET    | `/products/:id` | Return the product with that ID |
| PATCH  | `/products/:id` | Update the product with that ID |
| DELETE | `/products/:id` | Delete the product with that ID |

Sample POST body:
```json
{
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 850,
  "quantity": 25
}
```

Sample PATCH body:
```json
{
  "price": 799.5,
  "quantity": 20
}
```

### Employees

| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | `/employees`     | Create and save an employee       |
| GET    | `/employees`     | Return all saved employees        |
| GET    | `/employees/:id` | Return the employee with that ID  |
| PATCH  | `/employees/:id` | Update the employee with that ID  |
| DELETE | `/employees/:id` | Delete the employee with that ID  |

Sample POST body:
```json
{
  "name": "Rahim Uddin",
  "email": "rahim@example.com",
  "phone": "01712345678",
  "password": "dummy1234",
  "age": 28,
  "yearsOfWorking": 4
}
```

## Error handling

- `400 Bad Request` — invalid or missing fields, unknown fields, or a non-numeric `:id`
- `404 Not Found` — no record exists with the given ID

## Screenshots

Postman screenshots for every product operation are in [`screenshots/`](./screenshots):

| File | Shows |
|------|-------|
| `01-create.png` | POST body and saved product response |
| `02-get-all.png` | GET all with at least two products |
| `03-get-by-id.png` | GET by a real product ID |
| `04-update.png` | PATCH body and success response |
| `05-confirm-update.png` | GET by ID showing the changed values |
| `06-delete.png` | DELETE request and success response |
| `07-confirm-delete.png` | GET all without the deleted product |
