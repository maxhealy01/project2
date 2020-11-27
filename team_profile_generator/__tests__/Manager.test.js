const { test } = require('@jest/globals');
const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Jack', '852', 'jackfrost@gmail.com');

    expect(manager.name).toBe('Jack');
    expect(manager.id).toBe('852');
    expect(manager.email).toBe('jackfrost@gmail.com')
})

test("returns manager's name", () => {
  const manager = new Manager('Jack', '852', 'jackfrost@gmail.com')

  expect(manager.getName()).toContain(manager.name)
})

test("returns manager's id", () => {
  const manager = new Manager('Jack', '852', 'jackfrost@gmail.com')

  expect(manager.getId()).toContain(manager.id)
})

test("returns manager's email", () => {
  const manager = new Manager('Jack', '852', 'jackfrost@gmail.com')

  expect(manager.getEmail()).toContain(manager.email)
})

test("returns manager's role", () => {
  const manager = new Manager('Jack', '852', 'jackfrost@gmail.com')

  expect(manager.getRole()).toContain('Manager')
})

test("returns manager's office #", () => {
  const manager = new Manager('Jack', '852', 'jackfrost@gmail.com', '22')

  expect(manager.getOfficeNumber()).toContain(manager.officeNumber)
})