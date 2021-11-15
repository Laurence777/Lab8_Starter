# Lab 8 - Starter

Laurence D'Ercole (Worked alone)

1) Where would you fit your automated tests in your Recipe project development pipeline?

Within a Github action that runs whenever code is pushed. Having the tests here means that anytime the project has been updated, tests will run to make sure that the changes have not negatively affected the function of the project or deliver unexpected outcomes.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, I would use a unit test for that.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, since the message feature is a large part of the application and would take many tests to fully test out. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because this is a small function of the feature that can be easily tested using some unit tests.
