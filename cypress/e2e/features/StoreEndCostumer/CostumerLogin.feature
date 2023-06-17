Feature: Validação dos cenarios de login Cliente final

    Scenario: Access attempt as end customer
        Given i access the login page cu
        When i login with valid end customer email cu
        Then the alert message is displayed cu