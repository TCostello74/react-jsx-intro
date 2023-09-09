function App() {
    return (
        <div>
            <Tweet
            name="Tyler Costello"
            username="Tcost"
            date={new Date().toDateString()}
            message="Hello my name is Tyler"
            />
            <Tweet
            name="Bea Zamfir"
            username="Bzam"
            date={new Date().toDateString()}
            message="Goodbye everyone"
            />
            <Tweet
            name="Cora Rue"
            username="Crue"
            date={new Date().toDateString()}
            message="woof"
            />
        </div>
    );
}