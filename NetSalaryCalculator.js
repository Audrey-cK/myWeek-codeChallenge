//code starts here
/**
 * Function to calculate tax based on gross salary.
 * @param {number} grossSalary - The gross salary.
 * @returns {number} - The tax amount.
 */
function calculateTax(grossSalary) {
    // Placeholder implementation for tax calculation
    // Replace this with your actual tax calculation logic
    return grossSalary * 0.2; // Assuming a flat tax rate of 20%
}

/**
 * Function to calculate NHIF deductions based on gross salary.
 * @param {number} grossSalary - The gross salary.
 * @returns {number} - The NHIF deductions.
 */
function calculateNHIF(grossSalary) {
    // Placeholder implementation for NHIF calculation
    // Replace this with your actual NHIF calculation logic
    const NHIF_BASE = 200;
    const NHIF_PER_EXTRA = 50; // Assuming additional NHIF for every increment in gross salary
    return NHIF_BASE + ((grossSalary - 1000) / 100) * NHIF_PER_EXTRA;
}

/**
 * Function to calculate NSSF deductions based on gross salary.
 * @param {number} grossSalary - The gross salary.
 * @returns {number} - The NSSF deductions.
 */
function calculateNSSF(grossSalary) {
    // Assuming NSSF deduction rate of 5% of gross salary, capped at 2000 KES
    const NSSF_RATE = 0.05;
    const MAX_NSSF = 2000;
    const nssfDeductions = Math.min(grossSalary * NSSF_RATE, MAX_NSSF);
    return nssfDeductions;
}

/**
 * Function to display net salary after deductions.
 * @param {number} netSalary - The net salary.
 */
function displayNetSalary(netSalary) {
    console.log("Net Salary:", netSalary);
}

/**
 * Function to handle user input for basic salary and benefits.
 * @returns {Object} - Object containing basic salary and benefits.
 */
function getUserInput() {
    let basicSalary, benefits;
    while (true) {
        basicSalary = parseFloat(prompt("Enter basic salary: "));
        benefits = parseFloat(prompt("Enter benefits: "));

        if (!isNaN(basicSalary) && !isNaN(benefits) && basicSalary >= 0 && benefits >= 0) {
            break;
        } else {
            console.log("Invalid input! Please enter non-negative numeric values.");
        }
    }
    return { basicSalary, benefits };
}

// Main function to calculate net salary
function calculateNetSalary() {
    const { basicSalary, benefits } = getUserInput();

    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);

    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
    displayNetSalary(netSalary);
}

// Invoke the main function
calculateNetSalary();