import {Geo_components} from "./geo/Geo_component";

export function Address_components({addres}) {
    // let {addres} = props
    return(
        <div>
            User address:<br/> Sity: {addres.city} <br/>Street: {addres.street}<br/> Suite: {addres.suite}<br/> Zipcode: {addres.zipcode}<br/>
            <Geo_components geo={addres.geo}/>
        </div>
    )
}