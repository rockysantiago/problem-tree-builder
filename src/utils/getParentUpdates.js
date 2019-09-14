const getParentUpdates = (items, action) =>
  items.map((item, index) =>
    action.index === index
      ? { ...item, link: action.payload.link, text: action.payload.text }
      : item
  );

export default getParentUpdates;
