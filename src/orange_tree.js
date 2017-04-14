var OrangeTree = function() {
  this.age = 0;
  this.height = this.giveValue();
  this.oranges = [];
}

OrangeTree.prototype.giveValue = function() {
    return Math.floor(Math.random() * (10 - 1));
}

OrangeTree.prototype.isMature = function() {
  if (this.age >= 6) {
    return true;
  }
  else {
    return false;
  }
};

OrangeTree.prototype.isDead = function() {
  if (this.age >= 100) {
    return true;
  }
  else {
    return false;
  }
};

OrangeTree.prototype.passGrowingSeason = function() {
  if (this.isDead() === false) {
  this.oranges = [];
  this.age += 1;
  this.height += 2.5;
  this.height = Math.min(this.height, 25);
  if (this.isMature()) {
    for (var i=0; i < 10; i++){
      this.oranges.push(new Orange());
    }
  };
  return this
}
else {
  this.oranges = [];
  return this
};
};

OrangeTree.prototype.pickAnOrange = function() {
  return this.oranges.pop();
};

// Driver code
tree = new OrangeTree()

tree.passGrowingSeason();
tree.passGrowingSeason();
tree.passGrowingSeason();
tree.passGrowingSeason();
tree.passGrowingSeason();
tree.passGrowingSeason();
tree.passGrowingSeason();
console.log(tree.oranges);
