Feature: Send all available emails

    Scenario Outline: Send an email from the home page
        Given I fill contact form with data, name and last name: <name> company: <company>, phone number: <phone>, email: <email>, contact: <contact>, message: <message>
        Then I should see the message "Dziękujemy za zgłoszenie"

        Examples:

        | name          | company      | phone           | email            | contact | message                                                                    |
        | robot1 robot1 | robotCompany | 123456789       | robot1@robot.com | online  | home page -> middle contact form -> contact type online -> robot1 message  |
        | robot1 robot2 | robotCompany | 123456789       | robot2@robot.com | meeting | home page -> middle contact form -> contact type meeting -> robot2 message |

    Scenario: Send an email from footer contact form
        Given I fill footer contact form with data, name and last name: "robot1 robot1", phone number: "123456789", email: "robot1@robot.com", message: "home page -> footer contact form -> robot1 message"
        Then I should see the message "Dziękujemy za skontaktowanie się z nami." after submit

    Scenario: Send an email from the contact page
        Given I click menu option "Kontakt"
        When I fill contact form with data, name: "robot1 robot1", email: "robot1@robot.com", phone number: "123456789", message: "contact page -> middle contact form -> robot1 message"
        Then I should see the message "Dziękujemy za skontaktowanie się z nami."

    Scenario Outline: Send an email from the open trainings page
        Given I click menu option "SZKOLENIA OTWARTE"
        Given I fill open trainings contact form with data, name and last name: <name> company: <company>, phone number: <phone>, email: <email>, group size: <group size>, message: <message>
        Then I should see the message "Dziękujemy za zgłoszenie"

        Examples:

        | name          | company      | phone           | email            | group size | message                                                                           |
        | robot1 robot1 | robotCompany | 123456789       | robot1@robot.com | do 5       | open training page -> middle contact form -> group size 5 -> robot1 message       |
        | robot1 robot2 | robotCompany | 123456789       | robot2@robot.com | 6-18       | open training page -> middle contact form -> group size 6-18 -> robot2 message    |
        | robot1 robot3 | robotCompany | 123456789       | robot3@robot.com | 19-50      | open training page -> middle contact form -> group size 19-50 -> robot2 message   |
        | robot1 robot4 | robotCompany | 123456789       | robot4@robot.com | 50+        | open training page -> middle contact form -> group size 50+ -> robot2 message     |

    Scenario: Send an email from the HR Recruitment page
        Given I click menu option "HR Recruitment"
        Given I fill hr contact form with data, name: "robot1 robot1", company: "robotCompany", email: "robot1@robot.com", phone number: "123456789", message: "Hr recruitment page page -> middle contact form -> robot1 message"
        Then I should see the message "Dziekujemy za Twoją wiadomość!" on hr page

    Scenario: Send an email from the HR Recruitment contact page
        Given I click menu option "HR Recruitment"
        Given I click menu option "Kontakt" on hr recruitment page
        When I fill hr contact page form with data, name: "robot1 robot1", company: "robotCompany", email: "robot1@robot.com", phone number: "123456789", message: "Hr recruitment contact page -> middle contact form -> robot1 message"
        Then I should see the message "Dziekujemy za Twoją wiadomość!" on hr contact page
