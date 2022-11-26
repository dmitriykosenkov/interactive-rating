import { useEffect, useState } from 'react';
import s from './App.module.css';
import star from './assets/icon-star.svg'
import thankYou from './assets/illustration-thank-you.svg'


function App() {
   const [rating, setRating] = useState(0)
   const [submit, setSubmit] = useState(false)
   const [rates] = useState([
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
   ])
   useEffect(() => {
      console.log('useEffect', submit);
      let timer1 = setTimeout(() => {
         setRating(0)
         setSubmit(false)
      }, 4000);

      return () => {
         clearTimeout(timer1);
      };
   }, [submit])
   const onRate = (e) => {
      setRating(e.target.value)
   }
   const onSubmit = () => {
      setSubmit(true)
   }
   return (
      <div className={s.dashboard}>
         <div className={s.dashboardContent}>
            {!submit ?
               <div className={s.ratingCard}>
                  <div className={s.ratingStar}><img className={s.starIcon} src={star} alt="star" /></div>
                  <h3 className={s.title}>How did we do?</h3>
                  <div className={s.text}>Please let us know how we did with your support request. All feedback is appreciated
                     to help us improve our offering!</div>
                  <ul className={s.ratingGroup}>
                     {rates.map(rate => (
                        <li onClick={onRate} className={rate.value === rating ? `${s.ratingItem} ${s.ratingItemActive}` : s.ratingItem} value={rate.value}>{rate.label}</li>
                     ))}
                  </ul>
                  <button onClick={onSubmit} className={s.ratingSubmit} type='submit'>Submit</button>
               </div>
               :
               <div className={s.resultCard}>
                  <img className={s.thankYouImage} src={thankYou} alt="thank you" />
                  <div className={s.result}>You selected {rating} of 5</div>
                  <h3 className={s.title}>Thank you!</h3>
                  <div className={s.textResult}>We appreciate you taking the time to give a rating. If you ever need more support,
                     don’t hesitate to get in touch!</div>
               </div>}
         </div>
         <footer className={s.footer}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Dmytro K.</a>.
         </footer>
      </div>
   );
}

export default App;
