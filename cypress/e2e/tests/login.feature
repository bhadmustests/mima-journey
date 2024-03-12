Feature: Testing the Login Scenerio
    As a user,  
    I should be able to Sign In


    Scenario: A user should be able to login with a valid credentials
        When User clicks on the "Log in" Button
        And User fills in a "valid login email"
        And User fills in a "valid login password"
        And User clicks on the "Login" Button
        Then The user should see the content of the side tabs
            | sidebar      |
            | Home         |
            | Customer     |
            | Payment Link |
            | Orders       |
            | Booking      |