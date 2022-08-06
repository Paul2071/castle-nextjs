import Link from "next/link"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Ooops</h1>
            <h2>This page cannot be found.</h2>
            <p>Go back to the home page <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;