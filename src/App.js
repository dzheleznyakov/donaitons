// import logo from './logo.svg';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import ProgressBar from './components/ProgressBar';
import flag from './photos/flag.jpeg';

function App() {
  const current = 3128.47;
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
          <li>Volunteers managed to evacuate the majority of children.</li>
          <li>We have about 125 children ranging from newborns to 10 year-olds. These children have recently become orphans and are emotionally traumatised.</li>
          <li>55 volunteers are maintaining the place. They do not take days off and they do not receive any support or income.</li>
          <li>They do not receive any support or income and the local people have no money to help them either. </li>
        </ul>

        <p style={{fontSize: '24px', fontWeight: 'bold', color: 'darkgreen'}}>
        We are raising money to respond to their urgent needs and help maintain these four places for the following six months.
        </p>

        <p style={{fontSize: '24px', color: 'rgb(26, 115, 232)'}}><b>
          If you would like to help, the PayPal account is:{' '}
          <em style={{textDecorationLine: 'underline'}}>zheleznyakov.dmitry@gmail.com</em>
        </b></p>
      </div>

      {/* <ProgressBar current={current} /> */}

      <div className="TextWrapper">
        <p>So far we've collected <b>£{current}</b> and with this money, we helped with:</p>
        <ul className="Results">
          <li>bought vital medicine for both the "Cafe" and the "School no. 3" that will last them for six months: on the way from Germany in 5 days (unavailable in Ukraine)</li>
          <li>got two second-hand baby cots: to be delivered in 2 days (now little children can sleep safely and comfortably (as they slept on the foldable camping beds)</li>
          <li>covered food expenses for the 5 volunteers for a month, so that they can continue taking care of the children without worrying about what they will eat</li>
          <li>bought some fresh groceries (milk, bread, fruit)</li>
          <li>got 5 warm jackets and 5 pairs of boots. 2 girls had their jackets torn. Now they are dressed warmly. The weather in Dnipro is -7C</li>
          <li>bought pacifiers, muslin cloths, baby dry formula packs for the "School no. 3"</li>
          <li>bought 2 second-hand prams: one for the "Cafe" and another on for the "School no. 3". They should arrive soon</li>
          <li>and with what was left afterward helped out financially to the "School no. 3" (children shampoos, baby nappy creams, miscellanies) </li>
</ul>
      </div>

      <ImageCarousel />


    </div>
  );
}

export default App;
