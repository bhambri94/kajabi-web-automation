const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

let Username="joe@needasystem.com"
let Password= "MWH2015#"
describe('My Kajabi application', () => {
    it('export All Contacts to email', () => {
        browser.setWindowSize(2048, 1024)
        LoginPage.open();
        LoginPage.login(Username, Password);
        DashboardPage.exportContactsFromPeopleTab();        
        DashboardPage.hitFinalSubmitButtonToExport();
        browser.pause(20000);
    });
});