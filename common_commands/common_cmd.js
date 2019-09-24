module.exports = (function() {
    browser.addCommand("getUrlAndTitle", function (customVar) {
        // `this` refers to the `browser` scope
        return {
            url: this.getUrl(),
            title: this.getTitle(),
            customVar: customVar
        };
    });

    browser.addCommand("waitAndClick", function () {
        // `this` is return value of $(selector)
        this.waitForDisplayed();
        this.click();
    }, true);

    browser.addCommand("isDisplayedWithin", function (timeout) {
        try {
            this.waitForDisplayed(timeout)
            return true
        } catch (err) {
            return false
        }
    }, true);

 })();