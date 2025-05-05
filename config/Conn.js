require ("mongoose")
.connect("mongodb+srv://devesh140301gautam:s2364NnUzzAhH5hB@cluster0.oa2zbuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("CONNECTED");
})
.catch((err)=>{
    console.log("********NOTCONNECTED",err);
})








// devesh140301gautam
// s2364NnUzzAhH5hB

// mongodb+srv://devesh140301gautam:<db_password>@cluster0.oa2zbuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0