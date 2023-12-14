import express from "express";
const app = express();
const port = 3000;
console.log("INDEX");

type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  console.log(user, "USER");
  return user.age >= 18;
}

const justine: User = {
  name: "Justine",
  age: 12,
};

app.get("/", (req, res) => {
  const isJustineAnAdult: boolean = isAdult(justine);
  res.send(`Hello World!` + isJustineAnAdult);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
