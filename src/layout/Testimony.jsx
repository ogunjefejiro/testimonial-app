import avatar from "../assets/avatar.png"

const Testimony = ({testimony}) => {
    const {avatar, firstName, lastName, city, type, text} = testimony
    return (
        <div className="testimony">
            <img src={avatar} className="avatar" alt="" />
            <h3>{`${firstName} ${lastName}`}</h3>
            {city && <p className="city">{`In ${city}`}</p>}
            <p className={`badge ${type==="vendor"? "vendor" : "" }`}>{type}</p>
            <p>{text}</p>
        </div>
    )
}

export default Testimony
