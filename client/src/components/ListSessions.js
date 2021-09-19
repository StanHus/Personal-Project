import React, { Fragment, useEffect, useState } from "react";

import EditSession from "./EditSession";
import "../css/style.css"

const ListSessions = () => {
  const [sessions, setSessions] = useState([]);

  //delete session function

  const deleteSession = async (id) => {
    try {
      const deletSession = await fetch(`http://localhost:5000/list/${id}`, {
        method: "DELETE"
      });

      setSessions(sessions.filter(session => session.session_id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const getSessions = async () => {
    try {
      const response = await fetch("http://localhost:5000/list");
      const jsonData = await response.json();

      setSessions(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSessions();
  }, []);

  console.log(sessions);

  return (
    <Fragment>
      {" "}
      <table className = "list">
        <tbody className = "containers">
          {sessions.map(session => (
            <tr className = "entry" key={session.session_id}>
              <td>{session.muscles_trained}</td>
              <td>
                <EditSession session={session} />
              </td>
              <td>
                <button
                  className="delete_button"
                  onClick={() => deleteSession(session.session_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListSessions;