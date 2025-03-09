const employee = {
    name: "Oliver Koech",
    streetAddress: "100 Nairobi"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key]
    return employee;
}