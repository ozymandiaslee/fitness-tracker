const db = require('../models')

module.exports = app => {
    app.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(data => {
      res.json(data);
    });
  });
  
  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
  })
  
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: req.body
        }
      }
    ).then(data => {
      res.json(data)
    });
  });
  
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then(data => {
      res.json(data)
    });
  });
}