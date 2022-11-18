let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// need to connect with the workout model

let Workout = require('../models/workouts');


// this sesction is to perform CRUD operations which allows use to modify a given section of information
// In this case for my workouts, I would mostly be updating the Lifted section
// However if I had a client, I could post their workouts for them and edit them when needed
// Preform the read operation
// Get the route for the Workout list
router.get('/',(req,res,next)=>{
    Workout.find((err, Workout)=>{ // was booklist in profs videos double check 
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('workoutroutine/workoutlist',{
                title:'Workout', 
                Workout: Workout
                }) // also was booklist double check 
        }
    });
}); //this is the get route


/* Add Operatoion */
router.get('/add',(req,res,next)=> {
    res.render('workout/add', {title:'Add'})
});

/*post route for processing add page*/
router.get('/add',(req,res,next)=> {
    let newEntry = workout ({
        "Exercise":req.body.name,
        "Sets":req.body.sets,
        "Reps":req.body.Reps,
        "Intensity":req.body.Intensity,
        "Lifted":req.body.Lifted
    })
    workout.creat(newEntry,(err,book) =>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.redirect('/workout/workoutlist')
        }
    })
});

/*Edit OPeration*/
router.post('/edit/:id',(req,res,next)=> {
    let id = req.params.id;
    workout.findById(id,(err,workoutToEdit) =>{
        if(err)
        {
            console.log(err);
            res.removeHeader(err);
        }
        else
        {
            res.render('workout/edit', {Lifted:'Input New Lift', workout:workoutToEdit});
        }
    })
    

});

/* post route for displaying edit*/
router.get('/edit/:id',(req,res,next)=> {
    let id = req.params.id;
    let updateWorkout = workout({
        "_id":id,
        "Exercise":req.body.name,
        "Sets":req.body.sets,
        "Reps":req.body.Reps,
        "Intensity":req.body.Intensity,
        "Lifted":req.body.Lifted
    });
    workout.updateOne({_id:id},updateWorkout,(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/workout/workoutlist')
        }
        
    })
})

/*Delete operation*/
router.get('/delete/:id',(req,res,next)=> {
    let id= req.params.id;
    workout.deleteOne({_id:id},(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/workout/workoutlist')
        }
    })
});
/*post route for delete opertaion*/
router.get('/delete/:id',(req,res,next)=> {

});
module.exports = router