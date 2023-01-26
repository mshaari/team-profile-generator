// Link to Engineer class
const Engineer = require("../lib/engineer");

// Below are a number of tests for each of the Engineer class' purposes/uses. Instead of adding comments, please reference the string to understand each test's purpose (for example, 'Can set id', 'Can retrieve engineer id', etc. ). The main difference for engineer is that it also asks for the GitHub while the others don't

test('Can create engineer class', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
})

test('Can set name on engineer class', () => {
    const name = 'Michael';
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name); 
})

test('Can set id on engineer class', () => {
    const name = 'Michael';
    const id = '1';
    const engineer = new Engineer(name, id); 
    expect(engineer.id).toBe(id); 
})

test('Can set email on engineer class', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const engineer = new Engineer(name, id, email); 
    expect(engineer.email).toBe(email); 
})

test('Can set GitHub on engineer class', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const github= 'github';
    const engineer = new Engineer(name, id, email, github); 
    expect(engineer.github).toBe(github); 
})

test('Can retrieve engineer name with getName() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const github= 'github';
    const engineer = new Engineer(name, id, email, github); 
    expect(engineer.getName()).toBe(name); 
})

test('Can retrieve engineer id with getId() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const github= 'github';
    const engineer = new Engineer(name, id, email, github); 
    expect(engineer.getId()).toBe(id); 
})

test('Can retrieve engineer email with getEmail() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const github= 'github';
    const engineer = new Engineer(name, id, email, github); 
    expect(engineer.getEmail()).toBe(email); 
})

test('Can retrieve engineer GitHub with getGithub() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const github= 'github';
    const engineer = new Engineer(name, id, email, github); 
    expect(engineer.getGithub()).toBe(github); 
})

test('Can retrieve engineer role with getRole() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const github= 'github';
    const engineer = new Engineer(name, id, email, github); 
    expect(engineer.getRole()).toBe('Engineer'); 
})