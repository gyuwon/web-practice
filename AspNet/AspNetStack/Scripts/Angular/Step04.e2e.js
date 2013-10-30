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
            it('should be possible to control phone order via the drop down select box', function () {
                input('query').enter('tablet');
                expect(repeater('.phones li').column('phone.name')).toEqual([
                    'Motorola XOOM™ with Wi-Fi',
                    'MOTOROLA XOOM™'
                ]);
                select('orderProp').option('Alphabetical');
                expect(repeater('.phones li').column('phone.name')).toEqual([
                    'MOTOROLA XOOM™',
                    'Motorola XOOM™ with Wi-Fi'
                ]);
            });
        });
    });
});
