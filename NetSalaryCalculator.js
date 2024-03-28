//code starts here
//first declare a function to.calculateNetSalary
/**
 * Function to calculate tax based on gross salary.
 * @param {number} grossSalary - The gross salary.
 * @returns {number} - The tax amount.
 */
function calculateTax(grossSalary) {
    // Placeholder implementation for tax calculation
    // Replace this with your actual tax calculation logic
    return grossSalary * 0.2;
}

/**
 * Function to calculate NHIF deductions based on gross salary.
 * @param {number} grossSalary - The gross salary.
 * @returns {number} - The NHIF deductions.
 */
function calculateNHIF(grossSalary) {
    // Placeholder implementation for NHIF calculation
    // Replace this with your actual NHIF calculation logic
    return 200;
}

/**
 * Function to calculate NSSF deductions based on gross salary.
 * @param {number} grossSalary - The gross salary.
 * @returns {number} - The NSSF deductions.
 */
function calculateNSSF(grossSalary) {
    
    // Assuming NSSF deduction rate of 5% of gross salary, capped at 2000 KES
    const nssfRate = 0.05;
    const maxNSSF = 2000;
    const nssfDeductions = Math.min(grossSalary * nssfRate, maxNSSF);
    return nssfDeductions;
}


/**
 * Function to display net salary after deductions.
 * @param {number} netSalary - The net salary.
 */
function displayNetSalary(netSalary) {
    console.log("Net Salary:", netSalary);
}

// UI Interaction Logic
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

if (!isNaN(basicSalary) && !isNaN(benefits)) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);

    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
    displayNetSalary(netSalary);
} else {
    console.log("Invalid input! Please enter numeric values.");
}