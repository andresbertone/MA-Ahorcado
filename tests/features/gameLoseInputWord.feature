Feature: testing game lose

Feature Description
    
    Scenario: game win entering wrong word
        Given User logs in
        When User input the wrong word three times
        Then User should see message Perdiste