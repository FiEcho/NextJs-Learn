export default function Input (props){
    return (
        <input type={props.type} className="w-full p-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" value={props.value} onChange={props.onChange}/>
    )
}