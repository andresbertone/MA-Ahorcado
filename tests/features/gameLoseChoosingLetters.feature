Feature: testing game lose

    Scenario: game lose choosing wrong letters
        Given User logs in
        When User choose letter h
        When User choose letter s
        When User choose letter p
        When User choose letter k
        When User choose letter q
        When User choose letter t
        Then User should see message Perdiste