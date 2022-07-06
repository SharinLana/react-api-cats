import mirror from './mirror.png';

function CatComponent( {catImage, advice} ) {

    return (
        <div className='App-container'>
        <h1 className='App-header'>Get an advice from the wise!</h1>
        <div className='App-image-container'>
          <img className='App-mirror' src={mirror} alt='frame'/>

          <div className='App-reflection-container'>
           <div className='App-reflection'>
             <img className='kitty' src={catImage} alt='cat'/>
           </div>
          </div>

        </div>
        <p className='App-par'>Click the button to see your Guardian Cat in the reflection and receive an advice from it.</p>
        <p className='App-advice'>{advice}</p>
      </div>
    )

}

export default CatComponent;