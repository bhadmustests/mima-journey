Feature: Testing the Login Scenerio
    As a user,  
    I should be able to Sign In


    Scenario: A user should be able to login with a valid credentials
        Given User is on the trymima page
        When User Clicks Login Button
        And User fills in a valid email
        And User fills in a valid password
        Then User clicks on the Login Button