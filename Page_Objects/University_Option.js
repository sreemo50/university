// // ./page-objects/duckDuckGo-search.js
 
// module.exports = {
 
//     /** test searching for inputted data
//      */
//     titile: 'Mahatmagandhi University- ePayment',
 
//     /** enters a search term into ebay's search box and presses enter
//      * @param {string} searchWord 
//      * @returns {Promise} a promise to enter the search values
//      */
//     performClick: function (whichOption) {
 
//         let elements = {
//             examination: ('#search_form_input_homepage'),
//             searchResultLink: ('div.g > h3 > a')
//         };
 
//         let selector = elements.whichOption;
 
//         return driver.setValue(selector, searchWord).then(function(){
            
//             return driver.click('#search_button_homepage')
//         });
//     }
// };

//./page-objects/duckDuckGo-search.js
 
module.exports = {
 
    /** test searching for inputted data
     */
    titile: 'Mahatmagandhi University- ePayment',
 
    /** enters a search term into ebay's search box and presses enter
     * @param {string} whichOption 
     * @returns {Promise} a promise to enter the search values
     */
    performClick: function (whichOption) {
        console.log("the trasfer is found",whichOption);
 
        let elements = {
            examination: $('.//div[@class="alert btn btn-lg blue back-widget-set text-center"]/h3[contains(text(),"Examination")]')
        };
        console.log("the examination is found",elements.examination);
       // let selector = elements.examination; 
        //return browser.element.click(selector);
        return elements.examination.click();
        
    }
};