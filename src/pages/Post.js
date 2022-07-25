import { useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { onValue, ref, set } from "firebase/database"
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"

function Post() {
    const [value, setValue] = useState('')
    const [values, setValues] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [currentUser])

    useEffect(() => {
        if (!values.length) {
            onValue(ref(db, "posts"), (snapshot) => {
                const newValues = []

                snapshot.forEach((childSnapshot) => {
                    const key = childSnapshot.key
                    const value = childSnapshot.val().value

                    newValues.push({ key, value })
                })

                setValues(newValues)
            })
        }
    }, [values])

    const handlePost = async (e) => {
        e.preventDefault()

        if (!currentUser) return navigate("/login")

        try {
            await set(ref(db, `posts/${Date.now()}`), { value })
            alert('post created')
            setValue('')
        } catch (error) {
            alert(error.message)
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <h4>Write your story</h4>
                <form onSubmit={handlePost}>
                    <input type="text" value={value} placeholder="Post" onChange={(e) => { setValue(e.target.value) }} />
                    <input type="submit" value="Submit" />
                </form>
                <h4>All Post</h4>
                <ul>
                    {
                        values.map((value) => {
                            return (
                                <li key={value.key}>{value.value}</li>
                            )
                        })
                    }
                </ul>
            </header>
        </div>
    );
}

export default Post