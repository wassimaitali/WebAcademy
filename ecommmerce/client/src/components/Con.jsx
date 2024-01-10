// import { useState, useEffect } from "react";

// import axios from "axios";

// const Users = () => {
//   const [ users, setUsers ] = useState();

//   useEffects (() => {
//     let isMounted = true;
//     const controllers = new AbortController();

//     const getUsers = async () => {
//       try { 
//         const response = await axios.get('/users', {
//           signal: controllers.signal
//         });
//         console.log(response.data);
//         isMounted && setUsers(response.data);
//       } catch (err) { 
//         console.error(err);
//       }
//     }

//     getUsers();

//     return () => {
//       isMounted = false;
//       controller.abort();
//     }

//   },[])

//   return (
//     <article>
//       <h1>Users List</h1>
//       {users?.length
//         ? (
//           <ul>
//             {users.map((user, i) => <li key={i}>{user?.username}</li>)}
//           </ul>
//         ) : <p>No users to display</p>
//       }
//     </article>
//   );
// };

// export default Users;
