import { IoClose,IoCheckmark } from "react-icons/io5";


const StatusBar = ({fraction, finish}) => {
    var dynamicWidth = {};
    var dynamicColor = { backgroundColor: '#E0E0E0',};

    if (fraction === "0/4") {
        dynamicWidth = { width: '4%',}
    } else if (fraction === "1/4") {
        dynamicWidth = { width: '25%',}
    } else if (fraction === "2/4") {
        dynamicWidth = { width: '50%',}
    } else if (fraction === "3/4") {
        dynamicWidth = { width: '75%',}
    } else {
        dynamicWidth = { width: '100%',}
        dynamicColor = { backgroundColor: '#00C49A',}
    }


    return (
        <header className="flex w-full justify-between items-center mb-2">
            <IoClose size={32}/>

            <h4 className="px-3">{fraction}</h4>

            <div className="w-full h-1/3 bg-bar-gray rounded-full flex justify-between items-center">
                <div style={ dynamicWidth } className="h-full bg-green rounded-full">
                </div>
                <div className="w-6 h-6 rounded-full right-6 absolute flex justify-center items-center" 
                style={ dynamicColor }>
                    {finish==="1" && <IoCheckmark size={20} color="white"/>}
                </div>
            </div>
        </header>
    )
};

export default StatusBar;