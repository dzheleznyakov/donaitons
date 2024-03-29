import './App.css';
import ImageCarousel from './components/ImageCarousel';
import flag from './photos/flag.jpeg';

import Image from './components/Image';
import Video from './components/Video';
import MultiLanguageComponent from './components/MultiLanguageComponent';
import ProgressBar from './components/ProgressBar';
import LanguageChooser from './components/LanguageChooser';

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
import { createContext, Fragment, useRef, useState } from 'react';

export const LANGUAGES = {
  EN: 'En',
  RU: 'Ru',
};

export const LanguageContext = createContext(LANGUAGES.EN);

function App() {
  const [lang, setLang] = useState(LANGUAGES.EN);
  const topRef = useRef();
  const ourGoalRef = useRef();
  const doneRef = useRef();
  const kindnessRef = useRef();

  // const current = 5794.85 + 439.79;
  const current  = 218.39 + 208.10 + 363.36;
  const goal = 3000;

  const smallCarouselSize = 250;

  const scrollTo = ref => () => ref.current.scrollIntoView();

  const app = (
    <div className="App">
      <div className="ToolBar">
        {/* <LanguageChooser lang={lang} setLang={setLang} /> */}
        <a onClick={scrollTo(ourGoalRef)}>
          <MultiLanguageComponent en="Our goal" ru="Наша цель" />
        </a>
        <a onClick={scrollTo(doneRef)}>
          <MultiLanguageComponent en="How we have helped" ru="Чем мы помогли" />
        </a>
        <a onClick={scrollTo(kindnessRef)}>
          <MultiLanguageComponent en="Your kindness" ru="Ваша доброта" />
        </a>
        <a onClick={scrollTo(topRef)}>⏫</a>
      </div>
      <div className="Body">
        <div ref={topRef} />
        {/*<ImageCarousel style={{ marginTop: '60px'}}>
          <Image src={irpin} size={smallCarouselSize} clickable={false} />
          <Image src={irpin2} size={smallCarouselSize} clickable={false} />
          <Image src={children} size={smallCarouselSize} clickable={false} />
          <Image src={drawing1} size={smallCarouselSize} clickable={false} />
          <Image src={emma} size={smallCarouselSize} clickable={false} />
          <Image src={drawing2} size={smallCarouselSize} clickable={false} />
          <Image src={handToHand} size={smallCarouselSize} clickable={false} />
          <Image src={drawing3} size={smallCarouselSize} clickable={false} />
  </ImageCarousel>*/}

        <h1 className="H1">
          <span style={{
            marginLeft: "-100px",
          }}>
            <img src={flag} width={20} height={20} />
            {' '}
            <MultiLanguageComponent 
              en="Help for orphan children evacuated from the occupied cities" 
              ru="Помощь детям-сиротам, эвакуированным из оккупированных городов"
            />
            {' '}
          </span>
          <img src={flag} width={20} height={20} />
        </h1>
        <div className="TextWrapper">
          <p>
            <MultiLanguageComponent
              en={
                "Since the military invasion in Ukraine started orphan care homes have been under attack." +
                " Many of these buildings were destroyed and quite a few children died." +
                " Rescue teams urgently and successfully evacuated the children." +
                " This rescue operation is ongoing, and so far the group" +
                " has accomodated over 170 orphan children (devided into five groups and placed at different locations) from" +
                " Kharkiv, Kherson, Irpin and Donetsk region." +
                " Over 50 of them are babies." +
                " Many of these children became orphans during this invasion." +
                " They are scared and traumatised."
              }
              ru={
                "С момента начала военного вторжения в Украину детские дома-интернаты подверглись нападениям." +
                " Многие из этих зданий были разрушены, и немало детей погибло." +
                " Спасатели (ДСНС Украины) оперативно и успешно эвакуировали детей." +
                " Эта спасательная операция продолжается, и на сегодняшний день та группа, с которой я работаю, приняла" +
                " более 170 детей-сирот из Харькова, Херсона, а также Ирпени и Донецкой области. Из них более 50 детки-младенцы." +
                " Эти детки стали сиротами либо в раннем детстве, либо во время этой войны. Они напуганы и травмированы."
              }
            />
          </p>

          <p>
            <MultiLanguageComponent 
              en={
                "Later, for safety reasons, all children in five groups" +
                " were moved in the basements of various buildings." +
                " They are safe at the moment and are looked after by the volunteers."
              }
              ru={
                "Позже, для безопасности, всех детей в 5 группах" +
                " расселили по подвалам разных домов. Сейчас они в безопасности, за ними присматривают волонтеры."
              }
            />
          </p>

          {/*<p>
            <MultiLanguageComponent 
              en={
                "These volunteers are ordinary people who dedicate their time, efforts and risk their lives" +
                " in order to provide care and support to the children." +
                " They are there seven days a week." +
                " They are not receiving any income or financial support." +
                " Local people have no money to help them either."
              }
              ru={
                "Эти волонтеры — обычные люди, которые посвящают свое время, усилия и рискуют своей жизнью," +
                " чтобы заботиться и морально поддерживать всех деток. Они проводят время с детьми все семь дней в неделю." +
                " Они не получают никаких доходов или финансовой поддержки." +
                " У местных жителей тоже нет денег, чтобы им помочь."
              }
            />
            </p>*/}


          <p ref={ourGoalRef} style={{fontSize: '30px', fontWeight: 'bold', color: 'darkgreen'}}>
            <MultiLanguageComponent
              en={
                "We have been raising money to respond to their urgent needs and help maintain their stock of food, water and essentials" +
                " (nappies, formula milk, etc.)."
              }
              ru={
                "Мы собираем деньги на их нужды и чтобы у них был запас еды, воды и предметов первой необходимости" +
                " (подгузники, молочные смеси и т.д.)"
              }
            />
          </p>


          Latest update (28.03.2022):
          <br />
          <MultiLanguageComponent 
            en={"Luckily, the volunteers managed to get in touch with several local humanitarian aid and charitable organisations" +
            " who started helping them." +
            " It took some time, but this is a great news and we are happy for them." +
            " On behalf of all the volunteers, we warmly thank everyone who has helped us support them and the children" +
            " and ensure they had necessary essentials throughout this time." +
            " We've become so close with these volunteers and will continue keeping in touch with them." +
            " Thank you so much for your kindness and all the help."}
          />
          {/*<p style={{fontSize: '24px', color: 'rgb(26, 115, 232)'}}><b>
            <MultiLanguageComponent
              en="If you would like to help, the PayPal and Wise accounts are: "
              ru="Если вы хотите помочь, наш PayPal и Wise: "
            />
            <em>
              <a href="mailto:zheleznyakov.dmitry@gmail.com">
                zheleznyakov.dmitry@gmail.com
              </a>
            </em>
            <MultiLanguageComponent 
              en=""
              ru={
                <Fragment>
                  <br />
                  <span>
                    Украинская банковская карточка (внутри страны): 
                    <em>5375235109555</em>
                  </span>
                </Fragment>}
              />
          </b></p>*/}

          <p style={{fontSize: '24px', fontWeight: 'bold', color: '#f1651d'}}>
            <MultiLanguageComponent
              en={"Please visit our Etsy shop where we offer a few beautiful prints to buy to support other charitable organisations who help children and their families in Ukraine: "}
              ru={"Пожалуйста, также посетите наш магазин Etsy, где мы предлагаем несколько красивых принтов, чтобы поддержать детей-сирот: "}
            />
            <em>
              <a href="https://www.etsy.com/uk/shop/OrphansInUkraine">https://www.etsy.com/uk/shop/OrphansInUkraine</a>
            </em>
          </p>
        </div>
        <br />


        <div className="TextWrapper">
          {/*<p>
            <MultiLanguageComponent 
              en="The current target is "
              ru="Наша текущая цель "
            />
            <b>£{goal.toFixed(2)}</b>. 
            <MultiLanguageComponent
              en=" So far we've raised towards the target "
              ru=" Пока что мы собрали "
            />
            <b>£{current.toFixed(2)}</b>.</p>

              <ProgressBar current={current} goal={goal} />*/}

          {/*28.03.2022
          <p>
            <MultiLanguageComponent
              en="We are raising money to help with getting potties for the five groups of children and also baby cot beds for the fifth group of children that was evacuated from Irpen and Donetsk region two weeks ago."
              ru="Мы собираем деньги на приобретение горшков для пяти групп детей, а также детских кроваток для пятой группы детей, эвакуированных две недели назад из Ирпеня и Донецкой области."
            />
            </p>*/}

          <p ref={doneRef}>
            <MultiLanguageComponent
              en="With the money we have previously raised we helped with:"
              ru="С помощью денег, которые мы собрали раньше, мы помогли:"
            />
          </p>
          <div className="Results">
            21.02.2022
            <ul>
              <li>
                <MultiLanguageComponent
                  en="bought prentatal vitamins for the two pregnant ladies"
                  ru="купили витамины для двух беременных женщин"
                />
              </li>
              <li>
                <MultiLanguageComponent 
                  en="bought vitamin D for babies and children"
                  ru="купили витами D для детей"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en="organised a surprise treat for all the children in five groups: balloons, fruit, sweets, biscuits, cakes"
                  ru="организовали сюрприз для всех детей во всех пяти группах: воздушные шары, фрукты, сладости, печенье, торты"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en={"bought a bicycle for the little girl Anya for her birthday." +
                    " She witnessed her family being killed by the occupants in Irpen." +
                    " She was the only one who survived and she was very traumatised." +
                    " Her only wish was for her mom, dad and little brother to come home." +
                    " She also told us that her parents promised her a bicycle for her birthday"}
                  ru={"купили велосипед маленькой девочке Ане на день рождения." +
                    " Она была свидетельницей убийства её семьи оккупантами в Ирпене." +
                    " Она была единственной, кто выжил, и она была очень травмирована." +
                    " Её единственным желанием было, чтобы её мама, папа и младший брат вернулись домой." +
                    " Она также рассказала нам, что родители обещали ей велосипед на день рождения."}
                />
              </li>
            </ul>

            14.03.2022
            <ul>
              <li>
                  <MultiLanguageComponent
                    en="paid for the customs fee in order to get the medication delivered"
                    ru="оплатили таможенный сбор для доставки лекарств"
                  />
                </li>
                <li>
                  <MultiLanguageComponent
                    en="ordered another batch of medication needed for the other 2 groups  of children and paid the customs fee"
                    ru="заказали еще одну партию лекарств, необходимых для других 2 групп детей и оплатили таможенный сбор"
                  />
                </li>
                <li>
                  <MultiLanguageComponent
                    en="bought 5 warm jackets and 5 pairs of boots. Two girls had their jackets torn, but now they are dressed warmly. The weather there is -7C"
                    ru="купили 5 теплых курток и 5 пар сапог. У двух девочек порвались курточки, а теперь они одеты тепло. Погода там -7С"
                  />
                </li>
                <li>
                <MultiLanguageComponent
                  en='bought pacifiers, muslin cloths, baby dry formula milk for one group and children shampoos, baby nappy creams for the second group'
                  ru="купили пустышки, пеленки, детское молоко для одной группы и детские шампуни, детские присыпки для второй группы "
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en='bought antibiotics. Little boy Maxim caught bronchitis and was at the hospital. He is much better now'
                  ru="купили антибиотики. Маленький мальчик Максим заболел бронхитом и сейчас находится в больнице"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en="bought water and food for 4 groups for one week"
                  ru="купили воды и еды на 4 группы на одну неделю"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en="bought some tea and coffee for the volunteers"
                  ru="купили чай и кофе для волонтеров"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en='and with what was left helped out a little bit the fifth group of children that has recently arrived from Irpin and Donetsk region'
                  ru="а на остатки немного помогли пятой группе детей, недавно приехавшей из Ирпени и Донецкой области"
                />
              </li>
            </ul>

            07.03.2022
            <ul>
              <li>
                <MultiLanguageComponent
                  en='bought necessaly medication for 2 groups of children: arrived on 25.03.2022'
                  ru="купили жизненно-необходимые лекарства для 2 групп детей: в пути из Германии, но задержались на таможне"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en="bought 2 second-hand baby cots. Now, little children can sleep safely and comfortably, as they slept on the foldable camping beds."
                  ru="купили 2 б/у детские кроватки (см. фото). Теперь маленькие детки могут спать безопасно и комфортно, так как раньше они спали на раскладушках"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en="bought 2 second-hand prams: one for each group"
                  ru="купили 2 б/у коляски: по одной на каждую группу (см. фото)"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en="covered food expenses for the 5 volunteers for a month, so that they can continue taking care of the children without worrying about what they will eat"
                  ru="покрыли расходы на питание для 5 волонтеров на месяц, чтобы они могли продолжать заботиться о детях, не беспокоясь о том, что они будут есть"
                />
              </li>
              <li>
                <MultiLanguageComponent
                  en="bought some fresh groceries (milk, bread, fruit) for one week"
                  ru="купили свежих продуктов (молоко, хлеб, фрукты) на одну неделю"
                />
              </li>
            </ul>
          </div>
        </div>

        {/*<ImageCarousel>
          <Image src={crib} />
          <Image src={newPrams} />
          <Image src={water} />
          <Image src={imgBabyFood} />
          <Image src={imgFood} />
          <Video src={videoFood} itemType="video/mp4" />
          <Image src={pram} />
            </ImageCarousel>*/}




        <h2 ref={kindnessRef} style={{ color: 'blueviolet', fontSize: '36px'}}>
          <MultiLanguageComponent
            en="❤️ Your kindness ❤️"
            ru="❤️ Ваша доброта ❤️ "
          />
        </h2>

        <article className="KindnessCard">
          <MultiLanguageComponent
            en={<span><em>"You are all so strong and brave."</em> Constance and Chris, Seattle, USA</span>}
            ru={<span><em>"Вы все сильные и храбрые."</em> Констанс и Крис, Сиэтл, США</span>}
          />
        </article>

        <article className="KindnessCard">
          <MultiLanguageComponent
          en={<span>
              <em>"Our thoughts are with you all.
              You and the children are not forgotten and we will continue 
              to think of you and support you as best as we can."</em>
              {' '}The Heaton family, England, UK
            </span>}
          ru={<span>
            <em>"Наши мысли со всеми вами.
            Вы и дети не забыты, и мы будем продолжать думать о вас
            и поддерживать вас, насколько это возможно."</em>
            {' '}Семья Хитон, Англия, Великобритания
          </span>}
          />
        </article>

        <article className="KindnessCard">
          <MultiLanguageComponent
            en={<span>
              <em>"You are going through a hard time right now.
                Please know that people all over the world are thinking of you.
                You are in our thoughts, and we are all sending support and love your way.
                Know that you are loved by us. 
                You are strong and you will get through this!"</em>
              {' '}Love and hugs from Britta from Zurich, Switzerland</span>}
            ru={<span>
              <em>"Вы сейчас переживаете тяжелые времена. 
                Пожалуйста, знайте, что люди во всем мире думают о вас. 
                Вы в наших мыслях, и мы все посылаем вам поддержку и любовь. 
                Знайте, что ты любим нами. Вы сильные и вы справитесь!"</em>
                {' '}С любовью и объятиями, Бритта из Цюриха, Швейцария</span>}
          />
        </article>
      </div>

      </div>
  );

  return (
    <LanguageContext.Provider value={lang}>
      {app}
    </LanguageContext.Provider>
  );
}

export default App;
