Reproduction for issue 78: https://github.com/splendido/accounts-templates-core/issues/78
Reproduction for issue 79: https://github.com/splendido/accounts-templates-core/issues/79

For issue #78: Poor validation when no displayName provided

1. clone the repro
2. click the button on the home page
3. click Register button
4. enter data in one or two fields
5. click Register button
6. observe the lack of field names when the error is displayed


For issue #79: Form-specific placeholder text not working

1. clone the repro
2. click the button on the home page
3. observe the uppercase 'P' in the password field placeholder when
   the at_config.js specified a lowercase 'p'

For issue #80: No error when login fails due to bad name or email

1. clone the repro
2. click the button on the home page
3. attempt to login with any name or email
4. observe that app returns to home page with no errro
alternatively
3. click the Register button
4. create an account
5. return to home page
6. click the button
7. enter proper credentials for created account and observe successful login
8. return to home page
9. click on button
10. enter erroneous credentials again
11. observe lack of error and return to home page

