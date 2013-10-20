describe('Contacts', function () {
    var MainViewModel = Contacts.MainViewModel;
    var NewContactViewModel = Contacts.NewContactViewModel;

    describe('MainViewModel', function () {
        it('test should call getContacts and update contacts', function () {
            // Setup
            var ironman = {}, hulk = {};
            var service = { getContacts: function () { } };
            var mock = sinon.mock(service);
            mock.expects('getContacts').callsArgWith(0, [ironman, hulk]).once();

            // Exercise
            var viewModel = new MainViewModel(ko, service);
            viewModel.updateContacts();

            // Verify
            mock.verify();
            expect(viewModel.contacts()).toBeDefined();
            expect(viewModel.contacts().length).toBe(2);
            expect(viewModel.contacts()[0]).toBe(ironman);
            expect(viewModel.contacts()[1]).toBe(hulk);
        });
    });

    describe('NewContactViewModel', function () {
        it('test should call addContact', function () {
            // Setup
            var service = { addContact: function () { } };
            var mock = sinon.mock(service);
            var firstName = 'Thor', lastName = 'Odinson', email = 'thor@avengers.com';
            mock.expects('addContact').withArgs(firstName, lastName, email).once();

            // Exercise
            var viewModel = new NewContactViewModel(ko, service);
            viewModel.firstName(firstName);
            viewModel.lastName(lastName);
            viewModel.email(email);
            viewModel.add();

            // Verify
            mock.verify();
        });

        it('test should clear properties', function () {
            // Setup
            var service = { addContact: function () { } };

            // Exercise
            var viewModel = new NewContactViewModel(ko, service);
            viewModel.firstName('Thor');
            viewModel.lastName('Odinson');
            viewModel.email('thor@avengers.com');
            viewModel.add();

            // Verify
            expect(viewModel.firstName()).toBeFalsy();
            expect(viewModel.lastName()).toBeFalsy();
            expect(viewModel.email()).toBeFalsy();
        });

        it('test should call MainViewModel.updateContacts', function () {
            // Setup
            var service = { addContact: function (firstName, lastName, email, callback) { callback(); } };
            var mainViewModel = { updateContacts: function () { } };
            var mock = sinon.mock(mainViewModel);
            mock.expects('updateContacts').once();

            // Exercise
            var viewModel = new NewContactViewModel(ko, service, mainViewModel);
            viewModel.firstName('Thor');
            viewModel.lastName('Odinson');
            viewModel.email('thor@avengers.com');
            viewModel.add();

            // Verify
            mock.verify();
        });
    });
});
