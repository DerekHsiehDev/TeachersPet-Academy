import Vimeo from '@u-wave/react-vimeo';


const Video = ({videoURL}) => {

    return (
        <Vimeo
            showPortrait={false} showTitle={false}
            video={videoURL} width={640}

               height={480}/>

    )

}


export default Video;