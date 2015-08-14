var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var DisplayComponent = (function () {
    function DisplayComponent() {
        this.myName = 'Neetu';
        this.names = ['Ankur', 'Yuvaan', 'Kalash', 'Priyanka', 'Ratna', 'Om'];
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display'
        }),
        angular2_1.View({
            templateUrl: 'app/templates/display.html',
            directives: [angular2_1.NgFor]
        })
    ], DisplayComponent);
    return DisplayComponent;
})();
