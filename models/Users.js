const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:String,
    DonationReceived:[
                        {
                            NoOfDonors:Number,
                            Donors:[
                                        {
                                            Username:String,
                                            Date:Date.now
                                            
                                        }
                                    ]

                        }
                    ],
    DonationGiven:[
                   {
                       NoOfDonation:Number,
                       Donations:{
                                   Username:String,
                                   Date:Date.now
                                 
                       
                                 }
        
                   }
                  ]
    
})