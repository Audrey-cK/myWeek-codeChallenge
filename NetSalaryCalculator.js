//code starts here
//first declare a function to.calculateNetSalary
//declare function to be calculateNetSalary.to.benefits and basicSalary
function calculateNetSalary(basicSalary, benefits) {
    //  
    const taxRate = 0.3; // 30%
    const nhifRate = 0.05; // 5%
    const nssfRate = 0.06; // 6%

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * taxRate;
    const nhifDeductions = grossSalary * nhifRate;
    const nssfDeductions = grossSalary * nssfRate;
    //calculates value of full net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    
    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}
//this functio helps one calculate their net salary
