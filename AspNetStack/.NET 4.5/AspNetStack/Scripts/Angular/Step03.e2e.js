describe('AngularJS Step 03', function () {
    describe('PhoneCap App', function () {
        describe('Phone List View', function () {
            beforeEach(function () {
                browser().navigateTo('../../Angular/Step03');
            });
            it('should filter the phone list as user types into the search box', function () {
                expect(repeater('.phones li').count()).toBe(3);

                input('query').enter('nexus');
                expect(repeater('.phones li').count()).toBe(1);

                input('query').enter('motorola');
                expect(repeater('.phones li').count()).toBe(2);
            });
        });
    });
});
