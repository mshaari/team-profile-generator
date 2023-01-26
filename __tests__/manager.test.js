// Link to Manager class
const Manager = require("../lib/manager");

// Below are a number of tests for each of the Manager class' purposes/uses. Instead of adding comments, please reference the string to understand each test's purpose (for example, 'Can set id', 'Can retrieve manager id', etc. ). The main difference for manager is that it also asks for the office number while the others don't

test('Can create manager class', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
})

test('Can set name on manager class', () => {
    const name = 'Michael';
    const manager = new Manager(name);
    expect(manager.name).toBe(name); 
})

test('Can set id on manager class', () => {
    const name = 'Michael';
    const id = '1';
    const manager = new Manager(name, id); 
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
