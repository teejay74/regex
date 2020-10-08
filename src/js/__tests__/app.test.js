import Validator from '../app';

test('Проверка валидного имени (буквы)', () => {
  const name = 'Teejay';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('nickname success');
});

test('Проверка валидного имени (цифры в центре)', () => {
  const name = 'Tee74jay';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('nickname success');
});

test('Проверка валидного имени (цифры и символы)', () => {
  const name = 'Tee-74_jay';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('nickname success');
});

test('Проверка валидного имени (4 цифры подряд)', () => {
  const name = 'Tee7444jay';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid nickname');
});

test('Проверка валидного имени (цифры вначале)', () => {
  const name = '123Teejay';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid nickname');
});

test('Проверка валидного имени (цифры в конце)', () => {
  const name = 'Teejay74';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid nickname');
});

test('Проверка невалидного имени пользователя: символы в начале', () => {
  const name = '_Teejay';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid nickname');
});

test('Проверка невалидного имени пользователя: символы в конце', () => {
  const name = 'Teejay_';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid nickname');
});

test('Проверка невалидного имени пользователя: пусто', () => {
  const name = '';
  const validation = new Validator(name);
  const recieved = validation.validateUsername();
  expect(recieved).toBe('invalid nickname');
});
