jest.mock('child_process')

const subp = require('./subprocess');
const { exec } = require('child_process')

test('Call to shellCommand', async () => {
  expect.assertions(1)
  subp.shellCommand('cd /path/to/fakefile.txt')
  expect(exec).toHaveBeenCalledTimes(1)
});

test('Command output check', () => {
  expect(subp.commandOutput({stdout: 'something', stderr: ''})).toBe('something')
  expect(() => subp.commandOutput({stdout: 'something', stderr: 'else'})).toThrow(/error output/)
});


