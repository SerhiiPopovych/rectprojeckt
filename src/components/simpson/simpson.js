import './simpson.css'
export function Simpson({name, surname, age, info, photo}) {

    return (
        <div>
            <h2>{name} {surname}</h2>
            <img
                src={photo}
            />
            <p> Age - {age} years</p>
            <p> {info}</p>

        </div>
    )


}