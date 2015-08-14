import {Component, View, bootstrap} from 'angular2/angular2';
import {DisplayComponent} from '../display/display';

@Component ({
	selector: 'my-app'
})

@View ({
	templateUrl: 'app/templates/layout.html',
	directives: [
		DisplayComponent
	]
})

class AppComponent {

}

bootstrap(AppComponent);
