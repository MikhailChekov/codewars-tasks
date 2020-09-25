// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.newData = this.collection.reduce(
    (p, c) => {
      if (p[p.length - 1].length === this.itemsPerPage) {
        p.push([]);
      }

      p[p.length - 1].push(c);
      return p;
    },
    [[]]
  );
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function (collection) {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (this.newData[pageIndex]) {
    return this.newData[pageIndex].length;
  } else {
    return -1;
  }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex > this.collection.length || Math.sign(itemIndex) < 0 || !Number.isInteger(itemIndex) || !this.collection.length) {
    return -1;
  }
  return Math.round(itemIndex / this.itemsPerPage);
};

// let helper = new PaginationHelper([0,'b','c','d','e','f'], 4);
