/*

    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648915#overview

    Just as date formats are different across the globe, so are number formats.

    To generate numbers formatted according to specific countries we need to follow a similar approach.
    We create a formatter for Numbers and then we pass it which locale we want to target. Then we call the
    format method on it. -> See example 1

    Just like DateTimeFormat, you can also pass a second argument to the NumberFormat constructor which is the options
    object. This object takes a style argument which can have one of the three values: unit, currency or percent.

    For style which has value unit, you can specify which type of unit you want to be output. For example, you
    may want the number to represent a value of miles per hour or celsius or any other mathematical unit. You can
    specify that in the unit property as a string. -> See example 2

    When you use the style as percent you don't need to specify the unit property. -> See example 3

    However, if you want to use the number as a currency, you can use style as currency and then specify the
    currency property as something like EUR for euros. You must specify a currency as simply mentioning the locale
    does not assign a currency to the value. You could be calculating taxes in euros when your current location is
    the US. For reasons like these you need to specify the locale as well as the currency property. -> See example 4

    There is another property in the options called useGrouping which allows you to decide whether you want the number
    to be separated by a separator like comma or period.

 */

// Example 1
let number = 29453232.754  // all consoles will print correct values in browsers, not in NodeJS
const usNumber = new Intl.NumberFormat('en-US').format(number);
console.log('US'.padEnd(10, " ") + usNumber);
const germanNumber = new Intl.NumberFormat('de-DE').format(number);
console.log('Germany'.padEnd(10, " ") + germanNumber);
const syrianNumber = new Intl.NumberFormat('ar-SY').format(number);
console.log('Syria'.padEnd(10, " ") + syrianNumber);
const indianNumber = new Intl.NumberFormat('en-IN', {}).format(number);
console.log('India'.padEnd(10, " ") + indianNumber);

// Example 2
let options = {
    style: 'unit',
    unit: 'mile-per-hour'
} // These consoles will format numbers in miles per hour but according to the locales set in the constructor
const usMPHNumber = new Intl.NumberFormat('en-US', options).format(number);
console.log('US'.padEnd(10, " ") + usMPHNumber);
const germanMPHNumber = new Intl.NumberFormat('de-DE', options).format(number);
console.log('Germany'.padEnd(10, " ") + germanMPHNumber);
const syrianMPHNumber = new Intl.NumberFormat('ar-SY', options).format(number);
console.log('Syria'.padEnd(10, " ") + syrianMPHNumber);
const indianMPHNumber = new Intl.NumberFormat('en-IN', options).format(number);
console.log('India'.padEnd(10, " ") + indianMPHNumber);

// Example 3
options = {
    style: 'percent'
} // These consoles will format numbers in percentage but according to the locales set in the constructor
const usPercentNumber = new Intl.NumberFormat('en-US', options).format(number);
console.log('US'.padEnd(10, " ") + usPercentNumber);
const germanPercentNumber = new Intl.NumberFormat('de-DE', options).format(number);
console.log('Germany'.padEnd(10, " ") + germanPercentNumber);
const syrianPercentNumber = new Intl.NumberFormat('ar-SY', options).format(number);
console.log('Syria'.padEnd(10, " ") + syrianPercentNumber);
const indianPercentNumber = new Intl.NumberFormat('en-IN', options).format(number);
console.log('India'.padEnd(10, " ") + indianPercentNumber);

// Example 4
// These consoles will format numbers in currencies but according to the locales set in the constructor
const usCurrencyNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(number);
console.log('US'.padEnd(10, " ") + usCurrencyNumber);
const germanCurrencyNumber = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
}).format(number);
console.log('Germany'.padEnd(10, " ") + germanCurrencyNumber);
const syrianCurrencyNumber = new Intl.NumberFormat('ar-SY', {
    style: 'currency',
    currency: 'SYP'
}).format(number);
console.log('Syria'.padEnd(10, " ") + syrianCurrencyNumber);
const indianCurrencyNumber = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
}).format(number);
console.log('India'.padEnd(10, " ") + indianCurrencyNumber);

// Example 5
const groupSeparatorOption = {
    useGrouping: false
};
console.log(new Intl.NumberFormat('en-US', groupSeparatorOption).format(number));
