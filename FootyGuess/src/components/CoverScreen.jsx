import { useState } from 'react'

function CoverScreen({ onGameStart }) {

  const [step, setStep] = useState(1);

  function startGame(difficulty) {
    onGameStart(difficulty)
  }

  return (
    <>
      {
        step == 1 && (
          <div className='flex flex-col items-center justify-between p-3  w-full text-white rounded-3xl border-10 '>
            <span className="text-9xl font-bold text-yellow-500 pt-5">FootyGuessr</span>
            <p className="text-center font-semibold text-2xl font-bebas-neue">Welcome to the FootyGuess game <br/>Test if you are a baller or not</p>
            <button
              onClick={() => setStep(2)}
              className="group w-1/2 bg-yellow-500 my-4 px-1 py-3 text-sm font-semibold rounded-full border-purple-800 border-[2px] transition-colors hover:text-white hover:bg-yellow-600 hover:border-transparent"
            >
              <span className="text-xl transform transition-transform duration-200 ease-in-out group-hover:scale-110">
                Click to play :)
              </span>
            </button>
          </div>
        )
      }
      {
        step == 2 && (
          <div className='flex flex-col justify-between p-6 py-12 w-full  '>
            <div className='flex flex-col items-center'>
              <button onClick={() => startGame("easy")} className="w-3/4 mx-auto my-2 px-1 py-2 text-lg text-green-500 bg-[#6a2492] font-semibold rounded-full border-2 border-green-200 transition-colors hover:text-white hover:bg-green-700 ">
                Easy
              </button>
              <span className=' text-white font-semibold text-lg'>200 most expensive players historically</span>
            </div>
            <div className='flex flex-col items-center'>
              <button onClick={() => startGame("medium")} className="w-3/4 mx-auto my-2 px-1 py-2 text-lg text-amber-500 font-semibold bg-[#6a2492] rounded-full border-2 border-amber-200 transition-colors hover:text-white hover:bg-amber-500">
                Medium
              </button>
              <span className='text-lg text-white font-semibold'>500 most expensive players currently</span>
            </div>
            <div className='flex flex-col items-center'>
              <button onClick={() => startGame("hard")} className="w-3/4 mx-auto my-2 px-1 py-2 text-lg text-red-500 font-semibold bg-[#6a2492] rounded-full border-2 border-red-200 transition-colors hover:text-white hover:bg-red-600 hover:border-transparent">
                Hard
              </button>
              <span className='text-lg text-white font-semibold'>Players from the top 5 leagues</span>
            </div>
          </div>
        )
      }
    </>
  )
}
export default CoverScreen;
