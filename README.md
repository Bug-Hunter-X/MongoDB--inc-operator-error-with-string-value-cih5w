# MongoDB $inc Operator Error
This repository demonstrates a common error when using the MongoDB $inc operator: providing a string value instead of a number. The incorrect usage leads to an error and the update operation fails. The solution shows how to correct the issue by providing a numerical value to the $inc operator.

## Bug
The `bug.js` file contains the incorrect code that attempts to increment a counter field with a string value. This results in an error during the update operation.

## Solution
The `bugSolution.js` file shows the corrected code where the counter is incremented with a numerical value. The update operation now executes successfully.

## How to reproduce
1. Set up MongoDB.
2. Create a collection called `myCollection`.
3. Insert a document into `myCollection` with a field called `counter` initialized to a number.
4. Run the incorrect code in `bug.js`.
5. Observe the error message.
6. Run the corrected code in `bugSolution.js`.
7. Verify that the `counter` field is successfully incremented.