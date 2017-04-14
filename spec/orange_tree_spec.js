describe("an orange tree", function() {
  var tree;

  beforeEach(function() {
    tree = new OrangeTree();
    tree.passGrowingSeason();
    tree.passGrowingSeason();
    tree.passGrowingSeason();
    tree.passGrowingSeason();
    tree.passGrowingSeason();
  });

  it("has an age", function() {
    expect(tree.age).toBeGreaterThan(0);
  });
  it("has a height", function() {
    expect(tree.height).toBeGreaterThan(0);
  });

  it("has a collection of oranges", function() {
    expect(tree.oranges).toEqual(jasmine.any(Array))
  });


  describe("reporting whether it's mature", function() {
    it("is mature if it has reached fruit-bearing age", function() {
      tree.passGrowingSeason();
      expect(tree.isMature()).toBe(true);
    });

    it("is not mature if it has not reached fruit-bearing age", function (){
      expect(tree.isMature()).toBe(false);
    });
  });

  describe("reporting whether it's dead", function() {
    it("is dead if it's reached the maximum age for an orange tree", function(){
      for (var i = 0; i < 100; i++) {
        tree.passGrowingSeason();
      };
      expect(tree.isDead()).toBe(true);
    });
    it("is not dead if it's not reached the maximum age for an orange tree", function (){
      expect(tree.isDead()).toBe(false);
    });
  });

  describe("reporting whether it has oranges", function() {
    it("has oranges if it's collection of oranges is not empty", function (){
      tree.passGrowingSeason();
      tree.passGrowingSeason();
      expect(tree.oranges.length).not.toBe(0);
    });
    it("has no oranges if it's collection of oranges is empty", function () {
      expect(tree.oranges.length).toBe(0);
    });
  });

  describe("passing a growing season", function() {
    beforeEach(function() {
      tree.age = 10;
      tree.height = 10;
      tree.passGrowingSeason();
    })
    describe("when it's alive", function() {
      it("gets older", function () {
        expect(tree.age).toBe(11);
      });

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller", function() {
          expect(tree.height).toBe(12.5);
        });
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow", function () {
          tree.height = 25;
          tree.passGrowingSeason();
          expect(tree.height).toBe(25);
        });
      });

      describe("when it's mature", function() {
        it("produces oranges", function() {
          expect(tree.oranges[0]).toEqual(jasmine.any(Orange));
        });
      });

      describe("when it's not mature", function() {
        it("does not produce fruit", function() {
          tree.age = 0;
          tree.passGrowingSeason();
          expect(tree.oranges.length).toBe(0);
        });
      });
    });

    describe("when it's dead", function() {
      beforeEach(function() {
        tree.age = 100;
        tree.height = 25;
        tree.passGrowingSeason();
      })
      it("does not get older", function(){
        expect(tree.age).toBe(100);
      });
      it("does not grow", function() {
        expect(tree.height).toBe(25);
      });
      it("does not produce fruit", function() {
        expect(tree.oranges.length).toBe(0);
      });
    });
  });

  describe("picking an orange", function() {
    describe("when the tree has oranges", function() {
      beforeEach(function(){
        tree.age=6;
        tree.passGrowingSeason();
      })
      it("returns one of its oranges", function() {
        expect(tree.pickAnOrange()).toEqual(jasmine.any(Orange));
      });
      it("no longer has the returned orange in its collection of oranges", function() {
        collection = tree.oranges.length;
        tree.pickAnOrange();
        expect(tree.oranges.length).toBe(collection - 1);
      });
    });

    describe("when the tree has no oranges", function() {
      it("returns undefined", function() {
        tree.age = 100;
        tree.passGrowingSeason();
        expect(tree.pickAnOrange()).toBe(undefined);
      });
    });
  });
});
