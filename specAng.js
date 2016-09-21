/*add chai? do I need it? why
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var assert = chai.assert;
chai.use(chaiAsPromised);
*/



////first test

/*describe('Protractor Demo App on Angular', function(){
  it('should have a title', function(){
    browser.get('https://angularjs.org');

    browser.pause();

    expect(browser.getTitle()).toEqual('One Framework. - Angular 2');


  });
});*/
//from blog tutorial

//var pageObjectName = element(by.css(".btn.btn-large"));

var homePage = function(){
    this.centerStageButtons = element(by.css(".center.stage-buttons"));
//why all not element? and why get(0)?$(".btn.btn-large") you will be able to see multiple results are returned, which is why we use .get(0)
    this.viewOnGitHubButton = this.centerStageButtons.all(by.css(".btn.btn-large")).get(0);
//i think div changed since tutorial written, download not there
    this.designDocsButton = this.centerStageButtons.element(by.css(".btn-warning"));

};
describe('angularjs.org', function(){
  //not getting why we need a new var, and is that a new object?
  var homePage = new HomePage();

  beforeEach(function(){
    browser.get('https://angularjs.org/');
  });
  it('should have two buttons', function(){
    expect(homePage.viewOnGitHubButton.isPresent()).toBe(false);

    expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(true);

    expect(homePage.designDocsButton.isPresent()).toBe(true);

    expect(homePage.designDocsButton.isPresent()).toBe(true);
  });
});


/*
//second test - changed get started to feautures
describe('Protractor Demo App on Angular.io', function(){
  it('should click and change pages', function(){
    browser.get('http://angular.io');

    element(by.buttonText('features')).click();
    //element(by.css('[md-button md-ink-ripple]')).click();

    expect(browser.getPage()).toEqual('/features.html');


    //image size pixel, classes, meetup--> register now
    //var pixelSize = element(by.style('border-radius')), inspect();

  });
});
third test with questions
describe('Protractor Demo App on Angular.io', function(){
  var pixelSize = element(by.binding('where is item name all styles')), inspect();
  var newsButton = element(by.scope('News')),click();
  var siteMenuButton = element(by.buttonText('Site Menu')).click();
  var backgroundColor = element(by.color([25,118,210])).inspect();
  var pixelSize = element(by.style('border-radius')), inspect();


  beforeEach(function(){
    browser.get('http://angular.io');
  });

  it('should return the correct image size', function(){
    expect(image.getSize()).toEqual('2px');
  });

})

//fourth test
//var registerNow =


