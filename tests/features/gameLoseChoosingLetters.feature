Feature: testing game lose

    Scenario: game lose choosing wrong letters
        Given User logs in
        When User choose letter "h"
            And User choose letter "s"
            And User choose letter "p"
            And User choose letter "k"
            And User choose letter "q"
            And User choose letter "t"
        Then User should see message "PERDISTE"