//./page-objects/duckDuckGo-search.js

module.exports = {

    /** test searching for inputted data
     */
    titile: 'Mahatmagandhi University- ePayment',

    /** enters a search term into ebay's search box and presses enter
     * @param {string} whichOption 
     * @returns {Promise} a promise to enter the search values
     */
    Terminate: function (whichOption) {

        let elements = {
            examination: $(".//div[@class='alert btn btn-lg blue back-widget-set text-center']/h3[contains(text(),'Examination')]")
        };

        let selector = elements.whichOption;

        return chai.request('')
        .get("")
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('query');
            expect(res.body.query).to.have.property('results');
            expect(res.body.query.results).to.be.instanceof(Object);
        });

            },


                /** enters a search term into ebay's search box and presses enter
                 * @param {string} whichOption 
                 * @returns {Promise} a promise to enter the search values
                 */
    freezeOpt: function (whichOption) {

                    let elements = {
                        examination: $(".//div[@class='alert btn btn-lg blue back-widget-set text-center']/h3[contains(text(),'Examination')]")
                    };

                    let selector = elements.whichOption;

                    return chai.request('https://query.yahooapis.com')
                    .get("/v1/public/yql?env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&format=json&q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%27Santa%20Monica%2C%20CA%27%29")
                    .then(function(res) {
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property('query');
                        expect(res.body.query).to.have.property('results');
                        expect(res.body.query.results).to.be.instanceof(Object);
                });

                }
};