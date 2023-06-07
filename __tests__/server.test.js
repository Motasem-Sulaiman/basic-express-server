"user strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe("Server", () => {

  it("404 on a bad route", async () => {
    const response = await request.get("/bad");
    expect(response.status).toEqual(404);
  });
  it("404 on a bad method", async () => {
    const response = await request.post("/badmethod");
    expect(response.status).toEqual(404);
  });
  it("no name in the query string",async()=>{
  const response=await request.get('/person?name=')
  expect(response.status).toEqual(500);

  })
  it("the name is in the query string",async()=>{
  const response=await request.get('/person?name=motasem')
  expect(response.status).toEqual(200);

  })

  it("given an name in the query string, the output object is correct",async()=>{
const response=await request.get('/person?name=ahmed')
expect(response.body).toEqual({name:'ahmed'})


  })
});
