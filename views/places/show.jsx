const React = require('react')
const Def = require('../default')
const comments= require("../places")


function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )

if (data.place.comments.length) {
  comments = data.place.comments.map(c => {
    return (
     
      <div className="border">
        <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
        <h4>{c.content}</h4>
        <h3>
          <stong>- {c.author}</stong>
        </h3>
        <h4>Rating: {c.stars}</h4>
      </div>
   
  )})}
  
  return (
      <Def>
       
        <main>
          <h1>{ data.place.name }</h1>
          <h2>Rating</h2>
          <p>Not Rated</p>
          <img
              src= {data.place.pic}
          />
          <h2>Description</h2>
          <h4>
          {data.place.showEstablished()}
        </h4>
        <h4>
          Serving {data.place.cuisines}
        </h4>
      
        </main>

        <main>
            <div className="row"></div>
            <hr />
            <h2>Comments</h2>
            {comments}
          </main>
       
        <div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
        Edit
        </a>      
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
        <button type="submit" className="btn btn-danger">
        Delete
       </button>
       </form>  
       </div>  
    
       <form method="POST" action={`/places/${data.id}?_method=PUT`}>
  <div className="form-group">
      <label htmlFor="name">Content</label>
      <input 
        className="form-control" 
        id="name" 
        name="name" 
        value=""
      required />
      <label htmlFor="name">Author</label>
      <input 
        className="form-control" 
        id="name" 
        name="name" 
        value=""
      required />
      <h5>Star Rating</h5>

      <input type="submit" value="Submit"></input>
  </div>
</form>

       
        </Def>
    )


    
     
 
 
}


module.exports = show

