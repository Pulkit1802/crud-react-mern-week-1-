import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default (props) => (

    <div className={"border row mx-2 align-items-left"}>
            <li className={"list-group-item"}>
                <span className={"float-start"}>
                    {props.name}
                </span>
                <span
                    onClick={() => props.handleDelete(props.id)}
                    className="btn btn-sm float-end"
                >
                    <DeleteOutlined
                        className={"text-danger"}
                    />
                </span>

                <span
                    onClick={() => console.log("Delete Pressed")}
                    className="btn btn-sm float-end"
                >
                    <Link to={`/update/${props.id}`}>
                        <EditOutlined
                            className={"text-warning"}
                        />
                    </Link>
                </span>
            </li>
    </div>

)