import qrImg from './IMAGES/images/image-qr-code.png'
import './App.css'

function App() {


  return (
    <div className="App">


      <div className="qr">
        <img src={qrImg} alt="qr" />
        <div className="text">
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </p>
        </div>

      </div>


      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >
          Frontend Mentor
        </a>.
        Coded by <a href="#">Alamin</a>
      </div>

    </div>

  )
}

export default App
