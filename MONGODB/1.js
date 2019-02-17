var userName = 'sunruyue';
var time = Date.parse(new Date());
var data = {
    'username':userName,
    'registTime':time,
};

var db = connect('strawberry');
db.user.insert(data);
print ('success');