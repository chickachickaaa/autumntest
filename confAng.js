exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specAng.js'],
  /*multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
  */

//what does the below do? from blog tutorial
  onPrepare: function () {
         browser.driver.manage().window().setSize(1680, 1050);
      },
};