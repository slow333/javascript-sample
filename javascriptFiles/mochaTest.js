describe("pow", function () {
  // before(() => alert("테스트를 시작합니다. 시험 시작전"))
  // beforeEach(() => alert("단일 테스트 전에 시행합니다. "))
  describe("시작 시험 입니다.", function () {

    it("2를 세 번 곱하면 8입니다.", function() {
      assert.equal(pow(2, 3), 8);
    });

    it("3을 네 번 곱하면 81입니다.", function() {
      assert.equal(pow(3, 4), 81);
    });
  });

  describe("x를 세번 곱합니다.", function () {
    function makeTest(x){
      let expected = x * x * x;
      it(`${x}를 세번 곱하면 ${expected} 입니다.`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 3; x <= 5; x++) {
      makeTest(x);
    }
  });
  describe("x를 6번 곱합니다.", function () {
    function makeTest(x){
      let expected = x * x * x * x *x * x;
      it(`${x}를 세번 곱하면 ${expected} 입니다.`, function () {
        assert.equal(pow(x, 6), expected);
      });
    }

    for (let x = 4; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("음수 또는 정수가 아닐때 검증 : NaN 으로 출력", function () {
    it("n이 음수 일때 : NaN 입니다.", function () {
      assert.isNaN(pow(2, -1));
    });
    it("n이 정수가 아닐 때 : NaN 입니다.", function () {
      assert.isNaN(pow(2, 1.3));
    });
  });
});
