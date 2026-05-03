# newsApi
### The NEWS WEBSITE will stick on facts every day.
---

### Why is this website worth your time?
- Every time it is ready. If it is night: welcome, use night theme!
- Popular standarts on using Typescript never throw you a error while searching news!
- The fastest nowadays Vite never make you wait.
- The most popular api source, newsApi - get any news for each preferences

---

### Docker deployment
This project is fully Dockerized for easy setup. You don't need to install Node.js locally — just Docker.

---

### How to create docker image with ready secret api keys?

- First of all get your SECRET api key: go on source (https://newsapi.org/), sign in and get the key.
- Secondly, setup new .env file and write there your key.
- Finally, put in the next command and get relax
```bash
$ cd news-app
$ docker compose up --build
```
- If you wanna restart or stop website
```bash
$ docker compose stop
$ docker compose restart
```
- To delete containers
```bash
$ docker compose down
```
- If you wonna open this website after 5 years
```bash
$ docker save -o news-site.tar news-site

$ docker load -i news-site.tar
$ docker compose up --build
```
