const Users = () => {
    return (  
        <div>
            <h3> {props.name} </h3>
            <h3> {props.occupation} </h3>
            <h3> {props.sex} </h3>
            <h3> {props.nationality} </h3>
            
        </div>
    );
}

const props = {
    name: 'Yusuff Muslim',
    occupation: "Developer",
    sex: 'Male',
    nationality: 'Nigerian'
}
 
export default Users;