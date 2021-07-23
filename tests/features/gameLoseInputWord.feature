Feature: testing game lose
    
    Scenario: game lose entering wrong word
        Given User logs in
        When User input the word "palabras"
            And User input the word "destacar"
            And User input the word "solucion"
        Then User should see message "PERDISTE"