const React = require('react')
const Def = require('./default')
function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div> 
                <img
                src= "/images/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg"
                alt= "cat-picture"
                />
                <div>
                Photo by <a href="https://unsplash.com/@_k_arinn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karina Vorozheeva</a> on <a href="https://unsplash.com/s/photos/cat-searching?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404