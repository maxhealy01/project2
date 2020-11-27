const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jack', '852', 'jackfrost@gmail.com');

    expect(employee.name).toBe('Jack');
    expect(employee.id).toBe('852');
    expect(employee.email).toBe('jackfrost@gmail.com')
})

test("returns employee's name", () => {
  const employee = new Employee('Jack', '852', 'jackfrost@gmail.com')

  expect(employee.getName()).toContain(employee.name)
})

test("returns employee's id", () => {
  const employee = new Employee('Jack', '852', 'jackfrost@gmail.com')

  expect(employee.getId()).toContain(employee.id)
})

test("returns employee's email", () => {
  const employee = new Employee('Jack', '852', 'jackfrost@gmail.com')

  expect(employee.getEmail()).toContain(employee.email)
})

test("returns employee's role", () => {
  const employee = new Employee('Jack', '852', 'jackfrost@gmail.com')

  expect(employee.getRole()).toContain('Employee')
})