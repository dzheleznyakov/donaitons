// import logo from './logo.svg';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import ProgressBar from './components/ProgressBar';
import flag from './photos/flag.jpeg';

function App() {
  return (
    <div className="App">
      <h1 style={{
        width: '60%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        textAlign: 'start', 
        width: 'fit-content',
      }}>
        <span style={{
          marginLeft: "-100px",
        }}>Help for orphan children evacuated from Kharkov{' '}</span>
        <img src={flag} width={20} height={20} />
      </h1>
      <div className="TextWrapper">
        <ul>
          <li>An orphan house in Kharkov got severely damaged when a military operation began in the city. </li>
          <li>Sadly a few children died</li>
          <li>Volunteers managed to evacuate majority of children. </li>
          <li>They have 29 children ranging from newborns to 7 year olds. </li>
          <li>They are safe now and are looked after. </li>
          <li>Only 5 volunteers are working on the site and taking shifts to maintain the place. </li>
          <li>They do not receive any support or income.</li>
          <li>They are getting some humanitarian help, and local people have no money to help them financially.</li>
        </ul>

        <p style={{fontSize: '24px', fontWeight: 'bold', color: 'darkgreen'}}>
          We are raising money to help maintain this place for the following six months.
        </p>

        <p style={{fontSize: '24px', color: 'rgb(26, 115, 232)'}}><b>
          If you would like to help, the PayPal account is: <em>zheleznyakov.dmitry@gmail.com</em>
        </b></p>
      </div>

      <ProgressBar />
      <ImageCarousel />


    </div>
  );
}

export default App;
