let map = new Map([
    [1, 'number'],
    [2, 'number'],
    ['3', 'string'],
    [true, 'boolean']
  ]);
  
  for (let name of map.keys()) {
    for (let get of map.values()) {
      console.log('Ключ-' + name + ' Значение-' + get);
    }
  }