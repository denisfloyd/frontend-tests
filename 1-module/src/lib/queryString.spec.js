const { queryString } = require("./queryString");

describe("Object to query string", () => {
  it("should create a valid query string when a object is valid", () => {
    const obj = {
      name: "Denis",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Denis&profession=developer");
  });
});
