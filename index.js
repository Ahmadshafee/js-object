Var student ={
     name: 'shafee',
     age: 21,
     phno: 8709284262,
}

//accessing objects using . notation
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.phno);

//accessing objects using [] notation
console.log(student['name']);
console.log(student['age']);
console.log(student['phno']);

var student={
    name:'shafee',
    age: 21,
    phno: 8709284262,
    address:{
        city:'ranchi',
        state:'jharkhand',
        pin:'835345',
    }
}
console.log(student);
console.log(student.name);
console.log(student.address.state);
console.log(student['address']['city']);

student.gender='male';
console.log(student.gender);

var student={
    name:'shafee',
    age: 21,
    phno: 8709284262,
    address:{
        city:'ranchi',
        state:'jharkhand',
        pin:835345,
    }
}
console.log(student);
var student2=student;
console.log(student2);

student2.graduated='true';
console.log(student2);
console.log(student);

var video={
    name:'access 101',
    play:function(){
        console.log('video played');
    }
}
console.log(video.name);
console.log(video.play());


var video={
    name:'access 101',
    play:function(){
        console.log('video played');
    },
    time:[0,60,120]
}

console.log(video.time);
