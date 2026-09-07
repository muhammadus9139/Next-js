'use client';

import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./slice";
import { store } from "./store";
import { useEffect, useState } from "react";

const USERS_STORAGE_KEY = "next-users";

function UserPersistence({ children }) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [hasLoadedUsers, setHasLoadedUsers] = useState(false);

    useEffect(() => {
        try {
            const savedUsers = localStorage.getItem(USERS_STORAGE_KEY);

            if (savedUsers) {
                const parsedUsers = JSON.parse(savedUsers);

                if (Array.isArray(parsedUsers)) {
                    dispatch(setUsers(parsedUsers));
                }
            }
        } catch {
            localStorage.removeItem(USERS_STORAGE_KEY);
        } finally {
            setHasLoadedUsers(true);
        }
    }, [dispatch]);

    useEffect(() => {
        if (hasLoadedUsers) {
            localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
        }
    }, [users, hasLoadedUsers]);

    return (
        children
    );
}

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <UserPersistence>{children}</UserPersistence>
        </Provider>
    );
}
