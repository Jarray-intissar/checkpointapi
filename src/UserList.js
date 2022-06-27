import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const UserList = () => {
  const [userlist, setuserlist] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((e) => setuserlist(e.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ 
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
        marginBottom:"20px",
        marginTop:"10px",
        marginLeft:"20px",
        marginRight:"20px",
        padding:"30px",
    }} 
   >
      {userlist.map((el) => (
        <Card style={{ width: "30%",
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
        marginBottom:"20px",
         }}>
          <Card.Body>
            <Card.Title className="info" 
            style={{
                   color:" #fd6c9e",
                   textAlign:"center"
 
            }}
            >{el.name}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ textAlign: "center" }}
            >
              {el.username}
            </Card.Subtitle>
            <Card.Text className="info">
              <b>Address:</b> {el.address.street}, 
                         {el.address.city}, 
                          {el.address.zipcode} 
            </Card.Text>
            <Card.Text className="info1">
             <b> phone:</b> {el.phone}
             </Card.Text>
             <Card.Text className="info2">
              <b>website:</b> {el.website}
              </Card.Text>
              <Card.Text className="info3">
             <b>company:</b>{el.company.name}
                      {el.company.catchPhrase}
                      {el.company.bs}
            </Card.Text>
            <Card.Link href="#" className="info">
              {el.email}
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
