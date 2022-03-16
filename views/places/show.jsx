const React = require('react')
const Def = require('../default')

function show ({place}) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (place.comments.length) {
      let sumRatings = place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
     
      )
      comments = place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
           </div>
        )
      })
    }
    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={place.pic} alt={place.name} />
              <h3>
                Located in {place.city}, {place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h1>{ place.name }</h1>
              <h2>
                Rating
              </h2>
              {rating}
              <br />
              <h2>
                Description
              </h2>
              <h3>
                {place.showEstablished()}
              </h3>
              <h4>
                Serving {place.cuisines}
              </h4>
              <br />
              <a href={`/places/${place.id}/edit`} className="btn btn-warning">
                Edit
              </a>{` `}
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
          </div>
          <hr />
          <h2>Comments</h2>
          <div className="row">
            {comments}
          </div>
          <hr />
          <h2>Got Your Own Rant or Rave?</h2>
          <form action={`/places/${place.id}/comment`} method="POST">
            <div className="row">
              <div className="form-group col-sm-12">
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" className="form-control"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-4">
                <label htmlFor="author">Author</label>
                <input id="author" name="author" className="form-control" />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="stars">Star Rating</label>
                <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
              </div>
             
            </div>
            <input type="submit" className="btn btn-primary" value="Submit Comment" />
          </form>
        </main>
      </Def>
    )

}


module.exports = show