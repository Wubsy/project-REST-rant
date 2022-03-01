const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img width="870px" height="580px" src="/images/confused-cat.jpg" alt="Confused cat"/>
                </div>

                Photo by <a href="https://unsplash.com/@tranmautritam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tran Mau Tri Tam</a> on <a href="https://unsplash.com/s/photos/free-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

            </main>
        </Def>
    )
}

module.exports = error404