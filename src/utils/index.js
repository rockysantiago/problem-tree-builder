export const filterList = (filter, items) => {
  const clonedItems = items.map(a => a);
  let newItems = [];
  if (filter === 'Relevance') {
    newItems = clonedItems.sort(function(a, b) {
      return b.score - a.score;
    });
  } else if (filter === 'Sentiment') {
    newItems = clonedItems.sort(function(a, b) {
      return b.sentiment_score - a.sentiment_score;
    });
  } else if (filter === 'Newest') {
    newItems = clonedItems.sort(function(a, b) {
      return +new Date(b.pub_time) - +new Date(a.pub_time);
    });
  } else if (filter === 'Oldest') {
    newItems = clonedItems.sort(function(a, b) {
      return +new Date(a.pub_time) - +new Date(b.pub_time);
    });
  } else if (filter === 'Selected') {
    newItems = clonedItems.filter(a => a.selected);
  } else if (filter === 'Xinhua') {
    // TODO: Filter for source
    newItems = clonedItems;
  } else if (filter === 'Worldbank') {
    // Ganyan po talaga ung constant nila
    newItems = clonedItems.filter(a => a.source === 'wold_bank_news');
  } else if (filter === 'RRP') {
    newItems = clonedItems.filter(a => a.source === 'rrp');
  } else if (filter === 'SSA') {
    newItems = clonedItems.filter(a => a.source === 'ssa');
  } else if (filter === 'PCR') {
    newItems = clonedItems.filter(a => a.source === 'pcr');
  } else if (filter === 'CP') {
    newItems = clonedItems.filter(a => a.source === 'cp');
  } else if (filter === 'CPS') {
    newItems = clonedItems.filter(a => a.source === 'cps');
  } else if (filter === 'COBP') {
    newItems = clonedItems.filter(a => a.source === 'cobp');
  } else if (filter === 'China, PR') {
    // TODO: Filter for country, china?? constant
    newItems = clonedItems;
  } else if (filter === 'Mongolia') {
    // TODO: Filter for country, mongolia?? constant
    newItems = clonedItems;
  } else {
    newItems = clonedItems;
  }

  return newItems;
};
