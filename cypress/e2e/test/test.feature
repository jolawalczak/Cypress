Feature: Cypress test

Feature This feature contains test for recruitment process

Scenario: Test1

Given A user go to the login page
When The user fill the username
And The user fill the password
And The user click on the button submit
And The user click on the button by text 'Przejdź do kursu'
Then The user is on the learning page
And The user find tab 'Zadanie domowe' and click on this
Then The user is on the homework page
# And The user find button 'Ponownie prześlij pracę domową'
# Then The user click on the button by text 'Ponownie prześlij pracę domową'