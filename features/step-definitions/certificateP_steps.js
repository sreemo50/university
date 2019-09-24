// const {Given, Then, When} = require('cucumber');

//     Given(/^I am on epay.mgu.ac.in"$/, function () {
//         console.log("******************************step***********************");
//         return browser.url("http://epay.mgu.ac.in/");//helpers.loadPage(pages.universityPage.url, 10)
//     });

//     Then(/^I click on CERTIFICATE menu$/, function() {
//         return 
//     });
 
//     Then(/^I should see Purpose List$/, function() {       

//         return helpers.loadPage(page.duckDuckGoSearch.url, 10)    
//         });

module.exports = function (){

    this.Given(/^I am on certificate page"$/, function () {
        console.log("******************************I am on certificate page***********************");
        //return browser.url("http://epay.mgu.ac.in/");//helpers.loadPage(pages.universityPage.url, 10)
    });

    this.When(/^I click on additionalfee menu$/, function() {
        //return 
        console.log("******************************I click on additionalfee menu***********************");
    });
 
    this.Then(/^I should see feeoption title$/, function() {       
        //return helpers.loadPage(page.duckDuckGoSearch.url, 10)    
        console.log("******************************I should see feeoption title***********************");
        });
};



// module.exports = function (){

//     this.Given(/^I am on epay.mgu.ac.in"$/, function () {
 
//         chaiWebdriver.setValue('usn', shared.testData.username);
//         chaiWebdriver.setValue('pass', shared.testData.password);
//     });

//     this.Then(/^I click on CERTIFICATE menu$/, function() {
//         return chaiWebdriver.waitUntil(chaiWebdriver.element('div.g'), 10).then(function(){
//             return chaiWebdriver.element('div.g')
//         })
//             .then(function(elements){
//                 expect(elements.length).to.not.equal(0);
//             }).then(function(){
                
//                 /** Take an image of the page under test */
//                 return helpers.cssImages('search')
//             })
//     });
 
//     this.Then(/^I should see Purpose List$/, function() {
//             return chaiWebdriver.waitUntil(driver.element('div.g'), 10).then(function(){
//                 return chaiWebdriver.element('div.g')
//             })
//                 .then(function(elements){
//                     expect(elements.length).to.not.equal(0);
//                 }).then(function(){
                    
//                     /** Take an image of the page under test */
//                     return helpers.cssImages('search')
//                 })
//         });
// };