Feature: testing game win

    Scenario: game win choosing correct letters
        Given User logs in
        When User choose letter "a"
            And User choose letter "g"
            And User choose letter "i"
            And User choose letter "l"
            And User choose letter "d"
        Then User should see message "GANASTE"