import {getOneUser, updateUser} from "./api";
import {useEffect, useState} from "react";
import {Loading} from "./loading";
import {FormElement} from "./form";
import {toast} from "react-toastify";

export default ({history, match}) => {
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    const loadName = () => {
        getOneUser(match.params.id).then((user) => {
            setName(user.data.name);
        })
    }

    const handleSubmit = () => {
        setLoading(true);
        updateUser(match.params.id, {name})
            .then(res => {
                setLoading(false)
                toast.success("User Name Updated. Redirecting in 2s");
                setTimeout(()=>{
                    window.location.replace("http://localhost:3000/")
                }, 2000);
            })
            .catch(err => {
                setLoading(false);
                toast.error("Failed to update user")
            });
    }

        useEffect(()=>{
        loadName();
    }, [])

    return(
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col"}>
                    {loading? <Loading /> : (
                        <>
                            <h1>Update Name</h1>
                            <FormElement
                                name={name}
                                handleSubmit={handleSubmit}
                                setName={setName}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}