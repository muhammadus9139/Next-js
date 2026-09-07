'use client'
import { useSelector, useDispatch } from "react-redux";
import { removeuser } from "../redux/slice";
import "./DisplayUsers.css";

export default function DisplayUsers() {

    const userData = useSelector((data) => data.users)

    const dispatch = useDispatch();

    return (
        <section className="display-users">
            <h2>Display Users</h2>
            <p className="user-count">{userData.users.length} {userData.users.length === 1 ? "user" : "users"} added</p>
            <div className="users-list">
                {userData.users.length === 0 ? (
                    <p className="empty-users">Your added users will appear here.</p>
                ) : (
                    userData.users.map((user) => (
                        <div key={user.id} className="user">
                            <span className="user-avatar">{user.name.charAt(0).toUpperCase()}</span>
                            <p>{user.name}</p>
                            <button className="remove-user" onClick={() => dispatch(removeuser(user.id))}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}
