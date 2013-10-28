var should = require('should');
var sinon = require('sinon');
var knockout = require('../knockout-2.3.0');
var MainViewModel = require('./Contacts').MainViewModel;
var NewContactViewModel = require('./Contacts').NewContactViewModel;

describe('MainViewModel', function () {
    it('test should call getContacts and update contacts', function () {
        // Setup
        var ironman = {}, hulk = {};
        var service = { getContacts: function () { } };
        var mock = sinon.mock(service);
        mock.expects('getContacts').callsArgWith(0, [ironman, hulk]).once();

        // Exercise
        var viewModel = new MainViewModel(knockout, service);
        viewModel.updateContacts();

        // Verify
        mock.verify();
        viewModel.contacts().should.be.ok;
        viewModel.contacts().length.should.equal(2);
        viewModel.contacts()[0].should.equal(ironman);
        viewModel.contacts()[1].should.equal(hulk);
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
        var viewModel = new NewContactViewModel(knockout, service);
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
        var viewModel = new NewContactViewModel(knockout, service);
        viewModel.firstName('Thor');
        viewModel.lastName('Odinson');
        viewModel.email('thor@avengers.com');
        viewModel.add();

        // Verify
        viewModel.firstName().should.not.be.ok;
        viewModel.lastName().should.not.be.ok;
        viewModel.email().should.not.be.ok;
    });

    it('test should call MainViewModel.updateContacts', function () {
        // Setup
        var service = { addContact: function (firstName, lastName, email, callback) { callback(); } };
        var mainViewModel = { updateContacts: function () { } };
        var mock = sinon.mock(mainViewModel);
        mock.expects('updateContacts').once();

        // Exercise
        var viewModel = new NewContactViewModel(knockout, service, mainViewModel);
        viewModel.firstName('Thor');
        viewModel.lastName('Odinson');
        viewModel.email('thor@avengers.com');
        viewModel.add();

        // Verify
        mock.verify();
    });
});
