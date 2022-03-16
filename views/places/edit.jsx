const React = require('react')
const Def = require('../default.jsx')

function edit_form ({place}) {
    return (
        <Def>
        <form method="POST" action={`/places/${place.id}?_method=PUT`}>
        <div className="form-group">
    <label htmlFor="name">Place Name</label>
    <input className="form-control" id="name" name="name" />
  </div>
  <div className="form-group">
    <label htmlFor="pic">Place Picture</label>
    <input className="form-control" id="pic" name="pic" value={place.pic} />
  </div>
  <div className="form-group">
    <label htmlFor="city">City</label>
    <input className="form-control" id="city" name="city" />
  </div>
  <div className="form-group">
    <label htmlFor="state">State</label>
    <input className="form-control" id="state" name="state" />
  </div>
  <div className="form-group">
    <label htmlFor="cuisines">Cuisines</label>
    <input className="form-control" id="cuisines" name="cuisines"  />
  </div>
  <div className="form-group">
  <label for="founded">Founded Year</label>
  <input className="form-control" id="founded" name="founded" />
</div>
  <input className="btn btn-primary" type="submit" value="Update Place" />
  
</form>
        </Def>
    )
}

module.exports = edit_form