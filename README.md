# API Automation Testing

This project demonstrates a basic API automation script that verifies the status code of a GET request.

## Prerequisites
- Node.js (version 14 or higher) should be installed on your system.

## Setup

1. Clone or download this repository.
    
        git clone  https://github.com/priya-nb695/Api-Automation-Jest-Test.git

2. Navigate to the project folder.
      
        cd Api-Automation-Jest-Test

3. Install dependencies by running:
 
        npm install

4. To run the test, execute the following command:

        npm test


## Dependencies
jest: Testing framework.
axios: For making the GET request

## Expected Output
If the test passes, the status code should be 200, and the following message will appear:

Test Passed: Status code is 200.
If the test fails, 
a message with the actual status code will be shown.

## GitHub Actions for Test Automation

This project is set up with **GitHub Actions** to run automated tests whenever changes are pushed to the `main` branch or a pull request is made. The test results are published and can be accessed from the **Actions** tab in this repository.

### How It Works:
1. **Automatic Trigger**: GitHub Actions runs on every push to the `main` branch or when a pull request is opened.
2. **Steps in the Workflow**:
    - Checkout the code
    - Set up Node.js
    - Install dependencies
    - Run tests

### View Test Results:
- After each workflow run, the results will be available in the **Actions tab** of the repository.
- You can view the detailed logs and check the status of each step in the workflow.

[Click here to view the Actions tab of the repository](https://github.com/priya-nb695/Api-Automation-Jest-Test/actions/workflows/test.yml)
