const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer')

test('creates a engineer object', () => {
    const engineer = new Engineer('Jack', '852', 'jackfrost@gmail.com');

    expect(engineer.name).toBe('Jack');
    expect(engineer.id).toBe('852');
    expect(engineer.email).toBe('jackfrost@gmail.com')
})

test("returns engineer's name", () => {
  const engineer = new Engineer('Jack', '852', 'jackfrost@gmail.com')

  expect(engineer.getName()).toContain(engineer.name)
})

test("returns engineer's id", () => {
  const engineer = new Engineer('Jack', '852', 'jackfrost@gmail.com')

  expect(engineer.getId()).toContain(engineer.id)
})

test("returns engineer's email", () => {
  const engineer = new Engineer('Jack', '852', 'jackfrost@gmail.com')

  expect(engineer.getEmail()).toContain(engineer.email)
})

test("returns engineer's role", () => {
  const engineer = new Engineer('Jack', '852', 'jackfrost@gmail.com')

  expect(engineer.getRole()).toContain('Engineer')
})

test("returns engineer's github", () => {
    const engineer = new Engineer('Jack', '852', 'jackfrost@gmail.com', 'dancer')

    expect(engineer.getGithub()).toContain(engineer.github)
})