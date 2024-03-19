export default function Input(props){
    return (
        <div className="flex flex-col ">
            <label className="text-gray-200">{props.label}</label>
            <span className="text-sm text-gray-200">{props.description}</span>
            <input type={props.type} className="p-2 text-black rounded-md shadow-md" placeholder={props.placeholder}></input>
        </div>
    );
}