describe("입출력 검증", function () {
  // before(() => alert("테스트를 시작합니다. 시험 시작전"))
  // beforeEach(() => alert("단일 테스트 전에 시행합니다. "))
  describe("입출력", function () {
    function makeTest(){
      let expected = 'test';
      it(`입출력을 검증합니다.`, function () {
        assert.equal(objectText(), expected);
      });
    }
    makeTest();
    // for (let x = 3; x <= 5; x++) {
    //   makeTest(x);
    // }
  });
  //
  // describe("음수 또는 정수가 아닐때 검증 : NaN 으로 출력", function () {
  //   it("n이 음수 일때 : NaN 입니다.", function () {
  //     assert.isNaN(pow(2, -1));
  //   });
  //   it("n이 정수가 아닐 때 : NaN 입니다.", function () {
  //     assert.isNaN(pow(2, 1.3));
  //   });
  // });
});