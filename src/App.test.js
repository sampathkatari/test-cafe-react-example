import { Selector } from 'testcafe';
    
fixture `Getting Started`
    .page `http://localhost:3000`;


test('Submit form with all fields filled', async t => {
    const firstName = 'Firstname';
    const lastName = 'Lastname';
    const email = 'example@example.com';
    const username = 'username';
    const password = 'password';

    const firstNameInput = Selector('#firstName');
    const firstNameInputExists = firstNameInput.exists;

    const lastNameInput = Selector('#lastName');
    const lastNameInputExists = lastNameInput.exists;

    const emailInput = Selector('#email');
    const emailInputExists = emailInput.exists;

    const userNameInput = Selector('#username');
    const userNameInputExists = userNameInput.exists;

    const passwordInput = Selector('#password');
    const passwordInputExists = passwordInput.exists;
    await t
        .expect(firstNameInputExists).ok()
        .typeText(firstNameInput, firstName)
        .expect(firstNameInput.value).eql(firstName)

        .expect(lastNameInputExists).ok()
        .typeText(lastNameInput, lastName)
        .expect(lastNameInput.value).eql(lastName)

        .expect(emailInputExists).ok()
        .typeText(emailInput, email)
        .expect(emailInput.value).eql(email)

        .expect(userNameInputExists).ok()
        .typeText(userNameInput, username)
        .expect(userNameInput.value).eql(username)

        .expect(passwordInputExists).ok()
        .typeText(passwordInput, password)
        .expect(passwordInput.value).eql(password)

        .click('#submit')
        .expect(Selector('#success').innerText).eql("Registration request submitted successfully")    
});