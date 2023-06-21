Feature: Validação dos cenarios de login

    Scenario: Access the login page
        Given i access the login page
        When i login with valid email
        Then i receive alert message