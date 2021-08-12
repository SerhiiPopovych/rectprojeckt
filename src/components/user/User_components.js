import {Address_components} from "./address/Address_component";

export function User_components({name, username, email, phone, website, userAddres}) {
    // let {key, name, username, email, phone, website,  adres} = props
    return (
        <div>
            <h2> {name} </h2>
            <br/> {username}; Phone: {phone}; Website: {website}; Email: {email}
            <Address_components addres={userAddres}/>

        </div>
    )
}