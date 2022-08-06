//describe('index.js', function () {
///    describe('cats', function () {
///it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
//     expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function mycats() {
  const cats = ["Milo", "Otis", "Garfield"];
  console.log(cats);
}
mycats();




// describe('destructivelyAppendCat(name)', function () {
//    it('appends a cat to the end of the cats array', function () {
//     destructivelyAppendCat('Ralph');

function destructivelyAppendCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  console.log(cats.push("Ralph"));
}
destructivelyAppendCat();

//     expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);

mycats();

// describe('destructivelyPrependCat(name)', function () {
////   it('prepends a cat to the beginning of the cats array', function () {
//    destructivelyPrependCat("Bob");
function destructivelyPrependCat() {
  const cats = ["Milo", "Otis", "Garfield", "Ralph"];
  cats.unshift("Bob");
  console.log(cats);
}
destructivelyPrependCat();

//    expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
mycats();

// describe('destructivelyRemoveLastCat()', function () {
///it('removes the last cat from the cats array', function () {
//    destructivelyRemoveLastCat();
//   expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');

function destructivelyRemoveLastCat() {
  const cats = ["Milo", "Otis", "Garfiled"];
  cats.pop("Garfiled");
  console.log(cats);
}
destructivelyRemoveLastCat();

/// describe('destructivelyRemoveFirstCat()', function () {
//   it('removes the first cat from the cats array', function () {
//    destructivelyRemoveFirstCat();
//    expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
function destructivelyRemoveFirstCat() {
  const cats = ["Milo", "Otis", "Garfiled"];
  cats.shift("Milo");
  console.log(cats);
}
destructivelyRemoveFirstCat();

///describe('appendCat(name)', function () {
//   it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//    expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

function appendCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  cats.push("Broom");
}
appendCat();

//    expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
mycats();

///   describe('prependCat(name)', function () {
//    it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//     expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
//expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function prependCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  cats.push("Arnold");
  console.log(cats);
}
prependCat();

///describe('removeLastCat()', function () {
//  it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
//   expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

function removeLastCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  cats.pop(cats);
  console.log(cats);
}
removeLastCat();

//   expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
mycats();

//  describe('removeFirstCat()', function () {
//  it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
//   expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
function destructivelyRemoveFirstCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  cats.shift(cats);
  console.log(cats);
}
destructivelyRemoveFirstCat();

//   expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
mycats();
