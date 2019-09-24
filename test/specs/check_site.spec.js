describe('Verify that the users is able to apply for a degree certificate', () => {
    it('I should open the university page', () => {                
        const title = browser.getTitle();        
        expect(pages.universityPage.titile).to.equal(title,"the title is not as expected");        
        //assert.equal(title, 'ASOS | Online Shopping for the Latest Clothes & Fashion');  
    });

    it('When I click on Examination-Others', () => {
        //page.universityPage.performClick('examination');crtificate s
        console.log("****************certificate selection******************");
        pages.universityPage.performClick('examination');
        // pages.universityPage.performClick();

        //const examination= $('.//div[@class="alert btn btn-lg blue back-widget-set text-center"]/h3[contains(text(),"Examination")]')
       // examination.click();
    
    it('Then I expect the Examination  list should display', () => {
     
    });
  });
});

describe('Able to terminate or freeze a policy', () => {
    it('It should terminate a policy', () => {                
        
    });

    it('It should freeze a policy', () => {
        
    });
    
    it('It should activate NFB', () => {
     
    });

    it('It should activate CNFB', () => {
     
    });
});