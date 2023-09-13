function NavBar({data}) {
    
    function getLastName(ch1, ch2) {
        let lastName = '';
        for (let i = 0; i < data.books.length; i++) {
          if (data.books[i].lastName[0] >= ch1 && data.books[i].lastName[0] <= ch2) {
            return lastName = data.books[i].lastName;
          }
        }
        return '';
      }
      
      function alphabetLink(code) {
        console.log('alphabetLink function called with code:', code);
        console.log(data);
        console.log(data.books[1].lastName);

        let lastName = '';

        switch (code) {
          case 1:
            lastName = getLastName("A", "I");
            break;
          case 2:
            lastName = getLastName("J", "R");
            break;
          case 3:
            lastName =  getLastName("S", "Z");
            break;
          default:
            lastName =  getLastName("A", "I");
        }
        if (lastName !== "") {
          const element = document.getElementById(lastName);
          if (element) {
            element.scrollIntoView({ behavior: "smooth"} );
          }
        }
      }


  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Navbar
                </a>
      <div className="container-fluid">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-link"
                onClick={() => alphabetLink(1)}
              >
                A-I
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-link"
                onClick={() => alphabetLink(2)}
              >
                J-R
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-link"
                onClick={() => alphabetLink(3)}
              >
                S-Z
              </button>
            </li>
          </ul>
        </div>
    </nav>
  );
}
