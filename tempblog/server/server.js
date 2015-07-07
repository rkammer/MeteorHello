Meteor.methods({

    'ShowInConsole': function (Message){
        //Message will appear at the application console and not on browser console.
        console.log(Message);
    },

    'SayYo': function(){
        return "Yo!";
    },

    'AddPerson' : function (name, email){
        People.insert({Name: name,
                       Email: email});
    }

});