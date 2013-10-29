describe('AngularJS Step 04', function () {
    describe('PhoneCap App', function () {
        describe('Phone List View', function () {
            beforeEach(function () {
                browser().navigateTo('../../Angular/Step04');
            });
            it('should filter the phone list as user types into the search box', function () {
                expect(repeater('.phones li').count()).toBe(3);

                input('query').enter('nexus');
                expect(repeater('.phones li').count()).toBe(1);

                input('query').enter('motorola');
                expect(repeater('.phones li').count()).toBe(2);
            });
            it('should display the current filter value within an element with id "status"', function () {
                expect(element('#status').text()).toMatch(/Current filter: \s*$/);

                input('query').enter('nexus');
                expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
            });
        });
    });
});
