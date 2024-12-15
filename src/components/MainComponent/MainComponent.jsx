import posts from "../../data/posts";

function Main() {
    const newPosts = [...posts].map((element) => {
        return (
            <>
                <div className="col-3">
                    <div className="card">
                        <img src={element.image} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.content}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </>
        )
    })


    return (

        <main>
            <div className="container">
                <div className="row align-items-center">
                    {newPosts}
                </div>
            </div>
        </main>

    )
}

export default Main;