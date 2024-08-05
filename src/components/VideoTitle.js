

const VideoTitle = ({title, overview}) => {
    return <div className="pt-[20%] pl-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-4xl font-bold text-white px-4">{title}</h1>
        <p className="text-lg w-1/3 text-white px-4 p-4">{overview}</p>
        <div className="p-4">
            <button className="bg-white px-12 p-5 text-black rounded-lg hover:opacity-80">▶️ Play</button>
            <button className="bg-gray-500 mx-2 px-12 p-5 text-white bg-opacity-50 rounded-lg">More Info</button>
        </div>
    </div>
}

export default VideoTitle;

