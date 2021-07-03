Feature: testing game win

Feature Description
    
    Scenario: game win entering correct word
        Given User win game
        When User input the correct word
        Then User should see message Ganaste