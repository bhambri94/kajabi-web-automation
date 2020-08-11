const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

let Username="sadas@dadsad.com"
let Password= "sadasdasdsa#"
describe('My Kajabi application', () => {
    it('export All Contacts to email', () => {
        LoginPage.open();
        LoginPage.login(Username, Password);
        DashboardPage.exportContactsFromPeopleTab();
        // browser
        
        DashboardPage.hitFinalSubmitButtonToExport();
        browser.pause(10000);
    });
});
