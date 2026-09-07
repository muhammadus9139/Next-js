'use client';

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/apiSlice";
import "./ApiUsers.css";

export default function ApiUsers() {
    const dispatch = useDispatch();
    const { data: users, status, error } = useSelector((state) => state.apiUsers);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(fetchUsers());
    }

    return (
        <section className="api-users-panel">
            <p className="api-users-eyebrow">REDUX TOOLKIT API</p>
            <div className="api-users-heading">
                <div>
                    <h1>Users from API</h1>
                    <p>Fetch server data and keep the request state in Redux.</p>
                </div>
                <span className={`api-status api-status-${status}`}>{status}</span>
            </div>

            <form className="api-users-form" onSubmit={handleSubmit}>
                <button type="submit" disabled={status === "loading"} suppressHydrationWarning>
                    {status === "loading" ? "Loading..." : "Fetch users"}
                </button>
            </form>

            {error && <p className="api-error">{error}</p>}

            <div className="api-users-list">
                {users.length === 0 && status !== "loading" ? (
                    <p className="api-empty">Submit the form to load users from the API.</p>
                ) : (
                    users.map((user) => (
                        <article className="api-user-card" key={user.id}>
                            <span>{user.name.charAt(0).toUpperCase()}</span>
                            <div>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}
