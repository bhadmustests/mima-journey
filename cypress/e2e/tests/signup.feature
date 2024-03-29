Feature: Testing all SignUp Scenarios
    As a user,
    I should be able to SignUp

    Background:
        Given User is on trymima page

    Scenario: A user should be able to signup with valid details
        When User Clicks "Sign up" Button
        And User fills in a "valid full name"
        And User fills in a "valid business name"
        And User fills in a "valid business email"
        And User fills in a "valid phone number"
        And User fills in a "valid business registration number"
        And User Clicks "Next" Button
        And User fills in a "valid website name"
        And User fills in a "valid instagram handle"
        And User fills in a "valid twitter handle"
        And User selects how they heard about mima
        And User fills in a "valid password"
        And User Clicks "Sign Up" Button
        Then User sees token notification message
        And User retrieves token from email
        When User inserts token on the token page
        Then The user should have access to the home page
        And The user should see the content of the side tabs
            | sidebar      |
            | Home         |
            | Customer     |
            | Payment Link |
            | Orders       |
            | Booking      |

    Scenario Outline: A user should be able to sign up and select <info-option> during sign up
        When User Clicks "Sign up" Button
        And User fills in a "valid full name"
        And User fills in a "valid business name"
        And User fills in a "valid business email"
        And User fills in a "valid phone number"
        And User fills in a "valid business registration number"
        And User Clicks "Next" Button
        And User fills in a "valid website name"
        And User fills in a "valid instagram handle"
        And User fills in a "valid twitter handle"
        And User selects "<info-option>" as how they heard about mima
        And User fills in a "valid password"
        And User Clicks "Sign Up" Button
        Then User sees token notification message
        And User retrieves token from email
        When User inserts token on the token page
        Then The user should have access to the home page
        And The user should see the content of the side tabs
            | sidebar      |
            | Home         |
            | Customer     |
            | Payment Link |
            | Orders       |
            | Booking      |

        Examples:
            | info-option |
            | Facebook    |
            | Instagram   |
            | Twitter     |