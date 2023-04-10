function NewDeck() {
    return (
        <>
        <section className="section" id="newDeckSection">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column ">
                        <figure>
                            <form id="newDeckForm" name="newDeckForm" action="">
                                <div className="control is-expanded"><label className="label is-bleached">Create New Quiz Deck</label>
                                    <div className="control"><input className="input" id="quizDeckName" type="text" placeholder="Deck Name" name="quizDeckName" /></div>
                                </div>
                                <div className="control is-expanded"><label className="label is-bleached"></label>
                                    <div className="control"><input className="input" id="deckTime" type="text" placeholder="Question Time Limit (in seconds)" name="deckTime" /></div>
                                </div>
                                <div className="field">
                                    <label className="label is-bleached"></label>
                                        <div className="control">
                                            <textarea className="textarea" id="deckDesc" placeholder="Deck Description" name="deckDesc"></textarea>
                                        </div>
                                    </div>
                                    <div className="buttons is-centered">
                                        <div className="control"><button className="button is-success is-bleached is-bg-color has-text-centered" type="submit">Submit</button></div>
                                    </div>
                            </form>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default NewDeck;