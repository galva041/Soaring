import { IoClose } from "react-icons/io5";

const StatusBar = ({fraction}) => {
    
    return (
        <header className="flex w-full justify-between items-center">
            <IoClose size={32}/>

            <h4 className="px-3">{fraction}</h4>

            <div className="w-full h-2/3 bg-bar-gray rounded-full">
                <div style={{ width: {fraction}}} className="h-full bg-green rounded-full"></div>
            </div>
        </header>
    )
};

export default StatusBar;