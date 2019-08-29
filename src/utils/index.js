export const filterList = (filter, items) => {
  const clonedItems = items.map(a => a);
  let newItems = [];
  if (filter === 'Relevance' ) {
    newItems = clonedItems.sort(function(a, b) {
      return b.score - a.score ;
    });
  } else if (filter === 'Newest' ) {
    newItems = clonedItems.sort(function(a, b) {
      return +new Date(b.pub_time) - +new Date(a.pub_time);
    });
  } else if (filter === 'Oldest' ) {
    newItems = clonedItems.sort(function(a, b) {
      return  +new Date(a.pub_time) - +new Date(b.pub_time);
    });
  } else if (filter === 'Selected' ) {
    newItems = clonedItems.filter(a => a.selected);
  } else {
    newItems = clonedItems;
  }

  return newItems;
}