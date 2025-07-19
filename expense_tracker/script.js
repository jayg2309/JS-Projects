document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total");

  // whenever we submit a form, every single input is stored in a string format
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  renderExpenses();
  // how to add values
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    // adding new object and pushing in the expenses array
    if (name != "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name, // same as name : name
        amount: amount,
      };
      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();

      //clear input after adding
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });
  function calculateTotal() {
    // using array.reduce() method

    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - $${expense.amount}
        <button data-id="${expense.id}">Delete</button>
        `;
      expenseList.appendChild(li);
    });
  }

  function updateTotal() {
    // get total amount first and then update it
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      // loop through array to remove element you want to remove
      expenses = expenses.filter((expense) => expense.id != expenseId);

      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
