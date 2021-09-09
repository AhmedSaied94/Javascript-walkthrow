
var n = prompt("How many numbers you want to sum?");
var nums = [];
var sum = 0;
for(i=0;i<n;i++){
    nums[i] = Number(prompt("Enter a number"))
    sum = sum + nums[i]
}
var avg = sum / nums.length;
alert("Sum is "+ sum +"\n Avg is "+ avg);
alert(nums);


var phoneBook = {
    contacts:[],
    addContact:function(){
          var contact_name = prompt("Enter a name");
          var contact_number = prompt("Enter a number");
          var contact = {
            name:contact_name,
            number:contact_number
            }
          phoneBook.contacts.push(contact);
        },
    searchContact:function(){
            var contact_name = prompt("Enter a name to search");
            for(i=0;i<phoneBook.contacts.length;i++){
                 var searched_contact = phoneBook.contacts[i];
                if(searched_contact.name == contact_name){
                     alert(searched_contact.name+" "+searched_contact.number);
                     break;
                }
                
            }
        
        },
    run:function(){
        do{
            op = prompt("Choose Operation (add, search, Exit");
            var exit = false;
             switch(op){
                 case "add":
                    phoneBook.addContact();
                 break
                 case "search":
                    phoneBook.searchContact();
    
                  break
                 case "exit":
                 case "Exit":
                     exit = true;
                 break
        }            
    }
    while(!exit)}
}   
phoneBook.run();


var circle = {
    by:3.14,
    area:function(){
        var r = Number(prompt("Enter r"));
        var area = circle.by * r * r
        alert(area);

    }
};
var triangle = {
    area:function(){
        var base = Number(prompt("enter the base"));
        var height = Number(prompt("enter the height"));
        var area = 0.5 * base * height;
        alert(area);

    }
}
var square = {
    area:function(){
        var a = Number(prompt("enter the length of the side"));
        var area = a*a;
        alert(area);
    }
}
var rectangle = {
    area:function(){
        var length = Number(prompt("enter the length"));
        var width = Number(prompt("enter the width"));
        var area = length * width;
        alert(area);
    }
}
var Parallelogram = {
    area:function(){
        var base = Number(prompt("enter the base"));
        var verticalHeight = Number(prompt("enter vertical height"));
        var area = base * verticalHeight;
        alert(area);
    }
}
var trapezium = {
    area:function(){
        prompt("enter the length of parallel sides");
        var a = Number(prompt("a"));
        var b = Number(prompt("b"));
        var height = Number(prompt("enter the height"));
        var area = 0.5 * (a+b) * height;
        alert(area);
    }
}
var Ellipse = {
    by:3.14,
    area:function(){
        var a = Number(prompt("enter minor axes"))/2;
        var b = Number(prompt("enter major axes"))/2;
        var area = Ellipse.by * a * b; 
        alert(area);
    }
}
do{
    alert("enter shape name");
    var shape = prompt("(circle, triangle, square, rectangle, Parallelogram, trapezium, ellipse) Or cancel");
    var cancel = false
    switch(shape){
        case "circle":
            circle.area();
        break;
        case "triangle":
            triangle.area();
        break;
        case "square":
            square.area();
        break;
        case "rectangle":
            rectangle.area();
        break;
        case "parallelogram":
            Parallelogram.area();
        break;
        case "trapezium":
            trapezium.area();
        break;
        case "ellipse":
            Ellipse.area();
        break;
        case "cancel":
        case "Cancel":
            cancel = true
        break                            
    }
}
while(!cancel)
