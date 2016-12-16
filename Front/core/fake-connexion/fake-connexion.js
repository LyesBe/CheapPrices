/**
 * Created by Massil on 16/12/2016.
 */
angular.module("fakeConnexion" , []).service("connexion" , function($q)
{
    this.connect = function(email , password)
    {
        var deffered = $q.defer();
        deffered.resolve(isUser(email , password));
        return deffered.promise;
    }
});

function isUser(mail , password)
{
    var users = listUsers();
    angular.forEach(users , function(value , key){
        if(value.mail == mail && value.password == password)
        {
            return true;
        }
    });
    return false;
}

function listUsers()
{
    return [
        {
            'mail' : 'admin@admin.fr',
            'password' : 'admin'
        },
        {
            'mail' : 'root@root.fr',
            'password' : 'root'
        },
        {
            'mail' : 'massilkadi@hotmail.fr',
            'password' : 'duce'
        }
    ]
}