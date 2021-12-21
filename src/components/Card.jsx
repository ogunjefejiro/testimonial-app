

const Card = ({children}) => {

    return (
        <div className="overlay">
            <div className="card-container">
                <div className="card">
                    {children}
                </div>
            </div>
        </div>
        
        
    )
}
 

export default Card
