const getChildUpdates = (items, action) =>
  items.map((item, index) => {
    if (action.index === index) {
      item._sources = item._sources.map((childItem, childIndex) =>
        action.childIndex === childIndex
          ? {
              ...childItem,
              link: action.payload.link,
              text: action.payload.text,
              isEdited: true
            }
          : childItem
      );

      item._data = item._sources.filter(childItem => childItem.selected);
    }

    return item;
  });

export default getChildUpdates;
