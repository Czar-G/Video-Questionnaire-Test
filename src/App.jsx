import './App.css'
import { ContainerVQ, ContainerVideoCard, ModalVideo, VideoRecorder } from './components'
import { VQProvider } from './context/VideoQuestionContext'

function App() {

  return (

    <>
      {/* <VideoRecorder></VideoRecorder> */}
      <VQProvider>
        <ModalVideo></ModalVideo>
        <ContainerVQ>
          <ContainerVideoCard></ContainerVideoCard>
        </ContainerVQ>
      </VQProvider>
    </>


  )
}

export default App
