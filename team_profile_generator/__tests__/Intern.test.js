const Intern = require('../lib/Intern')

test('creates a intern object', () => {
    const intern = new Intern('Jack', '852', 'jackfrost@gmail.com');

    expect(intern.name).toBe('Jack');
    expect(intern.id).toBe('852');
    expect(intern.email).toBe('jackfrost@gmail.com')
})

test("returns intern's name", () => {
  const intern = new Intern('Jack', '852', 'jackfrost@gmail.com')

  expect(intern.getName()).toContain(intern.name)
})

test("returns intern's id", () => {
  const intern = new Intern('Jack', '852', 'jackfrost@gmail.com')

  expect(intern.getId()).toContain(intern.id)
})

test("returns intern's email", () => {
  const intern = new Intern('Jack', '852', 'jackfrost@gmail.com')

  expect(intern.getEmail()).toContain(intern.email)
})

test("returns intern's role", () => {
  const intern = new Intern('Jack', '852', 'jackfrost@gmail.com')

  expect(intern.getRole()).toContain('Intern')
})

test("returns intern's school", () => {
    const intern = new Intern('Jack', '852', 'jackfrost@gmail.com', 'School')

    expect(intern.getSchool()).toContain(intern.school)
})