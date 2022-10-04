import {toast} from "react-toastify";
import {getAllUser, createUser, deleteUser} from "./api";
import {useEffect, useState} from "react";
import NameCards from "./nameCards";
import {Loading} from "./loading";
import {FormElement} from "./form";

export const Crud = () => {
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false);
    const [allNames, setAllNames] = useState([]);

    const loadName = () => {
        getAllUser()
            .then(res => setAllNames(res.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        createUser({name})
            .then(res => {
                setLoading(false);
                setName("");
                toast.success(res.data.name + "added successfully");
                loadName()
            })
            .catch(err => {
                setLoading(false);
                if(err.response.status === 400)toast.error(err.response.data);
            });
    }

    const handleDelete = (id) => {
        setLoading(true)
        deleteUser(id)
            .then((res) => {
                setLoading(false)
                toast.success("Name Deleted Successfully")
                loadName()
            })
            .catch(err => {
                setLoading(false)
                if(err) toast.error("Couldn't remove user");
            });
    }

    useEffect(()=> {
        loadName()
    }, []);

    return (
        <div className={"container-fluid"}>
            <div className={"col-md-6"}>
                <ul className={"list-group"}>
                    <h1>Crud Application with Json Server</h1>
                    <FormElement
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                    />
                    {loading ? ( <Loading /> ): (
                        <>
                            {allNames.map(name => (
                                <NameCards
                                    key={name.id}
                                    handleDelete={handleDelete}
                                    {...name}
                                />
                            ))}
                        </>
                    )}
                </ul>
            </div>
        </div>
    )

}