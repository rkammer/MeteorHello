Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
  	 Template.body.helpers({
       resolutions: function(){
         if(Session.get('HideFinished')){
            return Resolutions.find({Checked: {$ne: true}});
         }else{
            return Resolutions.find();  
         }          
       },
       
       'HideFinished': function (){
          return Session.get('HideFinished');
       } 
//        resolutions: [
//          {Title: "Item one"},
//          {Title: "Item two"},
//          {Title: "Item three"}
//        ]
     });
     
     Template.body.events({
       'submit .NewResolution': function(event){
//          var Title = event.target.Title.value;
          Resolutions.insert({
            Title: event.target.Title.value,
            CreatedAt: new Date()
          }); 
          
          event.target.Title.value = null;
          console.log(event);
          return false;
       },
       
       'click #TestButton': function(){
          alert('Banana is Good!');
       },
       
       'change .HideFinished': function(event){
          Session.set('HideFinished', event.target.checked);
       }      
     });
     
     Template.resolution.events({
       'click .ToggleChecked': function(){
         Resolutions.update(this._id, {$set: {Checked: !this.Checked}});
       },
        'click .delete': function(){
          if(confirm("Are you sure to delete the event" + this.Title + "?")){
            Resolutions.remove(this._id); 
          }       
        }
     });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
