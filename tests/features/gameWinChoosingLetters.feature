Feature: testing game win

    Scenario: game win choosing correct letters
        Given User logs in
        When User choose letter a
        When User choose letter g
        When User choose letter i
        When User choose letter l
        When User choose letter d
        Then User should see message Ganaste