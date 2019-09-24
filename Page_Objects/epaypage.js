class epaypage{
constructor(){
    this.pageelements={
        examination: $('.//div[@class="alert btn btn-lg blue back-widget-set text-center"]/h3[contains(text(),"Examination")]'),
    }
}

launchthepage(){
    browser.url('http://epay.mgu.ac.in/');
}

} export default new epaypage();