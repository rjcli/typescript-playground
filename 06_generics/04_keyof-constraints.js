var extractAndConvert = function (obj, key) {
  return 'Value: ' + obj[key];
};
extractAndConvert({ name: 'Max' }, 'name');
