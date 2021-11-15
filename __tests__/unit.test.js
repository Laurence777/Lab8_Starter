// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber valid 
test('valid phone number format', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

//isPhoneNumber valid 
test('valid phone number format', () => {
    expect(functions.isPhoneNumber('444-444-4444')).toBe(true);
});

//isPhoneNumber invalid 
test('invalid phone number format', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

//isPhoneNumber invalid
test('invalid phone number format', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});


// isEmail valid 
test('valid email format', () => {
    expect(functions.isEmail('bob@gmail.com')).toBe(true);
});

//isEmail: 2 incorrect 
test('valid email format', () => {
    expect(functions.isEmail('bob@youtube.com')).toBe(true);
});

//isEmail: 2 correct 
test('invalid email format', () => {
    expect(functions.isEmail('me@gmailcomm')).toBe(false);
});

//isEmail: 2 correct 
test('invalid email format', () => {
    expect(functions.isEmail('jack@google')).toBe(false);
});


// isStrongPassword valid 
test("strong password", () => {
    expect(functions.isStrongPassword('a1b2c3d4')).toBe(true);
});

// isStrongPassword valid 
test("strong password", () => {
    expect(functions.isStrongPassword('SDFGH123456_')).toBe(true);
});

// isStrongPassword invalid 
test("weak password", () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

// isStrongPassword invalid 
test("weak password", () => {
    expect(functions.isStrongPassword('ab_')).toBe(false);
});


// isDate valid
test("valid date", () => {
    expect(functions.isDate('12/25/2021')).toBe(true);
});

//isDate valid 
test("valid date", () => {
    expect(functions.isDate('01/01/2020')).toBe(true);
});

//isDate valid 
test("invalid date", () => {
    expect(functions.isDate('ab/cd/efgh')).toBe(false);
});

//isDate valid
test("invalid date", () => {
    expect(functions.isDate('3/23/40000')).toBe(false);
});


// isHexColor valid 
test("valid 3 digit hex", () => {
    expect(functions.isHexColor('a12')).toBe(true);
});

//isHexColor valid
test("valid 6 digit hex", () => {
    expect(functions.isHexColor('123456')).toBe(true);
});

//isHexColor invalid 
test("invalid 6 digit hex", () => {
    expect(functions.isHexColor('abc1234')).toBe(false);
});

//isHexColor invalid
test("invalid 3 digit hex", () => {
    expect(functions.isHexColor('GGG')).toBe(false);
});