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
- Secondly, open cmd and put in the next command.
```bash
$ docker build --build-arg VITE_API_KEY="your_key" -t news-site .
```
- Finally, put in the next command and get relax
```bash
$ docker run -d -p 8080:80 --name news-container news-site
```
