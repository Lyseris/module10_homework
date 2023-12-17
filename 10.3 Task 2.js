let x = true;

switch (typeof x) {
  case 'string':
    console.log ('X - Строка');
    break;
  case 'number':
    console.log ('X - Число');
    break;  
  case 'boolean':
    console.log ('X - Логичиский Тип');
    break;  
  default:
    console.log('Тип x не определён');
}