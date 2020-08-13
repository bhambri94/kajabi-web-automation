const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
      /**
     * define selectors using getter methods
     */
    get sideNavPeopleTab () { return $('#sidenav-people') }
    get selectAllContacts () { return $("//div[@class='bulk-action-info']//div[@class='icheckbox icheckbox_minimal-grey']") }
    get PeoplePageTitle () { return $("/html[1]/body[1]/div[6]/div[2]/div[3]/table[1]/thead[1]/tr[1]/td[1]/div[1]/div[1]/div[1]") }
    get actionsButton () { return $('.bulk-action-dropdown') }
    get exportButton () { return $('a*=Export') }
    get modalDialog (){ return $("//form[@id='new_contact_bulk_action']//input[@name='commit']")}

    /**
     * a method to encapsule automation code to interact with the page
     */
    exportContactsFromPeopleTab () {
        this.sideNavPeopleTab.waitForDisplayed({ timeout: 2000 });
        this.sideNavPeopleTab.click();
        browser.pause(10000)
        this.selectAllContacts.waitForDisplayed({ timeout: 5000 });
        this.selectAllContacts.click();
        this.actionsButton.waitForDisplayed({ timeout: 50000 });
        this.actionsButton.click();
        this.exportButton.waitForDisplayed({ timeout: 2000 });
        this.exportButton.click();
    }

    hitFinalSubmitButtonToExport(){
        this.modalDialog.waitForDisplayed({ timeout: 10000 });
        this.modalDialog.click();
    }
}

module.exports = new DashboardPage();