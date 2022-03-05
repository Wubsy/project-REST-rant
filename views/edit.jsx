const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input id="name"
                               name="name"
                               value={data.place.name}
                               required />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input id="pic"
                                   name="pic"

                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city"
                               name="city"

                        />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state"
                               name="state"

                        />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines"
                               name="cuisines"

                               required />
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form