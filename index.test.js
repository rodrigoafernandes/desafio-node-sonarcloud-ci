const request = require("supertest")
const app = require("./app")

describe("Test root path", () => {
  test("Should returns http status code OK and json response body when GET root path", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Full Cycle Rocks!");
      });
  });
});