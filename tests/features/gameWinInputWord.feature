Feature: testing game win
    
    Scenario: game win entering correct word
        Given User logs in
        When User input the word "agilidad"
        Then User should see message "GANASTE"