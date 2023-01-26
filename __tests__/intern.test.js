const Intern = require("../lib/intern");

test('Can create intern class', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
})

test('Can set name on intern class', () => {
    const name = 'Michael';
    const intern = new Intern(name);
    expect(intern.name).toBe(name); //we want the name that we put in to be the same that is output
})

test('Can set id on intern class', () => {
    const name = 'Michael';
    const id = '1';
    const intern = new Intern(name, id); //we keep name in here so we build on it
    expect(intern.id).toBe(id); 
})

test('Can set email on intern class', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const intern = new Intern(name, id, email); 
    expect(intern.email).toBe(email); 
})

test('Can set school on intern class', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const school= 'school';
    const intern = new Intern(name, id, email, school); 
    expect(intern.school).toBe(school); 
})

test('Can retrieve intern name with getName() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const school= 'school';
    const intern = new Intern(name, id, email, school); 
    expect(intern.getName()).toBe(name); 
})

test('Can retrieve intern id with getId() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const school= 'school';
    const intern = new Intern(name, id, email, school); 
    expect(intern.getId()).toBe(id); 
})

test('Can retrieve intern email with getEmail() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const school= 'school';
    const intern = new Intern(name, id, email, school); 
    expect(intern.getEmail()).toBe(email); 
})

test('Can retrieve intern school with getSchool() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const school= 'school';
    const intern = new Intern(name, id, email, school); 
    expect(intern.getSchool()).toBe(school); 
})

test('Can retrieve intern role with getRole() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const school= 'school';
    const intern = new Intern(name, id, email, school); 
    expect(intern.getRole()).toBe('Intern'); 
})
