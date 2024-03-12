export default function Button(props){
    return (
        <button className="text-xl mt-4 p-2 bg-slate-500 text-white rounded-md shadow-md disable:bg-gray-300 disable:cursor-not-allowed">{props.text}</button>
    );
}