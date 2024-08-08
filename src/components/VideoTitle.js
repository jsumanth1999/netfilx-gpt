

const VideoTitle = ({title, overview}) => {
    return <div className="pt-[20%] px-6 md:px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-xl md:text-4xl font-bold text-white px-4">{title}</h1>
        <p className="hidden md:inline-block text-lg w-1/3 text-white px-4 p-4">{overview}</p>
        <div className="p-4">
            <button className="bg-white px-2 md:px-12 py-1 md:py-4 text-black rounded-lg hover:opacity-80">▶️ Play</button>
            <button className="hidden md:inline-block bg-gray-500 mx-2 px-12 py-4 text-white bg-opacity-50 rounded-lg">More Info</button>
        </div>
    </div>
}

export default VideoTitle;

