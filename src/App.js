import './App.css';
import ImageCarousel from './components/ImageCarousel';
// import ProgressBar from './components/ProgressBar';
import flag from './photos/flag.jpeg';

import Image from './components/Image';
import Video from './components/Video';
import Result from './components/Result';
import ProgressBar from './components/ProgressBar';

import imgBabyFood from './photos/IMG_20220308_212007_505.jpg';
import imgFood from './photos/IMG_20220308_212013_126.jpg';
import crib from './photos/2022-03-13-21-14-23.jpg';
import pram from './photos/IMG_20220309_042158_910.jpg';
import newPrams from './photos/prams.jpg';
import videoFood from './photos/VID_138580927_185612_608.mp4';
import water from './photos/275579781_3012185575778037_5614364930518451835_n.jpeg';
import children from './photos/2022-03-13-21-16-54.jpg';
import emma from './photos/2022-03-13-20-37-46.jpg';
import handToHand from './photos/IMG_20220313_192907_850.jpg';
import irpin from './photos/2022-03-16-17-09-16.jpg';
import irpin2 from './photos/2022-03-16-17-06-20.jpg';
import drawing1 from './photos/IMG_20220313_213752_359.jpg';
import drawing2 from './photos/IMG_20220313_213757_134.jpg';
import drawing3 from './photos/IMG_20220313_213801_768.jpg';

function App() {
  // const current = 5794.85 + 439.79;
  const current  = 218.39;
  const goal = 3000;

  const smallCarouselSize = 250
  return (
    <div className="App">
      <ImageCarousel>
        <Image src={irpin} size={smallCarouselSize} />
        <Image src={irpin2} size={smallCarouselSize} />
        <Image src={children} size={smallCarouselSize} />
        <Image src={drawing1} size={smallCarouselSize} />
        <Image src={emma} size={smallCarouselSize} />
        <Image src={drawing2} size={smallCarouselSize} />
        <Image src={handToHand} size={smallCarouselSize} />
        <Image src={drawing3} size={smallCarouselSize} />
      </ImageCarousel>

      <h1 style={{
        maxWidth: '90vw',
        width: '60%',
        textAlign: 'center',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        textAlign: 'start', 
        width: 'fit-content',
        fontSize: '3rem',
        color: 'blueviolet',
      }}>
        <span style={{
          marginLeft: "-100px",
        }}>
          <img src={flag} width={20} height={20} />
          {' '}Help for orphan children evacuated from the occupied cities{' '}</span>
        <img src={flag} width={20} height={20} />
      </h1>
      <div className="TextWrapper">
        <ul>
          {/* <li>An orphan house in Kharkov got severely damaged when a military operation began in the city. </li> */}
          {/* <li>Volunteers managed to evacuate the majority of children.</li> */}
          <li>Over 140 children were evacutated from the occupied cities (Kharkov, Kherson, Irpin and the Donetsk regeion.</li>
          <li>50 of children are babies.</li>
          <li>These children have recently become orphans and are emotionally traumatised.</li>
          <li>Volunteers are dedicated to provide care and support for them.</li>
          <li>They do not receive any support or income and the local people have no money to help them either. </li>
        </ul>

        <p style={{fontSize: '30px', fontWeight: 'bold', color: 'darkgreen'}}>
        We are raising money to respond to their urgent needs and help maintain their stock of food, water and essentials
        (nappies, formula milk, etc.).
        </p>

        <p style={{fontSize: '24px', color: 'rgb(26, 115, 232)'}}><b>
          If you would like to help, the PayPal account is:{' '}
          <em style={{textDecorationLine: 'underline'}}>zheleznyakov.dmitry@gmail.com</em>
        </b></p>
      </div>


      <div className="TextWrapper">
        <p>So far we've raised <b>£{current.toFixed(2)}</b> out of <b>£{goal.toFixed(2)}</b> </p>
        <ProgressBar current={current} goal={goal} />
        <p>With this money, we helped with:</p>
        <ul className="Results">
          <li>bought vital medicine for both the "Cafe" and the "School no. 3": on the way from Germany, but delayed at the customs waiting for the custom.</li>
          <li>paid for the customs fee in order to get the medication delivered</li>
          <li>ordered another batch of medicaiton needed for the other two schools + custom feed </li>
          <li>got two second-hand baby cots: delivered, see the photo (now little children can sleep safely and comfortably, as they slept on the foldable camping beds)</li>
          <li>covered food expenses for the 5 volunteers for a month, so that they can continue taking care of the children without worrying about what they will eat</li>
          <li>bought some fresh groceries (milk, bread, fruit)</li>
          <li>got 5 warm jackets and 5 pairs of boots. 2 girls had their jackets torn. Now they are dressed warmly. The weather is -7C</li>
          <li>bought pacifiers, muslin cloths, baby dry formula packs for the "School no. 3"</li>
          <li>bought 2 second-hand prams: one for the "Cafe" and another on for the "School no. 3": delivered, see the photo</li>
          <li>little boy Misha caught bronchitis and is now in the hospital. We ordered antibiotics for him</li>
          <li>stocked up with water and food for some time</li>
          <li>bought some tea and coffee for the volunteers</li>
          <li>and with what was left afterward helped out financially to the "School no. 3" (children shampoos, baby nappy creams, miscellanies) </li>
</ul>
      </div>

      <ImageCarousel>
         <Image src={crib} />
         <Image src={newPrams} />
         <Image src={water} />
         <Image src={imgBabyFood} />
         <Image src={imgFood} />
         <Video src={videoFood} itemType="video/mp4" />
         <Image src={pram} />
      </ImageCarousel>


    </div>
  );
}

export default App;
