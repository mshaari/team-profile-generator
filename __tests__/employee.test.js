// Link to employee class
const Employee = require("../lib/employee");

// Below are a number of tests for each of the Employee class' purposes/uses. Instead of adding comments, please reference the string to understand each test's purpose (for example, 'Can set id', 'Can retrieve employee id', etc. ). 

test('Can create employee class', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
})

test('Can set name on employee class', () => {
    const name = 'Michael';
    const employee = new Employee(name);
    expect(employee.name).toBe(name); 
})

test('Can set id on employee class', () => {
    const name = 'Michael';
    const id = '1';
    const employee = new Employee(name, id); 
    expect(employee.id).toBe(id); 
})

test('Can set email on employee class', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const employee = new Employee(name, id, email); 
    expect(employee.email).toBe(email); 
})

test('Can retrieve employee name with getName() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const employee = new Employee(name, id, email); 
    expect(employee.getName()).toBe(name); 
})

test('Can retrieve employee id with getId() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const employee = new Employee(name, id, email); 
    expect(employee.getId()).toBe(id); 
})

test('Can retrieve employee email with getEmail() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const employee = new Employee(name, id, email); 
    expect(employee.getEmail()).toBe(email); 
})

test('Can retrieve employee role with getRole() method', () => {
    const name = 'Michael';
    const id = '1';
    const email= 'email';
    const employee = new Employee(name, id, email); 
    expect(employee.getRole()).toBe('Employee'); 
})