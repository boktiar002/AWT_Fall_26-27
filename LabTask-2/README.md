# BuildTrack API — Lab Task 2 (NestJS + TypeORM + PostgreSQL)

Entities: **Project**, **ProgressUpdate**, **Installment** (both linked to Project by `projectId`).

## Run it (about 5 minutes)
1. Create the database in pgAdmin / psql:  `CREATE DATABASE buildtrack;`
2. Set the `DB_PASSWORD` environment variable to your PostgreSQL **password**.
3. Install:            `npm install`
4. Run migration:      `npm run migration:run`      → creates `projects`, `progress_updates`, `installments`
5. Verify tables in pgAdmin (or `\dt` in psql).
6. Start API:          `npm run start:dev`          → http://localhost:3000
7. Postman → Import → `BuildTrack.postman_collection.json` → run the requests in folder order.

## Migration commands
| Command | What it does |
|---|---|
| `npm run migration:generate` | Compares entities with DB and writes a new migration in `src/migrations` |
| `npm run migration:run` | Executes pending migrations (creates tables) |
| `npm run migration:revert` | Undoes the last migration |

`synchronize: false` — tables are created only through migrations (required by the task).

> If you want to show generation live: delete the file in `src/migrations`, drop the tables,
> then run `npm run migration:generate` followed by `npm run migration:run`.

## Endpoints
| Method | URL | Purpose |
|---|---|---|
| POST | /projects | Create a project |
| GET | /projects, /projects/:id | List / one project |
| POST | /progress-updates | Post a construction progress update |
| GET | /progress-updates, /progress-updates/:id | List / one update |
| POST | /installments | Add a buyer installment |
| GET | /installments, /installments/:id | List / one installment |

## Validation
`ValidationPipe` is global (`src/main.ts`). Required fields use `@IsNotEmpty()`.
Sending `"name": ""` returns:
```json
{ "message": ["name should not be empty"], "error": "Bad Request", "statusCode": 400 }
```
