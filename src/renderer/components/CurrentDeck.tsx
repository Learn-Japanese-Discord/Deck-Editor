function CurrentDeck() {
    return(
        <>
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column ">
                        <figure>
                            <form id="submittalsForm" name="submittalsForm" action="">
                                <div className="control is-expanded"><label className="label is-bleached has-text-centered">Active Quiz Deck</label>
                                    <div className="control">
                                        <div className="select fl"><select className="dataInput fl" id="activeDeck" name="activeDeck">
                                                <option>None</option>
                                                <option>Black_Clover_Ep_1</option>
                                            </select></div>
                                    </div>
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

export default CurrentDeck;