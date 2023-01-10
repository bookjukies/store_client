import { BackIcon, NextIcon, PlayIcon, BuyCartIcon, VolumeIcon, ListIcon} from "./Icons"
import cover from './assets/logo192.png'

const Player = () =>{

    return(
        <div className="w-full  bg-slate-500 px-10 flex justify-between">
            <div className="flex">
                <img className="h-20" src={cover} alt="cover" />
                <div>
                    <p>Amazing</p>
                    <p>12K plays</p>
                    <button className="flex justify-between bg-sky-600 w-24 h-8 px-3 py-0.5 rounded text-white hover:bg-sky-700">
                        <BuyCartIcon /> $19.99</button>
                </div>
            </div>
            <div className="flex">
                <BackIcon />
                <PlayIcon />
                <NextIcon />
            </div>
            <div className="flex">
                <VolumeIcon />
                <ListIcon />
            </div>
        </div>
    )
}

export default Player