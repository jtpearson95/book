function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();


            // Iterate through the objects and extract the "author" entry
            json.books.forEach((book) => {
                getLastName(book);
            });

            //sort function
            json.books.sort((a, b) => {
                const nameA = a.lastName.toLowerCase();
                const nameB = b.lastName.toLowerCase();
                return nameA.localeCompare(nameB);
            });

            function getLastName(book) {
                    const nameParts = book.author.split(' ');
                    // Check if there are at least three parts (first name, middle initial, last name)
                    if (nameParts.length === 3) {
                        // Remove the middle initial (which is the second part) and join the remaining parts
                        book.lastName = nameParts[2];

                    } else {
                       book['lastName'] = nameParts[1];
                    } 
            };

            setData(json);
            setLoaded(true);
        }

        getData();

        },[])

    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="container">
            <NavBar data={data}/>
            <h1>React Components</h1>    
            {loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}
        </div>        
    </>);
}

ReactDOM.render(
    <div>
    <App/>
    </div>,
    document.getElementById('root')
);
