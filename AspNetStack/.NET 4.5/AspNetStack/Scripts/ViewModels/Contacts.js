'use strict';

var Contacts = (function () {

    var Contacts = {};

    Contacts.NewContactViewModel = function (knockout, service, mainViewModel) {
        var $this = this;

        $this.firstName = knockout.observable();
        $this.lastName = knockout.observable();
        $this.email = knockout.observable();

        $this.add = function () {
            service.addContact($this.firstName(), $this.lastName(), $this.email(), function () {
                mainViewModel.updateContacts();
            });

            $this.firstName('');
            $this.lastName('');
            $this.email('');
        };
    };

    Contacts.MainViewModel = function (knockout, service) {
        var $this = this;

        $this.newContact = new Contacts.NewContactViewModel(knockout, service, $this);
        $this.contacts = knockout.observableArray();

        $this.updateContacts = function () {
            service.getContacts(function (contacts) {
                $this.contacts(contacts);
            });
        };
    };

    return Contacts;

}());

if (typeof module != 'undefined') {
    module.exports = Contacts;
}
