describe('AngularJS Step 02', function () {
    describe('PhoneCat controllers', function () {
        describe('PhoneListCtrl', function () {
            beforeEach(module('phonecatApp'));
            it('should create "phones" model with 3 phones', inject(function ($controller) {
                var scope = {},
                    ctrl = $controller('PhoneListCtrl', { $scope: scope });
                expect(scope.phones.length).toBe(3);
            }));
        });
    });
});
