# 🧮 Odin Calculator

A simple web-based calculator built as part of **The Odin Project**, focused on correct calculation flow, operator handling, and error prevention rather than visual complexity.

---

## 🚀 Features

- Basic arithmetic operations:
  - Addition (+)
  - Subtraction (−)
  - Multiplication (×)
  - Division (÷)

- Supports chained calculations without pressing `=` after every operation
- Prevents evaluation when operators are pressed consecutively
- Rounds long floating-point results to prevent display overflow
- Handles division by zero with a clear error message
- Clear and erase functionality
- Proper state reset after errors and clear actions

---

## 🧠 How It Works

This calculator manages several internal states:
- First number
- Second number
- Current operator
- Calculation state

An operation will only run when:
- Two numbers are provided
- A valid operator is selected

If users press operators multiple times in a row, the calculator:
- Does **not** evaluate the expression
- Uses only the **last operator entered**

Invalid actions reset the calculator safely to avoid crashes or incorrect results.

---

## ⚠️ Known Limitations

- Users cannot manually input decimal numbers yet  
  Floating-point results are supported, but decimal input via button or keyboard is not implemented.

- Code structure is not fully optimized  
  Logic, UI handling, and state management are still tightly coupled and could be refactored.

- No keyboard input support  
  All interactions currently require mouse clicks.

---

## 🛠️ Future Improvements

### 🔢 Decimal Input Support
- Add a `.` button for decimal input
- Prevent multiple decimal separators in a single number  
  Example:
  - Valid: `12.34`
  - Invalid: `12.3.56`
- Disable the decimal button once a decimal is already present in the display

### 🧼 Code Refactoring
- Separate calculation logic from UI logic
- Reduce redundant state variables
- Improve code readability and maintainability

### ⌨️ Keyboard Support
- Enable number input using the keyboard
- Support operators (`+`, `-`, `*`, `/`)
- Map `Enter` to `=` and `Backspace` to erase
- Ensure keyboard input behaves the same as button clicks

---

## 📚 Built With

- HTML
- CSS
- JavaScript (Vanilla)

No frameworks. No libraries. Just logic.

---

## 🎯 Project Goal

The goal of this project is to build a calculator that:
- Calculates correctly
- Handles invalid input safely
- Does not crash
- Does not guess user intent

A simple calculator that behaves predictably.