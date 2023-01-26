const Engineer = require("../lib/engineer");

test('Can create engineer class', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
})

test('Can set name on engineer class', () => {
    const name = 'Michael';
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name); //we want the name that we put in to be the same that is output
})

test('Can set id on engineer class', () => {
    const name = 'Michael';
    const id = '1';
    const engineer = new Engineer(name, id); //we keep name in here so we build on it
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