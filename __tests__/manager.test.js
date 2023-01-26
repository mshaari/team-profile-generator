const Manager = require("../lib/manager");

test('Can create manager class', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
})

test('Can set name on manager class', () => {
    const name = 'Michael';
    const manager = new Manager(name);
    expect(manager.name).toBe(name); //we want the name that we put in to be the same that is output
})

test('Can set id on manager class', () => {
    const name = 'Michael';
    const id = '1';
    const manager = new Manager(name, id); //we keep name in here so we build on it
    expect(manager.id).toBe(id); 
})

test('Can set email on manager class', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const manager = new Manager(name, id, email); 
    expect(manager.email).toBe(email); 
})

test('Can set office number on manager class', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const officeNumber= 'officeNumber';
    const manager = new Manager(name, id, email, officeNumber); 
    expect(manager.officeNumber).toBe(officeNumber); 
})

test('Can retrieve manager name with getName() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const officeNumber= 'officeNumber';
    const manager = new Manager(name, id, email, officeNumber); 
    expect(manager.getName()).toBe(name); 
})

test('Can retrieve manager id with getId() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const officeNumber= 'officeNumber';
    const manager = new Manager(name, id, email, officeNumber); 
    expect(manager.getId()).toBe(id); 
})

test('Can retrieve manager email with getEmail() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const officeNumber= 'officeNumber';
    const manager = new Manager(name, id, email, officeNumber); 
    expect(manager.getEmail()).toBe(email); 
})

test('Can retrieve manager office number with getOfficeNumber() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const officeNumber= 'officeNumber';
    const manager = new Manager(name, id, email, officeNumber); 
    expect(manager.getOfficeNumber()).toBe(officeNumber); 
})

test('Can retrieve manager role with getRole() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const officeNumber= 'officeNumber';
    const manager = new Manager(name, id, email, officeNumber); 
    expect(manager.getRole()).toBe('Manager'); 
})
