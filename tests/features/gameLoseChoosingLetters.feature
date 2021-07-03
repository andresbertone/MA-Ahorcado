Feature: testing game lose

    Scenario: game lose choosing wrong letters
        Given User lose game choosing wrong letters
        When User choose letter t
        When User choose letter y
        When User choose letter r
        When User choose letter p
        When User choose letter m
        When User choose letter q
        Then User should see message Perdiste