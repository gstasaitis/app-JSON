const HomeVideo = () => {
return (
    <>
    <div className="video">
    <video controls loop autoPlay muted>
        <source src="./src/media/video/mainvid.mp4" type="video/mp4"/>
    </video>
    </div>
    </>
    )
}

export default HomeVideo