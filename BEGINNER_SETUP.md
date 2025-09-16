# LockerRoom — Beginner Setup Guide
 
This guide is for Harm, to run LockerRoom locally.

---

Before starting, make sure these commands **all work**:

```bash
docker --version
node -v
git --version
```
If any of them say “command not found,” go to Step 1 and install the missing tool. Otherwise skip to Step 2.


## 1. Install the tools you need 


1. **Docker Desktop** (runs the database for you)  
   Download: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)  
   Test it:  
   ```bash
   docker --version
   ```

2. **Node.js (version 18 or newer)** (runs the app)  
   Download: [https://nodejs.org/en/download](https://nodejs.org/en/download)  
   Test it:  
   ```bash
   node -v
   ```

3. **Git** (lets you download this project)  
   Download: [https://git-scm.com/downloads](https://git-scm.com/downloads)  
   Test it:  
   ```bash
   git --version
   ```

If all 3 commands work without errors, you’re good

---

## 2. Download LockerRoom

Open your terminal (Mac/Linux) or PowerShell (Windows), then run:

```bash
git clone https://github.com/aarnav-hariramani/LockerRoom.git
cd LockerRoom
```

---

## 3. Start the database

In the project folder:

```bash
docker compose up -d
```

This will start PostgreSQL in the background.

---

## 4. Install dependencies

```bash
npm install
```

This downloads everything the app needs.

---

## 5. Copy environment files

```bash
cp apps/server/.env.example apps/server/.env
cp apps/web/.env.example apps/web/.env
```

*(On Windows, you may need to copy manually by renaming the files.)*

---

## 6. Create the database tables

```bash
npm run -w apps/server prisma:migrate
```

---

## 7. Run the app

```bash
npm run dev
```

- Web app → [http://localhost:5173](http://localhost:5173) **USE THIS ONE TO SEE THE WEBSITE IGNORE THE API**
- API backend → [http://localhost:4000](http://localhost:4000)

---

