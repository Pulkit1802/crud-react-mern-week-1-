import {Input} from "antd";

export const FormElement = ({handleSubmit, name, setName}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={"form-group"}>
                <Input
                    type={"text"}
                    placeholder={"Enter Name"}
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    style={{width: "50%"}}
                    autoFocus
                    required
                />
                <br />
                <button className={"btn btn-primary mt-1"} onClick={() => handleSubmit(name)}>Submit</button>
                <button className={"btn btn-danger mt-1"} onClick={()=>setName("")}>Cancel</button>
            </div>
        </form>
    )
}