function sm(){




var nodemailer=require('nodemailer')

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mohan223b@gmail.com',
        pass:'mohan@8950'
    }
})

var mailoption={
    from:'mohan223b@gmail.com',
    to:'mohan223gowda@gmail.com',
    subject:'advance js topic',
    Text:'mohan how r u,r u nderstanding this'
}
transporter.sendMail(mailoption,(err,info)=>{
    if(err) {
        console.log(err)
    }else{
        console.log('mail send')
    }
})
}