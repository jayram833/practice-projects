function LazyComponent() {
    for (let index = 0; index < 1000000000; index++) {

    }
    return (
        <div>
            <h1>I am Lazycomponent</h1>
        </div>
    )
}

export default LazyComponent
