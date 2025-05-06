function HeavyComponent() {
    for (let i = 0; i < 1000000000; i++) {        
    }
    return (
        <div>
            <h1>Heavy Component</h1>
        </div>
    )
}

export default HeavyComponent
