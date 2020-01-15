import { validURL } from './formSub'

test('Dumby test', () => {
    const result = 2 * 3;
    expect(result),toBe(6);
});

test('should check if validURL is a real URL', () => {
    //let userURL = document.getElementById('name').value
    expect(validURL(www.npr.org)),toBe(true);
});