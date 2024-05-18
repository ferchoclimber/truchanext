//button personalizado

export default function Button2 ({children, onClick}){
    return (
        <button onClick={onClick} 
        className="bg-blue-500 hover:bg-blue-400"
          >
    {children}
    </button>
    )
} 