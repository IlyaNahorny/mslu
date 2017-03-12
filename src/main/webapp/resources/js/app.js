// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('form', {
                url: '/form',
                templateUrl: 'resources/templates/form.html',
                controller: 'formController'
            })

            .state('form.personal_information', {
                url: '/personal_information',
                templateUrl: 'resources/templates/personal_information.html'
            })

            .state('form.document', {
                url: '/document',
                templateUrl: 'resources/templates/document.html'
            })

            .state('form.education', {
                url: '/education',
                templateUrl: 'resources/templates/education.html'
            })

            .state('form.CTresalt', {
                url: '/CTresalt',
                templateUrl: 'resources/templates/CTresalt.html'
            })
            .state('form.privileges', {
                url: '/privileges',
                templateUrl: 'resources/templates/privileges.html'
            })

            .state('form.faculty_specialty', {
                url: '/faculty_specialty',
                templateUrl: 'resources/templates/faculty_specialty.html'
            })

            .state('form.information_parents', {
                url: '/information_parents',
                templateUrl: 'resources/templates/information_parents.html'
            })

            .state('form.contact', {
                url: '/contact',
                templateUrl: 'resources/templates/contact.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/personal_information');
    })

    // our controller for the form
    // =============================================================================
    .controller('formController', function ($scope) {
        $scope.PersonalInformation = {};
        $scope.Document = {};
        $scope.Education = {};
        $scope.Result = {};
        $scope.Privileges = {};
        $scope.WinnerOlympiads = {};
        $scope.Subject = {};
        $scope.Faculty = {};
        $scope.InformationParents = {};
        $scope.Contact = {};

        var person = {
            maleOptions: [
                {id: 'no', name: 'Не женат'},
                {id: 'yes', name: 'Женат'},
                {id: 'divorced', name: 'Разведен'},
                {id: 'widow', name: 'Вдовец'}
            ],
            femaleOptions: [
                {id: 'no', name: 'Не замужем'},
                {id: 'yes', name: 'Замужем'},
                {id: 'divorced', name: 'Разведена'},
                {id: 'widow', name: 'Вдова'}
            ]
        };

        $scope.updateSex = function () {
            if ($scope.PersonalInformation.sexPerson == 'male') {
                $scope.selectSex = person.maleOptions;
            } else if ($scope.PersonalInformation.sexPerson == 'female') {
                $scope.selectSex = person.femaleOptions;
            }
        };

        var faculty = {
            daytimeOptions: [
                {id: 'english', name: 'АНГЛИЙСКОГО ЯЗЫКА'},
                {id: 'german', name: 'НЕМЕЦКОГО ЯЗЫКА'},
                {id: 'french', name: 'ФРАНЦУЗСКОГО ЯЗЫКА'},
                {id: 'spanish', name: 'ИСПАНСКОГО ЯЗЫКА'},
                {id: 'translation', name: 'ПЕРЕВОДЧЕСКИЙ'},
                {id: 'worldCommunication', name: 'МЕЖКУЛЬТУРНЫХ КОММУНИКАЦИЙ'}
            ],
            extramuralOptions: [
                {id: 'englishExtramural', name: 'АНГЛИЙСКОГО ЯЗЫКА'},
                {id: 'germanExtramural', name: 'НЕМЕЦКОГО ЯЗЫКА'}
            ]
        };

        $scope.updateFaculty = function () {
            if ($scope.Faculty.formTraining == 'daytime') {
                $scope.selectFaculty = faculty.daytimeOptions;
            } else if ($scope.Faculty.formTraining == 'extramural') {
                $scope.selectFaculty = faculty.extramuralOptions;
            }
        };

        var specialty = {
            english: [
                {id: '1', name: '1. Английский язык'},
                {id: '2', name: '2. Китайский язык'}
            ],
            german: [
                {id: '1', name: '1. Немецкий язык'},
                {id: '2', name: '2. Немецкий язык (на базе английского языка)'}
            ],
            french: [
                {id: '1', name: '1. Французский язык'}
            ],
            spanish: [
                {id: '1', name: '1. Испанский язык'}
            ],
            translation: [
                {id: '1', name: '1. Английский язык и второй иностранный язык'},
                {id: '2', name: '2. Немецкий язык и второй иностранный язык'},
                {id: '3', name: '3. Китайский язык'},
                {id: '4', name: '4. Французский язык и второй иностранный язык'}
            ],
            worldCommunication: [
                {id: '1', name: '1. Английский язык и второй иностранный язык'},
                {id: '2', name: '2. Немецкий язык и второй иностранный язык'},
                {id: '3', name: '3. Испанский язык и второй иностранный язык'},
                {id: '4', name: '4. Китайский язык'}
            ],
            englishExtramural: [
                {id: '1', name: 'Английский язык'}
            ],
            germanExtramural: [
                {id: '1', name: 'Немецкий  язык'}
            ]
        };

        $scope.updateSpecialty = function () {
            if ($scope.Faculty.faculty.id == 'english') {
                $scope.selectSpecialty = specialty.english;
            } else if ($scope.Faculty.faculty.id == 'german') {
                $scope.selectSpecialty = specialty.german;
            } else if ($scope.Faculty.faculty.id == 'french') {
                $scope.selectSpecialty = specialty.french;
            } else if ($scope.Faculty.faculty.id == 'spanish') {
                $scope.selectSpecialty = specialty.spanish;
            } else if ($scope.Faculty.faculty.id == 'translation') {
                $scope.selectSpecialty = specialty.translation;
            } else if ($scope.Faculty.faculty.id == 'worldCommunication') {
                $scope.selectSpecialty = specialty.worldCommunication;
            } else if ($scope.Faculty.faculty.id == 'englishExtramural') {
                $scope.selectSpecialty = specialty.englishExtramural;
            } else if ($scope.Faculty.faculty.id == 'germanExtramural') {
                $scope.selectSpecialty = specialty.germanExtramural;
            }
        };

    });


