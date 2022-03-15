# Frontend Banking Application

This application resembles a bank interface to create accounts, make deposits,
withdrawals and show the information currently on memory

## Requirements

Your website should include the following functionality. Please review the rubric below for specific information on how each element will be graded. 

1. Navigation Bar

    - [X] Includes Create Account, Deposit, Withdraw, All Data, and Home pages
    - [X] Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page. 
    - [X] Styled with Bootstrap
    - [X] Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page. 
    - [X] Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.

2. Home Page

    - [X] Includes bank title, image, and a welcome message. 
    - [X] Styled as a Bootstrap card.

3. Create Account Page

    Includes a Bootstrap card with a form that has:

    - [X] Name input field
    - [X] Email address input field
    - [X] Password input field
    - [X] Create account button

4. Create Account Page Functionality

    Create account page should include the following functionality:

    - [X] Success message: Upon selecting the create account button the user should see a success message. 
    - [X] Add Another Account Button: Upon selecting the create account button, the user should see an add another account button. 
    - [X] Cleared Create Account Form: Upon selecting the create account button, t will open a cleared create account form.
    - [X] Name validation: The user receives an alert if the name field is left blank. 
    - [X] Email validation: The user receives an alert if this field is blank 
    - [X] Password validation: The user receives an alert if the password is less than 8 characters long. 
    - [X] Disable submit button if nothing is inputted

5. Deposit Page

    Includes a Bootstrap card with a form that has:

    - [X] Deposit input field 
    - [X] Deposit button 
    - [X] Balance information displays above deposit form on the card

6. Deposit Page Functionality

    Deposit page should include the following functionality:

    - [X] Updated Balance: When a user deposits, the balance updates. 
    - [X] Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received. 
    - [X] Not A Number Alert: User receives an alert if they add something that is not a number. 
    - [X] Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
    - [X] Disable deposit button if nothing is input

7. Withdraw Page

Includes a Bootstrap card with a form that has:

    - [X] Withdraw input field 
    - [X] Withdraw button 
    - [X] Balance information displays above deposit form on the card

8. Withdraw Page Functionality

    Withdraw page should include the following functionality:

    - [X] Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance. 
    - [X] Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed. 
    - [X] Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.
    - [X] Not A Number Alert: User receives an alert if they add something that is not a number. 
    - [X] Disable deposit button if nothing is input

9. All Data Page Functionality

    All Data page includes the following functionality:

    - [X] Track User Submissions: All user submissions appear on All Data page.
    - [X] All Data Displayed On Bootstrap Card: All Data is styled and displayed on a Bootstrap card instead of JSON.

## How to run

### Prerequisites

- Install NodeJS
- Install NPM

### Step-by-step

1. Download the repository to your computer
2. Open a terminal window
3. Navigate to the project's folder
4. Execute `npm start`
    This will open a browser at http://localhost:3000 with the application
