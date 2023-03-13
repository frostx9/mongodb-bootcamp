// Delete One

db.user.deleteOne({ _id: id })

// Delete Many

db.user.deletemany({ age: { $gte: 40 } })