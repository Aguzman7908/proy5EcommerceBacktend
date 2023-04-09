const Key = "cart";

if (!localStorage.getItem(Key)) {
    localStorage.setItem(Key, JSON.stringify([]));
  }

  function createItem(item) {
    const current = parseStorage();
    
    const index = current.findIndex((articulo) => {
        return articulo.sku === item.sku;
      });
  
      if (index !== -1) {
        current[index].quantity += 1;
            
      }

      else {
        current.push({
            ...item,
            quantity:1
        })
      }
   
    saveStorage(current)
  }

  function parseStorage() {
    return JSON.parse(localStorage.getItem(Key));
  }

  function saveStorage(storage) {
    localStorage.setItem(Key, JSON.stringify(storage));
    
  }

  function readItems() {
    return parseStorage(Key);
  }


export  {createItem, readItems, parseStorage};


