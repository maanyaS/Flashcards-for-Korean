import { use, useState } from 'react'
import './App.css'
import Flashcard from '../components/Flashcard'

const App = () => {
const array = [
  {title: "안녕하세요 (Annyeonghaseyo)", description: "Hello", color:"green"}, 
  {title: "감사합니다 (Ghamsahamnida)", description: "Thank you", color:"green"}, 
  {title: "죄송합니다 (Jwisonghamnida)", description: "Sorry", color:"yellow"}, 
  {title: "네 (Ne)", description: "Yes", color:"green"}, 
  {title: "아니요 (Aniyo)", description: "No", color:"green"}, 
  {title: "저기요 (Jeogiyo)", description: "Excuse me", color:"yellow"}, 
  {title: "얼마예요? (Eolmayeyo?)", description: "How much?", color:"red"}, 
  {title: "주세요 (Juseyo)", description: "Please give me.", color:"red"}, 
  {title: "화장실이 어디예요? (Hwajangsiri eodiyeyo?)", description: "Where is the restroom?", color:"red"}, 
  {title: "사람 (Saram)", description: "Person", color:"yellow"}, 
  {title: "대박 (Daebak)", description: "Awesome", color:"yellow"}];
const [count, setCount] = useState(0);
const incrementCount = () => {
  setCount(Math.floor(Math.random()*(array.length)));
}


/*const [descr, setDescr] = useState({array[count][title]})
const updateDescr = () => {
  s
}*/

  return(
    <div className='App'>
      <div className='header'>
        <h1>The Ultimate Korean Guide!</h1>
        <h2>How good are you at the Korean basics? Test all your Korean knowledge here!</h2>
        <h3>Number of cards: {array.length}</h3>
      </div>
      <div className='Flashcard'>
        <Flashcard title={array[count].title} description={array[count].description} color={array[count].color}/>
      </div>
      <div className='buttons'>
        <button onClick={incrementCount}>Next</button>
      </div>
    </div>
  )

} 
export default App;