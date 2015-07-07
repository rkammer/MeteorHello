Template.hello.helpers({
    Hello : function(){
        return "Bananas";
    },
    Banana : function(){
        Banana.SetName('Banana');
        return Banana.GetName();
    },
    BananaDesc : function(){
        Banana.SetDescription("I'm a Banana");
        return Banana.GetDescription();
    }
});

onloadCallback = function () {
    grecaptcha.render('example1', {
        'sitekey' : '6LdW1AgTAAAAADkxDLsZzk5HPbmJmuYgiCk09GUC',
        'theme' : 'light'
    });

    grecaptcha.render('example2', {
        'sitekey' : '6LdW1AgTAAAAADkxDLsZzk5HPbmJmuYgiCk09GUC',
        'theme' : 'light'
    });
}

// Template.People.helpers({
    // Rodrigo : function(){
        // var rodrigo = new Person('Rodrigo Kammer','rodrigo.kammer@sohoprospecting.com');
        // return rodrigo.Name;
    // }
// });

Template.hello.events({
    'click #SayHi' : function(event, template){
        alert(template.find("#Message").value);
        //ShowInConsole is defined ar /server/server.js
        Meteor.call('ShowInConsole', template.find("#Message").value);

        console.log(Meteor.call('SayYo'));

    }
});


Template.AddPeople.events({
    'click #AddPerson' : function(event, template){
        console.log(template.find('#Name').value + ' ' + template.find('#Email').value);

        Meteor.call('AddPerson', template.find('#Name').value, template.find('#Email').value);

        template.find('#Name').value  = null;
        template.find('#Email').value = null;
    }
})

Template.body.helpers({
    People : function(){
        return People.find();
    }
});

Template.body.rendered = function() {

    $.getScript("https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit", function() {
        onloadCallback();
        console.log('reCaptcha Loaded');
    });

    // $.getScript("https://www.google.com/recaptcha/api.js", function() {
        // console.log('reCaptcha Loaded');
    // });
};

Template.RecaptchaOne.helpers({
    widgetOne : function (){
        // return grecaptcha.render('example1', {
          // 'sitekey' : '6LdW1AgTAAAAADkxDLsZzk5HPbmJmuYgiCk09GUC',
          // 'theme' : 'light'
        // });
    }
});