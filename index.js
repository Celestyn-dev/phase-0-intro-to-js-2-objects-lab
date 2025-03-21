// 1️⃣ Define the initial employee object
const employee = {
    name: "Levy Baraka",
    streetAddress: "123 Main St"
  };
  
  // 2️⃣ Non-Destructive Update Function
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Creates a new object with updated key-value pair
  }
  
  // 3️⃣ Destructive Update Function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modifies the original object
    return employee;
  }
  
  // 4️⃣ Non-Destructive Delete Function
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Creates a new object
    delete newEmployee[key]; // Deletes the key from the new object
    return newEmployee;
  }
  
  // 5️⃣ Destructive Delete Function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Removes the key from the original object
    return employee;
  }
  
  // ✅ Example Usage:
  console.log("Original Employee:", employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Non-Destructive Update:", updatedEmployee);
  console.log("After Non-Destructive Update, Original Employee:", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Oak St");
  console.log("Destructive Update:", employee);
  
  const employeeAfterDelete = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Non-Destructive Delete:", employeeAfterDelete);
  console.log("After Non-Destructive Delete, Original Employee:", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Destructive Delete:", employee);
  