import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    add:function(){

      var user = this.store.createRecord('user', {
        username: this.controller.get('username')
      });

			console.log(this.controller.get('username'));
			console.log(user);

			user.save().then( () => {
				alert('Se guardo en base');
			  //let name = this.controller.get('name');
			  //this.controller.set('message', 'A new user with the name <'+name+'> was added!')
			  //this.controller.set('name', null);
			},
			function(){
			  alert('save failed');
			});

    }
  }
});
