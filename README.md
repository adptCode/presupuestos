# 💰 BudgetManager - Angular Application

Welcome to **BudgetManager**, an Angular application designed to efficiently manage and calculate budgets. This project follows best practices in **business logic separation**, **reactive forms**, and **dynamic filtering & sorting** for a seamless user experience.

---

## 🌟 Features
- **Dynamic URLs**: Uses route parameters to display budget details dynamically.
- **Business Logic in Services**: Implements service-based architecture for cleaner and maintainable code.
- **Reactive Forms**: Uses Angular's `FormGroup` and `FormControl` for dynamic, real-time form validation and management.
- **Filtering & Sorting**: Allows users to filter budget entries and sort results based on different criteria.
- **State Management**: Ensures reactive and efficient handling of budget data.

---

## 📋 Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/adptCode/presupuestos.git
cd presupuestos
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
ng serve -o
```
This will automatically open the application in your default browser at `http://localhost:4200/`. The application supports hot-reloading, so any changes you make to the source files will reflect in real-time.

---

## 🛠️ Key Features & Implementation

### 🌍 Dynamic URLs
The application utilizes Angular's **ActivatedRoute** to dynamically display budget details based on the URL.

Example:
```typescript
this.route.paramMap.subscribe(params => {
  const id = params.get('id');
  this.loadBudgetDetails(id);
});
```

Routes Configuration:
```typescript
const routes: Routes = [
  { path: 'budget/:id', component: BudgetDetailComponent }
];
```

### 🔹 Business Logic in Services
The application follows best practices by handling **budget calculations and data processing inside Angular services**, keeping components lean and focused on presentation.

Example of a **budget service**:
```typescript
@Injectable({ providedIn: 'root' })
export class BudgetService {
  private budgets: Budget[] = [];

  getBudgets(): Budget[] {
    return [...this.budgets];
  }

  addBudget(budget: Budget): void {
    this.budgets.push(budget);
  }
}
```

### 🔹 Reactive Forms
Instead of template-driven forms, this project leverages **Reactive Forms** for better control and dynamic validation.

Example:
```typescript
this.budgetForm = this.fb.group({
  name: ['', Validators.required],
  amount: [0, [Validators.required, Validators.min(1)]]
});
```

### 🔹 Filtering & Sorting
Users can **filter budget items** based on predefined criteria and **sort results dynamically**.

Example:
```typescript
filterBudgets(criteria: string): Budget[] {
  return this.budgets.filter(budget => budget.category.includes(criteria));
}

sortBudgets(order: 'asc' | 'desc'): Budget[] {
  return this.budgets.sort((a, b) => order === 'asc' ? a.amount - b.amount : b.amount - a.amount);
}
```

---


## 🛠️ Available Scripts

In the project directory, you can run the following scripts:

- **`ng serve`**: Compiles and serves the application, rebuilding on file changes.
- **`ng build`**: Compiles the application into an output directory.
- **`ng test`**: Executes unit tests via [Karma](https://karma-runner.github.io).
- **`ng lint`**: Runs linting tools to analyze code quality.

For a complete list of available scripts and their descriptions, refer to the `package.json` file.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, feel free to open an issue or submit a pull request. Please ensure that your contributions align with the project's coding standards and conventions.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

🚀 **Happy coding!**
