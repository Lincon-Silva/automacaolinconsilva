Feature: Validação dos cenarios de login

    Scenario: Access login page with correct password
        Given i access the especifier login page
        When i enter a valid email specifier
        Then i taken to the specifier home page