
import  Like  from "./Like" ; 

const Article = (props) => {
    const {title , body , auteur , like} = props.article;
    return <div className="col-6">
        <article className="card mb-4">
            <header className="card-header">
                <h2 className="mb-0">{title}</h2>
            </header>
            <div className="card-body">
                <img src="http://placehold.it/600x300" alt="" className="img-thumbnail mb-2"/>
                <p className="mb-0">{body}</p>
            </div>
            <footer className="card-footer d-flex justify-content-between">
                <p className="mb-0">{auteur}</p>
                <Like nb={like}/>
            </footer>
        </article>
    </div>
}
export default Article ;