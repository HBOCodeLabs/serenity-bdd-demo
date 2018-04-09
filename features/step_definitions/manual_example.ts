const myStepDefinitionsWrapper = function() {

    this.Given(/^a tester$/, function(callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    this.Then(/^Verify the brandname is displayed\.$/, function(callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    this.Then(/^Verify what text is displayed as brandname\.$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};
module.exports = myStepDefinitionsWrapper;
