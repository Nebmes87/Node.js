const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  const url1 = "/home";
  const url2 = "/about";

  if (req.url === url1) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    res.end(`<h1>Корневая страница</h1>
        <p>Количество просмотров: ${homeViews()}</p>
        <a href=${url2}>Ссылка на страницу about</a>`);
  } else if (req.url === url2) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    res.end(`<h1>Страница about</h1>
        <p>Количество просмотров: ${aboutViews()}</p>
        <a href=${url1}>Ссылка на главную страницу</a>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end("<h1>Страница не найдена!</h1>");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let homeViews = makeCounter();
let aboutViews = makeCounter();
