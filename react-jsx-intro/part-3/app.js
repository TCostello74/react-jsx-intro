function App() {
    return (
      <div>
        <Person
          name="Tyler"
          age={31}
          hobbies={["Video Games", "Football", "Watching TV"]}
        />

        <Person 
          name="Bea" 
          age={30} 
          hobbies={["Audiology", "Watching TV"]} 
        />

        <Person
          name="Cora"
          age={4}
          hobbies={["Playing Ball", "Going on walks"]}
        />

        <Person
          name="Jim"
          age={57}
          hobbies={["snorkeling", "tennis", "partying"]}
        />

      </div>
    );
  }